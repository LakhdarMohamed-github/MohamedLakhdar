import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { projects, sectionIntro, sectionTitle } from "../../data/projectsData";
import ProjectCarousel from "./ProjectCarousel";
import ProjectDetailsModal from "./ProjectDetailsModal";
import "./SelectedProjects.css";

const mod = (n, m) => ((n % m) + m) % m;

export default function SelectedProjects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const count = projects.length;

  const openProject = (project) => {
    setActiveIndex(projects.findIndex((p) => p.id === project.id));
    setIsOpen(true);
  };

  return (
    <section id="projects" className="py-5">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="display-5 fw-bold text-dark">{sectionTitle}</h2>
            <div className="underline mx-auto"></div>
          </Col>
        </Row>
        <Row>
          <Col lg={8} className="mx-auto text-center mb-5">
            <p className="lead text-muted mb-0">{sectionIntro}</p>
          </Col>
        </Row>
        <ProjectCarousel projects={projects} paused={isOpen} onSelect={openProject} />
      </Container>

      <ProjectDetailsModal
        show={isOpen}
        project={projects[activeIndex]}
        previousProject={projects[mod(activeIndex - 1, count)]}
        nextProject={projects[mod(activeIndex + 1, count)]}
        onClose={() => setIsOpen(false)}
        onPrevious={() => setActiveIndex((i) => mod(i - 1, count))}
        onNext={() => setActiveIndex((i) => mod(i + 1, count))}
      />
    </section>
  );
}
