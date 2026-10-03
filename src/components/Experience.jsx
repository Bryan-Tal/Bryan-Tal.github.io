import { Container } from "react-bootstrap";
import "../css/Experience.css";

const roles = [
  {
    title: "Full-Stack Developer",
    company: "PuffRepairz",
    siteLabel: "puffrepairz.com",
    siteUrl: "https://puffrepairz.com",
    location: "San Diego, CA",
    period: "Jun 2026 – Present",
    current: true,
    metrics: [
      { value: "850+", label: "Registered customers" },
      { value: "$14K", label: "Revenue since launch" },
      { value: "25+", label: "SQL analytics functions" },
      { value: "15", label: "Serverless functions" },
    ],
    highlights: [
      "Built and launched a production booking and payments platform for a mail-in device repair business, serving 850+ registered customers and generating $14,000 in revenue since launch.",
      "Developed with Claude Code as an AI pair programmer under a spec-first process I set up: wrote each feature's requirements and data model before any code, then reviewed, tested, and deployed every change.",
      "Designed a PostgreSQL data model (56 versioned migrations, row-level security) and 25+ SQL analytics functions tracking funnel conversion, cohort retention, p50/p90 turnaround, and margin by service. Every rate is reported as numerator over denominator, with test and refunded jobs excluded.",
      "Integrated Stripe, EasyPost, and Resend through 15 serverless functions with idempotent webhooks (no double charges or duplicate labels on retries), and automated 16 transactional email types plus hourly reminder and survey jobs.",
    ],
    stack: [
      "SQL",
      "PostgreSQL (Supabase)",
      "React",
      "Stripe API",
      "Recharts",
      "Vercel",
      "Git",
      "Claude Code",
    ],
  },
];

export const Experience = () => {
  return (
    <section className="experience" id="experience">
      <Container>
        <h2>Experience</h2>
        <p className="section-subtitle">
          Production work where the data model, the analytics, and the business
          outcome are all mine to own.
        </p>

        {roles.map((role) => (
          <article key={role.company} className="role-card">
            <header className="role-header">
              <div className="role-identity">
                <h3 className="role-title">{role.title}</h3>
                <p className="role-meta">
                  <a href={role.siteUrl} target="_blank" rel="noreferrer" className="role-company">
                    {role.company} ↗
                  </a>
                  <span className="role-meta-sep">·</span>
                  {role.siteLabel}
                  <span className="role-meta-sep">·</span>
                  {role.location}
                </p>
              </div>
              <div className="role-period">
                {role.current && <span className="role-dot" />}
                {role.period}
              </div>
            </header>

            <ul className="role-metrics">
              {role.metrics.map((m) => (
                <li key={m.label} className="metric-tile">
                  <span className="metric-value">{m.value}</span>
                  <span className="metric-label">{m.label}</span>
                </li>
              ))}
            </ul>

            <ul className="role-highlights">
              {role.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>

            <div className="role-stack">
              {role.stack.map((s) => (
                <span key={s} className="stack-chip">{s}</span>
              ))}
            </div>
          </article>
        ))}
      </Container>
    </section>
  );
};
