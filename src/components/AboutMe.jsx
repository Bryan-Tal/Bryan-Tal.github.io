import "../css/AboutMe.css";
import tritonLogo from "../assets/img/tritons.png";
import { useState } from "react";
import { Container } from "react-bootstrap";

const educationItems = [
  {
    year: "2024",
    title: "Google Data Analytics Professional Certificate",
    sub: (
      <>
        Google · Coursera ·{" "}
        <a
          href="https://www.credly.com/badges/d51d1b36-ccfe-4cf4-b63e-a473056ba9cc/public_url"
          target="_blank"
          rel="noreferrer"
        >
          View Credential
        </a>
      </>
    ),
  },
  {
    year: "2020 – 2024",
    title: "B.S. Data Science",
    sub: "UC San Diego · Halıcıoğlu Data Science Institute",
  },
];

const interviewReady = [
  "Git workflows: branching, PRs, rebasing, conflict resolution",
  "Medallion architecture: applied as Raw / Staging / Marts schemas in project",
  "Snowflake RBAC: functional vs. access role separation, design trade-offs",
  "IAM principles: least privilege, role assumption, cross-cloud STS auth",
];

const inProgress = [
  "Dimensional modeling: facts, dimensions, grain (designing in Phase 1)",
  "Star schema design: applying to NYC TLC trip data",
  "Apache Airflow: DAGs, operators, sensors (Phase 4 build target)",
];

const phases = [
  {
    name: "Phase 0: Platform Foundation",
    status: "complete",
    note: "Working Snowflake + AWS + Airflow stack · avg 7.45/10 synthesis drill",
  },
  {
    name: "Phase 1: Data Source & Exploration",
    status: "active",
    note: "Star schema design + data profiling",
  },
  { name: "Phase 2: Ingestion Layer",          status: "pending" },
  { name: "Phase 3: dbt Transformations",       status: "pending" },
  { name: "Phase 4: Airflow Orchestration",     status: "pending" },
  { name: "Phase 5: CI/CD with GitHub Actions", status: "pending" },
  { name: "Phase 6: Documentation & Polish",    status: "pending" },
];

export const AboutMe = () => {
  const [activeTab, setActiveTab] = useState("Education");

  return (
    <section className="about" id="about">
      <Container>
        <div className="about-grid">
          <div className="about-img-wrap">
            <img src={tritonLogo} alt="UC San Diego Triton logo" />
          </div>

          <div className="about-content">
            <h2 className="about-heading">About Me</h2>
            <p className="about-bio">
              I'm a Data Science graduate from UC San Diego with hands-on experience
              in Python, machine learning, and data visualization. I've built predictive
              models that tackle real-world problems in HR, transportation, and healthcare.
              Always with a focus on translating analysis into clear, actionable insights.
              I care about communicating the "so what" of data, not just the technical output.
            </p>

            <div className="tab-titles">
              <p
                className={activeTab === "Education" ? "tab-links active-link" : "tab-links"}
                onClick={() => setActiveTab("Education")}
              >
                Education
              </p>
              <p
                className={activeTab === "Roadmap" ? "tab-links active-link" : "tab-links"}
                onClick={() => setActiveTab("Roadmap")}
              >
                Learning Path
              </p>
            </div>

            {/* ── Education Tab ── */}
            <div className={activeTab === "Education" ? "tab-contents active-tab" : "tab-contents"}>
              <div className="timeline">
                {educationItems.map((item, i) => (
                  <div key={i} className="timeline-item">
                    <div className="timeline-dot" />
                    <span className="timeline-year">{item.year}</span>
                    <div className="timeline-title">{item.title}</div>
                    <div className="timeline-sub">{item.sub}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Learning Path Tab ── */}
            <div className={activeTab === "Roadmap" ? "tab-contents active-tab" : "tab-contents"}>
              <p className="roadmap-intro">
                Actively building toward production-grade data engineering through the{" "}
                <a
                  href="https://github.com/Bryan-Tal/nyc-taxi-elt"
                  target="_blank"
                  rel="noreferrer"
                >
                  NYC Taxi ELT project
                </a>
                . Tracking 90+ concepts across 10 pillars, from theory through applied to interview-ready.
              </p>

              <div className="roadmap-block">
                <span className="roadmap-block-label">★ Interview-Ready</span>
                <ul className="roadmap-skill-list">
                  {interviewReady.map((s, i) => (
                    <li key={i}>
                      <span className="roadmap-star">★</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="roadmap-block">
                <span className="roadmap-block-label">◐ In Progress</span>
                <ul className="roadmap-skill-list">
                  {inProgress.map((s, i) => (
                    <li key={i}>
                      <span className="roadmap-half">◐</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="roadmap-block">
                <span className="roadmap-block-label">Project Phases</span>
                <ul className="phase-list">
                  {phases.map((p, i) => (
                    <li key={i} className={`phase-item phase-${p.status}`}>
                      <span className="phase-icon">
                        {p.status === "complete" ? "✓" : p.status === "active" ? "▶" : "○"}
                      </span>
                      <div className="phase-text">
                        <span className="phase-name">{p.name}</span>
                        {p.note && <span className="phase-note">{p.note}</span>}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="https://github.com/Bryan-Tal/nyc-taxi-elt/blob/main/docs/roadmap.md"
                target="_blank"
                rel="noreferrer"
                className="roadmap-link"
              >
                View full roadmap on GitHub ↗
              </a>
            </div>

            <div className="looking-for">
              <span className="looking-for-label">Currently Looking For</span>
              <p>
                Full-time roles in data analytics or data science. Open to domains
                across tech, healthcare, finance, or anywhere data drives meaningful
                decisions. Located in San Diego, CA · Open to remote or hybrid.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
