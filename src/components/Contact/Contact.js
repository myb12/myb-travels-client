import React from 'react';
import { FaDribbble, FaFacebookF, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    return (
        <section className="section-padding-bottom">
            <div className="container">
                <div className="section-header section-margin-top row">
                    <div className="col-lg-4 col-md-3 col-sm-3"><hr className="title-line" /></div>
                    <div className="col-lg-4 col-md-6 col-sm-6"><h2 className="section-title">Contact Us</h2></div>
                    <div className="col-lg-4 col-md-3 col-sm-3"><hr className="title-line" /></div>
                </div>
                <div className=" row contact-form">
                    <div className="col-lg-6 col-md-6">
                        <div id="google-map">
                            <iframe title="This is a unique title" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14607.605510543724!2d90.38426189999998!3d23.75089605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1634623431110!5m2!1sen!2sbd" width="100%" height="100%" frameBorder="0" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                        </div>
                        <div className="contact-social">
                            <span className="social-icon social-facebook">
                                <FaFacebookF />
                            </span>
                            <span className="social-icon social-dribbble">
                                <FaDribbble />
                            </span>
                            <span className="social-icon social-twitter">
                                <FaTwitter />
                            </span>
                            <span className="social-icon social-instagram">
                                <FaInstagram />
                            </span>
                            <span className="social-icon social-google-plus">
                                <FaGoogle />
                            </span>
                        </div>
                    </div>
                    <div className="col-md-6 contact-form-input mt-3 mt-md-0">
                        <div className="form-group">
                            <input type="text" id="contact_name" className="form-control" placeholder="NAME" />
                        </div>
                        <div className="form-group">
                            <input type="email" id="contact_email" className="form-control" placeholder="EMAIL" />
                        </div>
                        <div className="form-group">
                            <input type="text" id="contact_subject" className="form-control" placeholder="SUBJECT" />
                        </div>
                        <div className="form-group">
                            <textarea id="contact_message" className="form-control" rows="6" placeholder="MESSAGE"></textarea>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-regular w-100" name="submit">Submit now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;