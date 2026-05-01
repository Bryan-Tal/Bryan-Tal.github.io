import "../css/FeaturedProject.css";
import projImg1 from "../assets/img/project-img1.png";

export const FeaturedProject = () => {
  const stack = ["Python", "XGBoost", "Random Forest", "Scikit-learn", "Pandas", "SHAP", "Matplotlib"];

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
                  Built and compared Decision Tree, Random Forest, and XGBoost models.
                  Applied SHAP values to expose which features drove predictions and
                  inform actionable HR policy.
                </p>
              </div>
              <div className="case-col">
                <span className="case-col-heading">The Result</span>
                <span className="result-metric">82% recall</span>
                <p>
                  on identifying employees likely to leave, enabling proactive HR
                  intervention before talent is lost.
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
