import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import { usePrefersReducedMotion } from "../../hooks/use-reduced-motion";

const AUTO_ROTATE_MS = 5000;
// Equal to the largest visible count so clones always fill the visible window.
const CLONE_COUNT = 3;
const DRAG_START_PX = 8;
const SWIPE_RATIO = 0.2;

const mod = (n, m) => ((n % m) + m) % m;
const restPos = (p, count) => CLONE_COUNT + mod(p - CLONE_COUNT, count);

const getVisibleCount = () => {
  if (window.matchMedia("(min-width: 992px)").matches) return 3;
  if (window.matchMedia("(min-width: 768px)").matches) return 2;
  return 1;
};

export default function ProjectCarousel({ projects, paused, onSelect }) {
  const count = projects.length;
  const reducedMotion = usePrefersReducedMotion();
  const [visible, setVisible] = useState(getVisibleCount);
  const [pos, setPos] = useState(CLONE_COUNT);
  const [animate, setAnimate] = useState(true);
  const [dragging, setDragging] = useState(false);
  const [dragX, setDragX] = useState(0);
  const [tick, setTick] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [blurred, setBlurred] = useState(false);
  const viewportRef = useRef(null);
  const dragRef = useRef(null);

  const extended = [...projects.slice(-CLONE_COUNT), ...projects, ...projects.slice(0, CLONE_COUNT)];
  const realIndex = mod(pos - CLONE_COUNT, count);
  const transitionOn = animate && !dragging && !reducedMotion;

  useEffect(() => {
    const onResize = () => setVisible(getVisibleCount());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const onVisibility = () => setBlurred(document.hidden);
    const onBlur = () => setBlurred(true);
    const onFocus = () => setBlurred(false);
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("blur", onBlur);
    window.addEventListener("focus", onFocus);
    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("blur", onBlur);
      window.removeEventListener("focus", onFocus);
    };
  }, []);

  // Re-enable transitions one frame after an instant jump.
  useEffect(() => {
    if (animate) return undefined;
    const id = requestAnimationFrame(() => setAnimate(true));
    return () => cancelAnimationFrame(id);
  }, [animate]);

  const step = useCallback(
    (delta) => {
      setAnimate(true);
      setPos((p) => restPos(p, count) + delta);
    },
    [count]
  );

  // Manual navigation bumps `tick`, which restarts the auto-rotation timer.
  const navigate = (delta) => {
    if (delta === 0) return;
    step(delta);
    setTick((t) => t + 1);
  };

  const goTo = (target) => {
    let delta = mod(target - realIndex, count);
    if (delta > count / 2) delta -= count;
    navigate(delta);
  };

  useEffect(() => {
    if (paused || hovered || blurred || dragging || reducedMotion) return undefined;
    const id = setInterval(() => step(1), AUTO_ROTATE_MS);
    return () => clearInterval(id);
  }, [tick, paused, hovered, blurred, dragging, reducedMotion, step]);

  const handleTransitionEnd = (event) => {
    if (event.target !== event.currentTarget) return;
    if (pos >= CLONE_COUNT + count || pos < CLONE_COUNT) {
      setAnimate(false);
      setPos(restPos(pos, count));
    }
  };

  const handlePointerDown = (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    dragRef.current = { id: event.pointerId, startX: event.clientX, active: false };
  };

  const handlePointerMove = (event) => {
    const drag = dragRef.current;
    if (!drag || drag.id !== event.pointerId) return;
    const dx = event.clientX - drag.startX;
    if (!drag.active) {
      if (Math.abs(dx) < DRAG_START_PX) return;
      drag.active = true;
      event.currentTarget.setPointerCapture(event.pointerId);
      setDragging(true);
    }
    setDragX(dx);
  };

  const handlePointerEnd = (event) => {
    const drag = dragRef.current;
    if (!drag || drag.id !== event.pointerId) return;
    dragRef.current = null;
    if (!drag.active) return;
    const dx = event.clientX - drag.startX;
    const threshold = (viewportRef.current.offsetWidth / visible) * SWIPE_RATIO;
    setDragging(false);
    setDragX(0);
    if (Math.abs(dx) > threshold) navigate(dx < 0 ? 1 : -1);
  };

  const trackStyle = {
    width: `${(extended.length * 100) / visible}%`,
    transform: `translateX(calc(${(-pos * 100) / extended.length}% + ${dragX}px))`,
    transition: transitionOn ? undefined : "none",
  };

  return (
    <div
      className="project-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="Selected projects"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        ref={viewportRef}
        className={`project-viewport${dragging ? " is-dragging" : ""}`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerEnd}
        onPointerCancel={handlePointerEnd}
        onDragStart={(event) => event.preventDefault()}
      >
        <div className="project-track" style={trackStyle} onTransitionEnd={handleTransitionEnd}>
          {extended.map((project, i) => {
            const isClone = i < CLONE_COUNT || i >= CLONE_COUNT + count;
            return (
              <div
                key={`${project.id}-${i}`}
                className="project-slide"
                style={{ flex: `0 0 ${100 / extended.length}%` }}
                aria-hidden={isClone || undefined}
                inert={isClone}
              >
                <ProjectCard project={project} onOpen={onSelect} />
              </div>
            );
          })}
        </div>
      </div>

      <div className="project-controls">
        <Button
          variant="outline-primary"
          className="rounded-circle project-arrow"
          aria-label="Previous project"
          onClick={() => navigate(-1)}
        >
          <i className="bi bi-chevron-left" aria-hidden="true" />
        </Button>

        <div className="d-flex align-items-center gap-2">
          {projects.map((project, i) => (
            <button
              key={project.id}
              type="button"
              className={`project-dot${i === realIndex ? " is-active" : ""}`}
              aria-label={`Show ${project.title}`}
              aria-current={i === realIndex ? "true" : undefined}
              onClick={() => goTo(i)}
            />
          ))}
        </div>

        <Button
          variant="outline-primary"
          className="rounded-circle project-arrow"
          aria-label="Next project"
          onClick={() => navigate(1)}
        >
          <i className="bi bi-chevron-right" aria-hidden="true" />
        </Button>
      </div>
    </div>
  );
}
