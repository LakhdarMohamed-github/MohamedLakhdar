export default function ProjectPreview({ image, title }) {
  if (image) {
    return (
      <img
        src={image}
        alt={`${title} preview`}
        className="project-preview-img"
        loading="lazy"
      />
    );
  }

  return (
    <div
      className="project-preview-placeholder"
      role="img"
      aria-label={`${title} preview placeholder`}
    >
      <svg viewBox="0 0 320 180" aria-hidden="true" focusable="false">
        <rect x="16" y="16" width="288" height="148" rx="10" className="ph-frame" />
        <rect x="16" y="16" width="288" height="26" rx="10" className="ph-bar" />
        <circle cx="30" cy="29" r="4" className="ph-dot" />
        <circle cx="42" cy="29" r="4" className="ph-dot" />
        <circle cx="54" cy="29" r="4" className="ph-dot" />
        <rect x="32" y="60" width="120" height="10" rx="5" className="ph-line" />
        <rect x="32" y="78" width="200" height="8" rx="4" className="ph-line-light" />
        <rect x="32" y="94" width="170" height="8" rx="4" className="ph-line-light" />
        <rect x="32" y="120" width="72" height="20" rx="10" className="ph-accent" />
        <rect x="218" y="60" width="70" height="80" rx="8" className="ph-block" />
      </svg>
    </div>
  );
}
