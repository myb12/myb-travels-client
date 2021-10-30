import React from 'react';
import { Container } from 'react-bootstrap';
import { FaFacebookF, FaGoogle, FaPinterestP, FaTwitter } from 'react-icons/fa';
import './Team.css'

const Team = () => {
    return (
        <Container>
            <div className="about-section">
                <div className="section-header section-margin-top row">
                    <div className="col-lg-4 col-md-3 col-sm-3"><hr className="title-line" /></div>
                    <div className="col-lg-4 col-md-6 col-sm-6"><h2 className="section-title">Who we are</h2></div>
                    <div className="col-lg-4 col-md-3 col-sm-3"><hr className="title-line" /></div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 my-2">
                        <div className="about-box-1">
                            <div>
                                <a href="/#"><img src="https://i.ibb.co/M6tvKnZ/about-6.jpg" alt="img" className="about-box-1-img" /></a>
                                <h3 className="about-box-1-title">Thomas <span>( Founder )</span></h3>
                                <p className="margin-bottom-15 gray-text">Proin gravida nibhvell aliquet. Aenean sollicitudin bibum auctor nisi elit.</p>
                            </div>
                            <div className="gray-text">
                                <a href="/#" className="team-social-icon">
                                    <FaTwitter />
                                </a>
                                <a href="/#" className="team-social-icon">
                                    <FaFacebookF />
                                </a>
                                <a href="/#" className="team-social-icon">
                                    <FaPinterestP/>
                                </a>
                                <a href="/#" className="team-social-icon">
                                    <FaGoogle />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 my-2">
                        <div className="about-box-1 ">
                            <div>
                                <a href="/#"><img src="https://i.ibb.co/nnz5Mvj/about-7.jpg" alt="img" className="about-box-1-img" /></a>
                                <h3 className="about-box-1-title">Keith <span>( Co-Founder )</span></h3>
                                <p className="margin-bottom-15 gray-text">Proin gravida nibhvell aliquet. Aenean sollicitudin bibum auctor nisi elit.</p>
                            </div>
                            <div className="gray-text">
                                <a href="/#" className="team-social-icon">
                                    <FaTwitter />
                                </a>
                                <a href="/#" className="team-social-icon">
                                    <FaFacebookF />
                                </a>
                                <a href="/#" className="team-social-icon">
                                    <FaPinterestP/>
                                </a>
                                <a href="/#" className="team-social-icon">
                                    <FaGoogle />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 my-2">
                        <div className="about-box-1">
                            <div>
                                <a href="/#"><img src="https://i.ibb.co/PxW7g4g/about-4.jpg" alt="img" className="about-box-1-img" /></a>
                                <h3 className="about-box-1-title">John <span>( General Manager )</span></h3>
                                <p className="margin-bottom-15 gray-text">Proin gravida nibhvell aliquet. Aenean sollicitudin bibum auctor nisi elit.</p>
                            </div>
                            <div className="gray-text">
                                <a href="/#" className="team-social-icon">
                                    <FaTwitter />
                                </a>
                                <a href="/#" className="team-social-icon">
                                    <FaFacebookF />
                                </a>
                                <a href="/#" className="team-social-icon">
                                    <FaPinterestP/>
                                </a>
                                <a href="/#" className="team-social-icon">
                                    <FaGoogle />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 my-2">
                        <div className="about-box-1">
                            <div>
                                <a href="/#"><img src="https://i.ibb.co/CKQ6Qwh/about-5.jpg" alt="img" className="about-box-1-img" /></a>
                                <h3 className="about-box-1-title">Smith <span>( Manager )</span></h3>
                                <p className="margin-bottom-15 gray-text">Proin gravida nibhvell aliquet. Aenean sollicitudin bibum auctor nisi elit.</p>
                            </div>
                            <div className="gray-text">
                                <a href="/#" className="team-social-icon">
                                    <FaTwitter />
                                </a>
                                <a href="/#" className="team-social-icon">
                                    <FaFacebookF />
                                </a>
                                <a href="/#" className="team-social-icon">
                                    <FaPinterestP/>
                                </a>
                                <a href="/#" className="team-social-icon">
                                    <FaGoogle />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Team;