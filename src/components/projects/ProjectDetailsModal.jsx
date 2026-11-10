import { Badge, Button, Col, Modal, Row } from "react-bootstrap";
import ProjectPreview from "./ProjectPreview";

const toParagraphs = (text) =>
  text.split("\n\n").map((paragraph, i) => <p key={i}>{paragraph}</p>);

export default function ProjectDetailsModal({
  show,
  project,
  previousProject,
  nextProject,
  onClose,
  onPrevious,
  onNext,
}) {
  const metadata = [project.company, project.institution, project.projectType].filter(Boolean);

  return (
    <Modal
      show={show}
      onHide={onClose}
      size="lg"
      centered
      scrollable
      aria-labelledby="project-modal-title"
      className="project-modal"
    >
      <Modal.Header closeButton>
        <div>
          <Modal.Title as="h2" id="project-modal-title" className="fw-bold h3 mb-1">
            {project.title}
          </Modal.Title>
          <p className="text-muted mb-0">{project.subtitle}</p>
        </div>
      </Modal.Header>

      <Modal.Body key={project.id}>
        <div className="d-flex flex-wrap gap-2 mb-3">
          <Badge bg="primary" className="fw-normal">{project.category}</Badge>
          {metadata.map((item) => (
            <Badge key={item} bg="secondary" className="fw-normal">{item}</Badge>
          ))}
        </div>

        <div className="project-modal-media mb-4">
          <ProjectPreview image={project.image} title={project.title} />
        </div>

        <h3 className="h5 fw-bold">Project Overview</h3>
        {toParagraphs(project.overview)}

        <h3 className="h5 fw-bold mt-4">Project Description</h3>
        {toParagraphs(project.description)}

        <h3 className="h5 fw-bold mt-4">Key Components</h3>
        <Row xs={1} md={2} className="g-3">
          {project.keyComponents.map((item) => (
            <Col key={item}>
              <div className="d-flex align-items-start gap-2 h-100">
                <i className="bi bi-check-circle-fill text-primary mt-1" aria-hidden="true" />
                <span>{item}</span>
              </div>
            </Col>
          ))}
        </Row>
      </Modal.Body>

      <Modal.Footer className="flex-wrap gap-2 justify-content-between">
        <div className="d-flex gap-2">
          <Button
            variant="outline-secondary"
            onClick={onPrevious}
            aria-label={`Previous project: ${previousProject.title}`}
          >
            <i className="bi bi-chevron-left me-1" aria-hidden="true" />
            Previous
          </Button>
          <Button
            variant="outline-secondary"
            onClick={onNext}
            aria-label={`Next project: ${nextProject.title}`}
          >
            Next
            <i className="bi bi-chevron-right ms-1" aria-hidden="true" />
          </Button>
        </div>

        {project.websiteUrl && (
          <Button
            variant="primary"
            href={project.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Live Website <i className="bi bi-box-arrow-up-right ms-1" aria-hidden="true" />
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
}
