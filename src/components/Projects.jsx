import { useState } from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.jpg";
import projImg5 from "../assets/img/project-img5.png";
import { ProjectCard } from "./ProjectCard";
import "../css/Projects.css";

const FILTERS = ["All", "Machine Learning", "Data Engineering"];

const projects = [
  {
    title: "NYC Taxi ELT Pipeline",
    domain: "Data Engineering",
    status: "under-development",
    imgUrl: projImg2,
    projectUrl: "https://github.com/Bryan-Tal/nyc-taxi-elt",
    impact: [
      "Batch ELT pipeline over 100M+ NYC TLC trip records into Snowflake",
      "Medallion architecture (Raw → Staging → Marts) modeled with dbt",
      "Orchestrated with Apache Airflow 2.10, secured via IAM role assumption",
    ],
    stack: ["Python", "Airflow", "dbt", "Snowflake", "AWS S3", "Docker", "GitHub Actions"],
  },
  {
    title: "Predicting Employee Turnover",
    domain: "Machine Learning",
    imgUrl: projImg1,
    projectUrl: "https://github.com/Bryan-Tal/Predicting_Employee_Churn",
    impact: [
      "Random Forest classifier achieving 0.95 AUC and 90% recall on test set",
      "Surfaced that 100% of employees with 7 concurrent projects left the company",
      "Compared 3 classifiers via 5-fold GridSearchCV, refit on ROC-AUC",
    ],
    stack: ["Python", "Random Forest", "XGBoost", "Scikit-learn", "Pandas", "GridSearchCV"],
  },
  {
    title: "Predicting NYC Taxi Gratuities",
    domain: "Machine Learning",
    imgUrl: projImg2,
    projectUrl: "https://github.com/Bryan-Tal/Predicting_NYC_Taxi_Gratuities",
    impact: [
      "Tuned XGBoost achieved 83% accuracy / 84% F1 on 408k+ trips",
      "Beat Random Forest baseline by +12.7 F1 points after 5-fold GridSearchCV",
      "Engineered time-of-day, day-of-week, and rate-code features from raw timestamps",
    ],
    stack: ["Python", "XGBoost", "Scikit-learn", "Pandas", "Matplotlib"],
  },
  {
    title: "Predicting House Prices with OLS & Ridge Regression",
    domain: "Machine Learning",
    imgUrl: projImg5,
    projectUrl: "https://github.com/Bryan-Tal/Predicting_House_Prices_OLS",
    impact: [
      "Implemented OLS and Ridge from scratch using the normal equation in NumPy",
      "Validated all 5 LR assumptions (Shapiro-Wilk, K-S, VIF, residual plots)",
      "Champion Ridge: R² = 0.66, RMSE = 0.108 across 4 scaling methods × 7 α values",
    ],
    stack: ["Python", "NumPy", "Pandas", "SciPy", "Matplotlib"],
  },
  {
    title: "MedDash: Health Metrics Dashboard",
    domain: "Data Engineering",
    imgUrl: projImg3,
    projectUrl: "https://github.com/Bryan-Tal/Med-Dash",
    impact: [
      "Unified data from 5+ wearable sensor types into one view",
      "Real-time visualization of daily health metrics using React & D3.js",
      "Designed for healthcare professionals to monitor patient trends",
    ],
    stack: ["React", "D3.js", "JavaScript", "CSS", "Python"],
  },
  // {
  //   title: "Visual Analysis of the S&P 500 ETF",
  //   domain: "Data Viz",
  //   imgUrl: projImg4,
  //   projectUrl: "https://bryan-tal.github.io/SPY-Visual-Analysis/",
  //   impact: [
  //     "Visualized 15+ years of SPY market data with interactive D3.js charts",
  //     "Built zoom, pan, and timeframe-select interactions from scratch",
  //     "Displays volume, price, and moving averages in a single dashboard",
  //   ],
  //   stack: ["D3.js", "HTML", "CSS", "JavaScript"],
  // },
  
];

const dashboards = [
  {
    title: "Exploring Netflix's Global Library (2008–2020)",
    insight:
      "Analyzing Netflix's catalog revealed that content from the U.S. and India dominates the library, but international drama is the fastest-growing category. Stand-up comedy saw a 3× spike between 2016–2018.",
    embedUrl:
      "https://public.tableau.com/views/ExploringNetflixsGlobalLibrary2008-2020/NetflixDashboard",
    publicUrl:
      "https://public.tableau.com/app/profile/bryan.talavera/viz/ExploringNetflixsGlobalLibrary2008-2020/NetflixDashboard",
  },
  {
    title: "Company-Wide Sales Overview Across U.S. Sites",
    insight:
      "A cross-regional breakdown of sales performance surfaced that the West Coast sites account for 42% of volume but have disproportionately high return rates, signaling a fulfillment quality issue.",
    embedUrl:
      "https://public.tableau.com/views/Company-WideSalesOverviewAcrossU_S_Sites/SalesDashboard",
    publicUrl:
      "https://public.tableau.com/app/profile/bryan.talavera/viz/Company-WideSalesOverviewAcrossU_S_Sites/SalesDashboard",
  },
  {
    title: "Tracking the Surge and Shift of Lightning Strikes in the U.S.",
    insight:
      "Since 2009, U.S. lightning strike frequency has increased sharply while the geographic center of activity shifted from the East Coast toward the Central region, likely reflecting climate pattern changes.",
    embedUrl:
      "https://public.tableau.com/views/TrackingtheSurgeandShiftofLightningStrikesintheU_S_/LightningStrikeStory",
    publicUrl:
      "https://public.tableau.com/app/profile/bryan.talavera/viz/TrackingtheSurgeandShiftofLightningStrikesintheU_S_/LightningStrikeStory",
  },
];

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.domain === activeFilter);

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <div>
              <h2>Projects</h2>
              <p className="section-subtitle">
                A selection of data science and engineering work, each built around a
                real problem, a deliberate approach, and a measurable outcome.
              </p>
            </div>

            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-4 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Dashboards</Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content>
                {/* ── Projects Tab ── */}
                <Tab.Pane eventKey="first">
                  <div className="project-filters">
                    {FILTERS.map((f) => (
                      <button
                        key={f}
                        className={`filter-btn ${activeFilter === f ? "active" : ""}`}
                        onClick={() => setActiveFilter(f)}
                      >
                        {f}
                      </button>
                    ))}
                  </div>
                  <Row>
                    {filtered.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>

                {/* ── Dashboards Tab ── */}
                <Tab.Pane eventKey="second">
                  {dashboards.map((d, i) => (
                    <div key={i} className="dashboard-card">
                      <div className="dashboard-annotation">
                        <span className="dashboard-type-tag">Tableau Public</span>
                        <h3>{d.title}</h3>
                        <p>{d.insight}</p>
                        <a
                          href={d.publicUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="dashboard-link"
                        >
                          Open in Tableau Public ↗
                        </a>
                      </div>
                      <div className="dashboard-embed-wrap">
                        <tableau-viz
                          src={d.embedUrl}
                          toolbar="bottom"
                          hide-tabs
                        />
                      </div>
                      <div className="dashboard-mobile-cta">
                        <a
                          href={d.publicUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="dashboard-mobile-link"
                        >
                          View Interactive Dashboard ↗
                        </a>
                      </div>
                    </div>
                  ))}
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
