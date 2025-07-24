import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import './App.css';

function App() {
  const resumeData = {
    name: "Mohamed Lakhdar",
    title: "Software Developer",
    contact: {
      email: "mohamed.lakhdar.pro@gmail.com",
      phone: "+212 704-735099",
      linkedin: "https://www.linkedin.com/in/lakhdar-mohamed/",
      github: "https://github.com/LakhdarMohamed-github"
    },
    summary: "Aware of the innovations that are changing our consumption patterns. Curious, lucid and reactive, I give substance to the projects entrusted to me to guide reflection around performance. I want to invest my energy and my skills in a business adventure. I will be delighted to discuss with you.",
    experiences: [
      {
        title: "Freelancer",
        duration: "June 2022 – currently",
        description: [
          "Creation of responsive websites.",
          "Creating web application / API's",
          "Creating Mobile Applications"
        ],
        missions: [
          "Creating web sites to different clients, as E-Commerce Web sites, showcase Website and portfolio.",
          "Creating and maintaining Web applications as ERP app",
          "Assistance with the clients and support with the technical and functional needs."
        ],
        environment: "Java, Spring Boot, PHP, Laravel, Javascript; Wordpress"
      },
      {
        title: "Payment System Developer / XPI (Expanded Payment International)",
        duration: "April 2021 - June 2022",
        location: "Morocco",
        description: [
          "Maintenance of Card24 Project (electronic payment systems, EMV card processing).",
          "Development of GTX project."
        ],
        missions: [
          "Work in a multidisciplinary and agile team while ensuring deadlines and high code quality standards",
          "Overhaul of old systems",
          "Development, integration and maintenance of electronic payment systems, EMV card processing and flow.",
          "Collaborated with the engineering team that released a digital payment system (CARD24), adopted by many banks and Microfinance institutions around the world.",
          "Managed, optimized, and updated databases schema as necessary using Java EE, SQL, Hibernate, Oracle, and SQL Server.",
          "Assistance with workshops and analysis of technical and functional needs.",
          "Customer assistance in handling the various products and responding to their requests for clarification.",
          "Deployment and installation of internal and client environments.",
          "Reporting."
        ],
        environment: "Java EE, Spring Boot, Angular 8, Hibernate, PostgreSQL, HTML5, CSS3, JavaScript, Tomcat, Rest, JSON, XML"
      },
      {
        title: "internship / PH SOLUTION",
        duration: "December 2020 – April 2021",
        location: "Morocco",
        description: [
          "Design, realization and taking responsibility for an PHP web application for our client in the purpose of booking places such as an Animal Farms and premises in villages",
          "Creating web sites using Wordpress"
        ],
        missions: [
          "Conception, Implementation and developing new modules",
          "Working with CMS tech to develop web sites"
        ],
        environment: "PHP, PostgreSQL, Wordpress, JavaScript, HTML5, CSS3"
      },
      {
        title: "internship / LYDEC",
        duration: "January 2020 - February 2020",
        location: "Morocco",
        description: [
          "Helping in the Optimization of the web application (Front-End)"
        ],
        environment: "HTML, CSS, Javascript"
      }
    ],
    technical_skills: {
      programming_languages: "JAVA, PHP, C#.",
      web: "Java EE, SpringBoot, Asp.net, Laravel, Web API, MVC 5, Web Forms, HTML5, CSS3, JavaScript, Angular, jQuery, Bootstrap, Wordpress.",
      architecture_design_pattern: "Microservices, MVC, Rest API, Repository, Spring Boot, Hibernate, Clean Architecture (Microservices + Monolithique ).",
      methodologies_tools: "UML, Scrum, Kanban.",
      database: "SQL Server, NoSql, PostgreSQL.",
      environments: "Intelij Idea, Git, GitHub, PhpStorm, Visual Studio."
    },
    education: [
      {
        degree: "Bachelor's degree in software engineering",
        duration: "2020-2021",
        institution: "FST SETTAT"
      },
      {
        degree: "Specialized Technician Diploma in Software Development",
        duration: "2018-2020",
        institution: "Institute of Management and Computer Science (ISGI) - Casablanca"
      },
      {
        degree: "Moroccan Baccalaureate Option: Physics and chemistry.",
        duration: "2017",
        institution: "Abdelkhalek Torres High School - Casablanca"
      }
    ],
    languages: {
      French: "B2.",
      English: "B2."
    },
    soft_skills: [
      "Good communication, good time management that includes the ability to work under own initiative and under tight time pressures - planning, prioritizing, and controlling own workload.",
      "Self-directed learning - Continuous improvement - Inquisitive - self teaching of relevant new business thinking and technology solutions.",
      "I'm a strong believer in the power of collaboration in coding. Working with others helps to develop ideas, create new solutions, and build something that is much bigger than any individual can achieve alone."
    ]
  };

  const skillCategories = [
    { title: "Programming Languages", skills: resumeData.technical_skills.programming_languages.split(', ') },
    { title: "Web Technologies", skills: resumeData.technical_skills.web.split(', ') },
    { title: "Architecture & Design", skills: resumeData.technical_skills.architecture_design_pattern.split(', ') },
    { title: "Methodologies & Tools", skills: resumeData.technical_skills.methodologies_tools.split(', ') },
    { title: "Databases", skills: resumeData.technical_skills.database.split(', ') },
    { title: "Development Environments", skills: resumeData.technical_skills.environments.split(', ') }
  ];

  return (
    <div className="App">
      {/* Navigation */}
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="shadow">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold">
            {resumeData.name}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#experience">Experience</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#education">Education</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <section id="home" className="hero-section bg-primary text-white py-5">
        <Container className="custom-container">
          <Row className="align-items-center min-vh-100">
            <Col lg={6} className="text-center text-lg-start">
              <h1 className="display-4 fw-bold mb-3">
                Hello, I'm {resumeData.name}
              </h1>
              <h2 className="h3 mb-4 text-light">
                {resumeData.title}
              </h2>
              <p className="lead mb-4">
                {resumeData.summary}
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
                <Button 
                  variant="light" 
                  size="lg" 
                  href="#contact"
                  className="fw-semibold"
                >
                  Get In Touch
                </Button>
                <a href="/Mohamed Lakhdar CV.pdf" download>
                <Button 
                  variant="outline-light" 
                  size="lg"
                  className="fw-semibold"
                >
                  Download CV
                </Button>
                </a>
              </div>
            </Col>
            <Col lg={6} className="text-center">
              <div className="profile-image-container">
                <img 
                  src="/profile-pic.png" 
                  alt={resumeData.name}
                  className="img-fluid rounded-circle shadow-lg profile-image"
                  style={{ maxWidth: '400px', width: '100%' }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Section */}
      <section id="about" className="py-5 bg-light">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5">
              <h2 className="display-5 fw-bold text-dark">About Me</h2>
              <div className="underline mx-auto"></div>
            </Col>
          </Row>
          <Row>
            <Col lg={8} className="mx-auto">
              <Card className="border-0 shadow-sm">
                <Card.Body className="p-4">
                  <p className="lead text-muted mb-4">
                    {resumeData.summary}
                  </p>
                  <h5 className="fw-bold mb-3">Soft Skills</h5>
                  {resumeData.soft_skills.map((skill, index) => (
                    <p key={index} className="mb-2">
                      <i className="bi bi-check-circle-fill text-primary me-2"></i>
                      {skill}
                    </p>
                  ))}
                  <h5 className="fw-bold mb-3 mt-4">Languages</h5>
                  <Row>
                    {Object.entries(resumeData.languages).map(([lang, level]) => (
                      <Col sm={6} key={lang}>
                        <p className="mb-2">
                          <strong>{lang}:</strong> {level}
                        </p>
                      </Col>
                    ))}
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-5">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5">
              <h2 className="display-5 fw-bold text-dark">Professional Experience</h2>
              <div className="underline mx-auto"></div>
            </Col>
          </Row>
          <Row>
            <Col lg={10} className="mx-auto">
              {resumeData.experiences.map((exp, index) => (
                <Card key={index} className="mb-4 border-0 shadow-sm">
                  <Card.Body className="p-4">
                    <Row>
                      <Col lg={8}>
                        <h4 className="fw-bold text-primary mb-2">{exp.title}</h4>
                        <p className="text-muted mb-3">
                          <i className="bi bi-calendar me-2"></i>
                          {exp.duration}
                          {exp.location && (
                            <>
                              <i className="bi bi-geo-alt ms-3 me-2"></i>
                              {exp.location}
                            </>
                          )}
                        </p>
                      </Col>
                    </Row>
                    
                    <div className="mb-3">
                      <h6 className="fw-semibold mb-2">Key Responsibilities:</h6>
                      <ul className="list-unstyled">
                        {exp.description.map((desc, i) => (
                          <li key={i} className="mb-1">
                            <i className="bi bi-arrow-right text-primary me-2"></i>
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {exp.missions && (
                      <div className="mb-3">
                        <h6 className="fw-semibold mb-2">Missions & Achievements:</h6>
                        <ul className="list-unstyled">
                          {exp.missions.map((mission, i) => (
                            <li key={i} className="mb-1">
                              <i className="bi bi-check-circle text-success me-2"></i>
                              {mission}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div>
                      <h6 className="fw-semibold mb-2">Technologies Used:</h6>
                      <div className="d-flex flex-wrap gap-2">
                        {exp.environment.split(', ').map((tech, i) => (
                          <Badge key={i} bg="secondary" className="px-2 py-1">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </Col>
          </Row>
        </Container>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-5 bg-light">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5">
              <h2 className="display-5 fw-bold text-dark">Technical Skills</h2>
              <div className="underline mx-auto"></div>
            </Col>
          </Row>
          <Row>
            {skillCategories.map((category, index) => (
              <Col lg={6} key={index} className="mb-4">
                <Card className="h-100 border-0 shadow-sm">
                  <Card.Body className="p-4">
                    <h5 className="fw-bold text-primary mb-3">{category.title}</h5>
                    <div className="d-flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => (
                        <Badge key={i} bg="outline-primary" text="primary" className="px-2 py-1 border border-primary">
                          {skill.trim()}
                        </Badge>
                      ))}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Education Section */}
      <section id="education" className="py-5">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5">
              <h2 className="display-5 fw-bold text-dark">Education</h2>
              <div className="underline mx-auto"></div>
            </Col>
          </Row>
          <Row>
            <Col lg={8} className="mx-auto">
              {resumeData.education.map((edu, index) => (
                <Card key={index} className="mb-3 border-0 shadow-sm">
                  <Card.Body className="p-4">
                    <h5 className="fw-bold text-primary mb-2">{edu.degree}</h5>
                    <p className="text-muted mb-1">
                      <i className="bi bi-building me-2"></i>
                      {edu.institution}
                    </p>
                    <p className="text-muted">
                      <i className="bi bi-calendar me-2"></i>
                      {edu.duration}
                    </p>
                  </Card.Body>
                </Card>
              ))}
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5 bg-dark text-white">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5">
              <h2 className="display-5 fw-bold">Get In Touch</h2>
              <div className="underline mx-auto bg-light"></div>
              <p className="lead mt-3">
                I'm always interested in new opportunities and collaborations.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={8}>
              <Row className="text-center">
                <Col md={4} className="mb-4">
                  <div className="contact-item">
                    <i className="bi bi-linkedin display-6 text-primary mb-3"></i>
                    <h5 className="fw-bold">LinkedIn</h5>
                    <a 
                      href={resumeData.contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-light text-decoration-none"
                    >
                      LinkedIn Profile
                    </a>
                  </div>
                </Col>
                <Col md={4} className="mb-4">
                  <div className="contact-item">
                    <i className="bi bi-github display-6 text-primary mb-3"></i>
                    <h5 className="fw-bold">GitHub</h5>
                    <a 
                      href={resumeData.contact.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-light text-decoration-none"
                    >
                      GitHub Profile
                    </a>
                  </div>
                </Col>
                <Col md={4} className="mb-4">
                  <div className="contact-item">
                    <img
                    src="fiverr.png"
                    alt="Fiverr"
                    width="48"
                    height="48"
                    className="mb-3"
                    />
                    <h5 className="fw-bold">Fiverr</h5>
                    <a 
                    href="https://www.fiverr.com/lakhdarmohamed"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light text-decoration-none"
                    >
                        Fiverr Profile
                   </a>
                  </div>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col className="text-center">
                  <Button 
                    variant="primary" 
                    size="lg"
                    href={`mailto:${resumeData.contact.email}`}
                    className="fw-semibold"
                  >
                    <i className="bi bi-envelope me-2"></i>
                    Send Me an Email
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-4">
        <Container>
          <Row>
            <Col className="text-center">
              <p className="mb-2">
                &copy; 2025 {resumeData.name}. All rights reserved.
              </p>
              <div className="social-links">
                <a 
                  href={resumeData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light me-3"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
                <a 
                  href={resumeData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light me-3"
                >
                  <i className="bi bi-github"></i>
                </a>
                <a 
                  href={`mailto:${resumeData.contact.email}`}
                  className="text-light"
                >
                  <i className="bi bi-envelope"></i>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default App;

