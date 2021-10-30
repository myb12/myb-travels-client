import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <footer id="footer" className="footer-1 section-margin-top">
            <div className="main-footer widgets-dark typo-light">
                <div className="container">
                    <div className="row">

                        <div className="col-xs-12 col-sm-6 col-md-3">
                            <div className="widget subscribe no-box">
                                <h5 className="widget-title">MYB Travels<span></span></h5>
                                <p>We design our tours so you can experience the world differently. You'll get the personal service, attention to detail and ease you're looking for, while enjoying the unmissable experiences you've always dreamed of.</p>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-3">
                            <div className="widget no-box">
                                <h5 className="widget-title">Quick Links<span></span></h5>
                                <ul className="thumbnail-widget">
                                    <li>
                                        <div className="thumb-content">
                                            <Link to="/home">Home</Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="thumb-content">
                                            <Link to="/my-orders">My Orders</Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="thumb-content">
                                            <Link to="/manage-orders">Manage All Orders</Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="thumb-content">
                                            <Link to="/add-service">Add new Service</Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="thumb-content">
                                            <Link to="/login">Login</Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-3">
                            <div className="widget no-box">
                                <h5 className="widget-title">Get Started<span></span></h5>
                                <p>Don’t miss to subscribe us.</p>
                                <a className="btn" href="/#" target="_blank">Subscribe Now</a>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-3">

                            <div className="widget no-box">
                                <h5 className="widget-title">Contact Us<span></span></h5>

                                <p><a href="mailto:info@myb.com" title="MYB Travels">info@myb.com</a></p>
                                <ul className="social-footer2">
                                    <li className="">
                                        <a title="youtube" target="_blank" href="/#">
                                            <FaFacebookF />
                                        </a>
                                    </li>
                                    <li className="">
                                        <a href="/#" target="_blank" title="Twitter">
                                            <FaTwitter />
                                        </a>
                                    </li>
                                    <li className="">
                                        <a title="instagram" target="_blank" href="/#">
                                            <FaInstagram />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="footer-copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <p>Copyright MYB Travels © 2021. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;