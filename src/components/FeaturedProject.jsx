import "../css/FeaturedProject.css";
import projImg1 from "../assets/img/project-img1.png";

export const FeaturedProject = () => {
  const stack = ["Python", "Random Forest", "XGBoost", "Scikit-learn", "Pandas", "GridSearchCV", "Matplotlib"];

  return (
    <section className="featured-project" id="featured">
      <div className="container">
        <div className="featured-label">
          <span className="featured-tag">Featured Project</span>
        </div>

        <div className="featured-grid">
          <div className="featured-image">
            <img src={projImg1} alt="Employee Turnover Prediction dashboard" />
          </div>

          <div className="featured-content">
            <h2 className="featured-title">
              Predicting Employee Turnover with Ensemble Machine Learning
            </h2>

            <div className="featured-case">
              <div className="case-col">
                <span className="case-col-heading">The Problem</span>
                <p>
                  Employee turnover costs companies 50–200% of an employee's salary.
                  HR teams needed a reliable way to identify at-risk employees before
                  they decided to leave.
                </p>
              </div>
              <div className="case-col">
                <span className="case-col-heading">The Approach</span>
                <p>
                  Built and compared Decision Tree, Random Forest, and XGBoost
                  classifiers via 5-fold GridSearchCV refit on ROC-AUC. The Random
                  Forest champion exposed satisfaction, project count, and overwork as
                  top drivers — surfacing that 100% of employees with 7 projects left
                  the company.
                </p>
              </div>
              <div className="case-col">
                <span className="case-col-heading">The Result</span>
                <span className="result-metric">0.95 AUC</span>
                <p>
                  with 90% recall on identifying at-risk employees, enabling proactive
                  HR intervention before talent is lost.
                </p>
              </div>
            </div>

            <div className="featured-stack">
              {stack.map((s) => (
                <span key={s} className="stack-tag">{s}</span>
              ))}
            </div>

            <div className="featured-links">
              <a
                href="https://github.com/Bryan-Tal/Providing_Data_Driven_Suggestions"
                target="_blank"
                rel="noreferrer"
                className="featured-btn-primary"
              >
                View on GitHub →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
