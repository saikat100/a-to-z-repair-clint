import { motion } from "framer-motion";
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Contact.css';


const Contact = () => {
    return (
        <section className="contact-container  pb-5" id='contact'>
            <Container className="pt-5"> 
                    <h3 className="text-center">Get In Touch</h3>
                    <p className="row col-md-8 text-center m-auto">I'd Love to hear from you . Whether you have a question or just want to say hi, fell free to drop a message. I'll try my best to get back to you</p>
                    <div className="mt-4">
                        <form className="contact-form">
                            <Row>
                                <Col md="6">
                                    <div className="contact-group">
                                        <label >Your Name</label>
                                        <input type="text"  name="name" placeholder="Enter Your Name"/>
                                    </div>

                                    <div className="contact-group"  >
                                        <label>Email</label>
                                        <input type="email" name="email" placeholder="Enter Your Email"/>
                                    </div>

                                    <div className="contact-group">
                                        <label>Phone</label>
                                        <input type="phone" name="subject" placeholder="Enter Your Phone Number"/>
                                    </div>  
                                </Col>

                                <Col md="6">
                                    <div className="contact-group">
                                        <label>Message</label>
                                        <textarea name="message" placeholder='Give me a mail' />
                                    </div>
                                </Col>
                                
                            </Row>
                            <div className="mt-3 text-center">
                            <motion.button whileHover={{scale:1.1, textShadow:'0px 0px 8px rgb(255 255 255)', boxShadow:'0px 0px 8px rgb(255 255 255)'}} className='main-button'>Send Message</motion.button>
                            </div>
                        </form>
                    </div>
             </Container>
        </section>
    );
};

export default Contact;