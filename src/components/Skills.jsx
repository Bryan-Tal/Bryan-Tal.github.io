import { Container } from "react-bootstrap";
import "../css/Skills.css";

const SkillDots = ({ level }) => (
  <span className="skill-dots">
    {[1, 2, 3, 4, 5].map((i) => (
      <span key={i} className={`dot ${i <= level ? "filled" : "empty"}`} />
    ))}
  </span>
);

const categories = [
  {
    title: "Languages",
    skills: [
      { name: "Python",     level: 5 },
      { name: "SQL",        level: 4 },
      { name: "JavaScript", level: 4 },
      { name: "R",          level: 3 },
    ],
  },
  {
    title: "Machine Learning & Statistics",
    skills: [
      { name: "Scikit-learn",        level: 5 },
      { name: "Pandas",              level: 5 },
      { name: "NumPy",               level: 5 },
      { name: "XGBoost",             level: 4 },
      { name: "SciPy",               level: 4 },
      { name: "Statistical Testing", level: 4 },
    ],
  },
  {
    title: "Data Engineering",
    skills: [
      { name: "Apache Airflow", level: 3 },
      { name: "dbt",            level: 3 },
      { name: "Snowflake",      level: 3 },
      { name: "AWS S3 & IAM",   level: 3 },
      { name: "Docker",         level: 3 },
      { name: "GitHub Actions", level: 3 },
    ],
  },
  {
    title: "Data Visualization",
    skills: [
      { name: "Tableau",    level: 4 },
      { name: "Matplotlib", level: 4 },
      { name: "Seaborn",    level: 4 },
      { name: "D3.js",      level: 3 },
    ],
  },
  {
    title: "Web & Tools",
    skills: [
      { name: "React",        level: 4 },
      { name: "HTML / CSS",   level: 5 },
      { name: "Git / GitHub", level: 4 },
      { name: "Jupyter",      level: 5 },
    ],
  },
];

const certifications = [
  {
    name: "Google Data Analytics Professional Certificate",
    issuer: "Google · Coursera · 2024",
    url: "https://www.credly.com/badges/d51d1b36-ccfe-4cf4-b63e-a473056ba9cc/public_url",
    icon: "📊",
  },
  {
    name: "B.S. Data Science",
    issuer: "UC San Diego · 2024",
    url: null,
    icon: "🎓",
  },
];

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <Container>
        <div className="skill-inner">
          <h2>Skills</h2>
          <p className="skill-subtitle">
            Proficient across the full data workflow, from querying and cleaning
            to modeling, evaluating, and communicating results visually.
          </p>

          <div className="skills-grid">
            {categories.map((cat) => (
              <div key={cat.title} className="skill-category">
                <span className="skill-category-title">{cat.title}</span>
                <ul className="skill-list">
                  {cat.skills.map((s) => (
                    <li key={s.name} className="skill-item">
                      <span className="skill-name">{s.name}</span>
                      <SkillDots level={s.level} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="certs-row">
            {certifications.map((cert) =>
              cert.url ? (
                <a
                  key={cert.name}
                  href={cert.url}
                  target="_blank"
                  rel="noreferrer"
                  className="cert-badge"
                >
                  <div className="cert-icon">{cert.icon}</div>
                  <div className="cert-info">
                    <span className="cert-name">{cert.name}</span>
                    <span className="cert-issuer">{cert.issuer}</span>
                  </div>
                </a>
              ) : (
                <div key={cert.name} className="cert-badge">
                  <div className="cert-icon">{cert.icon}</div>
                  <div className="cert-info">
                    <span className="cert-name">{cert.name}</span>
                    <span className="cert-issuer">{cert.issuer}</span>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};
