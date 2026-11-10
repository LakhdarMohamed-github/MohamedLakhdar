import { Badge, Button, Card } from "react-bootstrap";
import ProjectPreview from "./ProjectPreview";

export default function ProjectCard({ project, onOpen }) {
  const metadata = [project.company, project.institution, project.projectType].filter(Boolean);
  const previewText = project.overview.split("\n\n")[0];

  return (
    <Card className="project-card h-100 border-0 shadow-sm">
      <div className="project-card-media">
        <ProjectPreview image={project.image} title={project.title} />
      </div>
      <Card.Body className="d-flex flex-column p-4">
        <div className="d-flex flex-wrap gap-2 mb-3">
          <Badge bg="primary" className="fw-normal">{project.category}</Badge>
          {metadata.map((item) => (
            <Badge key={item} bg="secondary" className="fw-normal">{item}</Badge>
          ))}
        </div>
        <Card.Title as="h3" className="h5 fw-bold mb-1">{project.title}</Card.Title>
        <p className="text-muted small mb-3">{project.subtitle}</p>
        <Card.Text className="project-card-preview text-secondary mb-4">{previewText}</Card.Text>
        <Button
          variant="outline-primary"
          className="mt-auto align-self-start"
          aria-haspopup="dialog"
          onClick={() => onOpen(project)}
        >
          View Details
        </Button>
      </Card.Body>
    </Card>
  );
}
