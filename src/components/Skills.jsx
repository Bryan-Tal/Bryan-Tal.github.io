import '../css/Skills.css'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from 'react-bootstrap';
import { UseCreateBarChart } from './useCreateBarChart';
import TrackVisibility from "react-on-screen";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      
      var programmingScripting = [
        {name: "Python", value: 90},
        {name: "SQL", value: 85},
        {name: "R",value: 75},
      ];
      var barWebDev = [
        {name: "HTML", value: 90},
        {name: "CSS", value: 80},
        {name: "JavaScript",value: 85},
        {name: "react.js", value: 80},
        
      ];
      var barPythonPackages = [
        {name: "Pandas", value: 90},
        {name: "Statsmodels", value: 85},
        {name: "Scikit-learn", value: 90},
        {name: "SciPy", value: 80},
      ];
      var barDataVizTools = [
        {name: "Tableau", value: 85},
        {name: "Seaborn", value: 80},
        {name: "Matplotlib", value: 85},
        {name: "d3.js", value: 70},
        {name: "Microsoft Excel", value: 80}
      ];
      

      
      
    return ( 
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                      <TrackVisibility>
                        {({isVisible}) => 
                        <div className={isVisible ? "animate__animated animate__backInLeft" : ""}>
                        <h2>Skills</h2>
                        <p>Proficient in Python, SQL, and JavaScript, with expertise in data analysis, visualization, and predictive modeling. Experienced in machine learning frameworks, statistical analysis, and database management. Adept at using tools like Tableau, scikit-learn, and pandas to deliver actionable insights.</p>                
                        </div>}
                      </TrackVisibility>
                        
                        <Carousel responsive={responsive} infinite={false} className='skill-slider'>
                          <div className='item'>
                            <UseCreateBarChart data={programmingScripting}/>
                            <h5>Programming & Scripting</h5>
                          </div>
                          <div className='item'>
                            <UseCreateBarChart data={barWebDev}/>
                            <h5>Web Development</h5>
                          </div>
                          <div className='item'>
                            <UseCreateBarChart data={barDataVizTools}/>
                            <h5>Data Visualization & Reporting</h5>
                          </div>
                          <div className='item'>
                            <UseCreateBarChart data={barPythonPackages}/>
                            <h5>Python Packages</h5>
                          </div>
                          
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            {/* <img src={colorSharp}  className="background-image-left" /> */}
        </section>
     );
}
 
