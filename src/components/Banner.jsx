import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img2.svg";
import resumePath from "../assets/img/Bryan_Talavera_Resume.pdf";
import "../css/Banner.css";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility once>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeInDown" : ""}>
                  <span className="banner-greeting">Hi, I'm</span>
                  <h1 className="banner-name">Bryan Talavera</h1>
                  <h2 className="banner-role">
                    Data Analyst <span className="role-sep">&</span> Analytics Engineer
                  </h2>
                  <p className="banner-tagline">
                    Turning raw data into decisions that matter.
                  </p>
                  <div className="banner-credentials">
                    <span className="cred-tag">UC San Diego · B.S. Data Science</span>
                    <span className="cred-sep">·</span>
                    <span className="cred-tag">Google Certified Analyst</span>
                    <span className="cred-sep">·</span>
                    <span className="cred-tag cred-tag--building">Building in Data Engineering</span>
                  </div>
                  <div className="banner-ctas">
                    <a href="#projects" className="btn-primary-cta">
                      View My Work
                    </a>
                    <a
                      href={resumePath}
                      download="Bryan_Talavera_Resume"
                      className="btn-secondary-cta"
                    >
                      Download Resume
                    </a>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Data visualization illustration" className="banner-img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
