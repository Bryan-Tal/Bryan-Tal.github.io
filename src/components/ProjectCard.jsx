import { Col } from "react-bootstrap";

const domainClass = {
  "Machine Learning": "ml",
  "Data Viz":         "viz",
  "Data Engineering": "eng",
};

export const ProjectCard = ({ title, imgUrl, projectUrl, domain, stack, impact, status }) => {
  return (
    <Col sm={12} md={6} lg={4} className="mb-4 d-flex">
      <a href={projectUrl} target="_blank" rel="noreferrer" className="project-card-link">
        <div className="project-card">
          <div className="project-card-domain">
            <span className={`domain-tag ${domainClass[domain] || "ml"}`}>{domain}</span>
            {status === "under-development" && (
              <span className="wip-badge">In Development</span>
            )}
          </div>

          <div className="project-card-image">
            <img src={imgUrl} alt={title} />
          </div>

          <div className="project-card-body">
            <h3 className="project-card-title">{title}</h3>
            <ul className="project-card-impact">
              {impact.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <div className="project-card-stack">
              {stack.map((s) => (
                <span key={s} className="stack-chip">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </a>
    </Col>
  );
};
