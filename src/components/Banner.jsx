import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/header-img2.svg"
import { useEffect, useState } from "react";
import "../css/Banner.css";
import "animate.css";
import TrackVisibility from "react-on-screen";
export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Scientist","Analyst","Professional"];
    const [text, setText] = useState('');
    const [index, setIndex] = useState(1);
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => {clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
        setText(updatedText);
    
        if (isDeleting) {
          setDelta(prevDelta => prevDelta / 2);
        }
    
        if (!isDeleting && updatedText === fullText) {
          setIsDeleting(true);
          setIndex(prevIndex => prevIndex - 1);
          setDelta(period);
        } else if (isDeleting && updatedText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setIndex(1);
          setDelta(500);
        } else {
          setIndex(prevIndex => prevIndex + 1);
        }
      }
    return ( 
        <section className="banner " id="home">
            <Container>
                <Row>
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({isVisible}) => 
                            <div className={isVisible ? "animate__animated animate__fadeInDown" : ""}>
                                
                                <h1>{`Hi I'm Bryan,`} <span className="wrap"> <br />Data {text}</span> </h1>
                                <span className="tagline"><p>Hi, I’m Bryan Talavera—a Data Scientist passionate about turning data into actionable insights. I specialize in predictive modeling, data visualization, and solving real-world problems with innovative solutions. Let’s explore the power of data together!</p></span>
                                <button onClick={() => console.log("connect") }> <a className="Banner-link" href="#connect">Let's Connect <ArrowRightCircle size={25}/></a> </button>
                            </div>}
                        </TrackVisibility>
                        
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
     );
}
 
