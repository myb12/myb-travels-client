import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <section className="page_404">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 ">
                        <div className="">
                            <div className="four_zero_four_bg"></div>

                            <div className="footer_404">
                                <h3 className="h2">
                                   Opps!
                                </h3>
                                <p>Page Not Found!</p>
                                <Link to="/home" className="btn btn-regular">Go to Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NotFound;