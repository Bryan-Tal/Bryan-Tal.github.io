import '../css/AboutMe.css';
import "animate.css";
import ucsdTriton from "../assets/img/tritons.png"
import { useState } from 'react';
import TrackVisibility from "react-on-screen";

export const AboutMe = () => {
    const [activeTab, setActiveTab] = useState('Education');

    function opentab(event, tabname) {
        setActiveTab(tabname);
    }
        
    
    return ( 
        <div className="about" id="about">
        <div class="container">
            <div class="row">
                <div class="about-col-1">
                    <img src={ucsdTriton} alt="UCSD Triton" style={{height: "10 em"}}/>
                </div>
                <div class="about-col-2 block">
                    <TrackVisibility>
                        {({isVisible}) => 
                        <div className={isVisible ? "animate__animated animate__backInRight show" : ""}>
                        <h1 class="subtitle">About Me</h1>
                        <img src="" alt="" />
                        <p>I’m a Data Science graduate with hands-on experience in Python, data visualization, and machine learning. I’ve developed predictive models to solve real-world challenges in transportation and HR, leveraging skills in data integration, analysis, and visualization. Passionate about continuous learning, I’m eager to collaborate and create innovative solutions for complex data problems.</p>
                        </div>}
                    </TrackVisibility>
                    <div class="tab-titles">
                        {/* <p className={activeTab === "Experience" ? "tab-links active-link" : "tab-links"} onClick={(event) => opentab(event, "Experience")}>Experience</p> */}
                        <p className={activeTab === "Education" ? "tab-links active-link" : "tab-links"} onClick={(event) => opentab(event, "Education")}>Education</p>
                    </div>
                    {/* <div className={activeTab === "Experience" ? "tab-contents active-tab" : "tab-contents"}>
                        <ul>
                            <li><span>2021 - Current</span><br/>UX/UI Design Training at ET Institute</li>
                            <li><span>2019 - 2021</span><br/>UI/UX Design Exec at Coin Digital Ltd.</li>
                            <li><span>2017 - 2019</span><br/>Team Lead at StarApp LLC.</li>
                        </ul>
                    </div> */}
                    <div className={activeTab === "Education" ? "tab-contents active-tab" : "tab-contents"}> 
                        <ul>
                            <li><span>2024</span><br/>Google Data Analytics Professional Certificate - <a href="https://www.credly.com/badges/d51d1b36-ccfe-4cf4-b63e-a473056ba9cc/public_url">Certificate Link</a></li>
                            <li><span>2024</span><br/>B.S. Data Science from UC San Diego</li>
                        </ul>
                    </div>
                    {/* <div class="tab-contents active-tab" id="experience">
                        <ul>
                            <li><span>2021 - Current</span><br/>UX/UI Design Training at ET Institute</li>
                            <li><span>2019 - 2021</span><br/>UI/UX Design Exec at Coin Digital Ltd.</li>
                            <li><span>2017 - 2019</span><br/>Team Lead at StarApp LLC.</li>
                        </ul>
                    </div>
                    <div class="tab-contents" id="education">
                        <ul>
                            <li><span>2024</span><br/>B.S. Data Science from UC San Diego</li>
                           
                        </ul>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
     );
}
 