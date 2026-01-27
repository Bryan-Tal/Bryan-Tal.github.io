import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.png"
import "../css/Contact.css"
import resumePath from "../assets/img/BryanTalavera.pdf"
export const Contact = () => {
    const formInitialDetails = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
    }
    const sleep = ms => new Promise(r => setTimeout(() => r(), ms));
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState("Send");
    const [status, setStatus] = useState ({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }
   
    const clearDetails = async () => {
        setButtonText("Successfully Sent!")
        setFormDetails(formInitialDetails)
        await sleep(1250);
        setButtonText("Send")
    }

    const handleSubmit = () => {
        const scriptURL = "https://script.google.com/macros/s/AKfycbx3zjv4pgJslnDLlYDqifmNensSi9jwMlLd2pgd290jRjrfICFdc-z_Rz20nv86gt-1Ug/exec"
        
        const form = document.forms['submit-to-google-sheet'];
        
        form.addEventListener('submit', e => {
            
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', mode:'no-cors', body: new FormData(form)})
            .then(response => console.log('Success!', response), clearDetails())
            .catch(error => console.error('Error!', error.message) )
  })


    }
    return ( 
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contact Us" /> 
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                         <a href={resumePath} download="Bryan Talavera - Resume">
                            <button class="standalone"><span>Here's My Resume!</span></button>
                         </a>
                         <br /> <br />
                         
                        <form name="submit-to-google-sheet">
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} name="firstName" placeholder="First Name" onChange={(e) => onFormUpdate("firstName", e.target.value)} required />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.lastName} name="lastName" placeholder="Last Name" onChange={(e) => onFormUpdate("lastName", e.target.value)} required />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" value={formDetails.email} name="email" placeholder="Email" onChange={(e) => onFormUpdate("email", e.target.value)} required />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="tel" value={formDetails.phone} name="phone" placeholder="Phone Number" onChange={(e) => onFormUpdate("phone", e.target.value)} required />
                                </Col>
                                <Col sm={12} className="px-1">
                                    <textarea rows="6" value={formDetails.message} name="message" placeholder="Message" onChange={(e) => onFormUpdate("message", e.target.value)} required />
                                    <button type='submit' onClick={handleSubmit}><span>{buttonText}</span></button>
                                </Col>
                                { 
                                    status.message &&
                                    <Col>
                                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
     );
}
 
