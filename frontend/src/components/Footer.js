import React from "react";

const Footer = () => {
    return (
        <section className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <i className="fas fa-home"></i>
                        <span className="footer-other-text d-block mt-3 mb-3">
                            Your trusted partner in finding the perfect home. We provide a wide range of properties tailored to your needs.
                        </span>
                        <div className="footer-social">
                            <div className="footer-social-item"><i className="fab fa-facebook"></i></div>
                            <div className="footer-social-item"><i className="fab fa-twitter"></i></div>
                            <div className="footer-social-item"><i className="fab fa-instagram"></i></div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <p className="footer-title">Menu</p>
                        <ul className="footer-ul">
                            <li>Home</li>
                            <li>Properties</li>
                            <li>About Us</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div>
                            <p className="footer-title">Categories</p>
                            <ul className="footer-ul">
                                <li>Residential</li>
                                <li>Commercial</li>
                                <li>Luxury</li>
                                <li>Rental</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <p className="footer-title">Contact</p>
                        <ul className="footer-ul">
                            <li className="d-flex">
                                <div className="footer-info-item"><i className="fas fa-clock"></i></div>
                                <span>08:00 AM - 06:00 PM</span>
                            </li>
                            <li className="d-flex">
                                <div className="footer-info-item"><i className="fas fa-envelope"></i></div>
                                <span>shadha@realestate.com</span>
                            </li>
                            <li className="d-flex">
                                <div className="footer-info-item"><i className="fas fa-map-marker-alt"></i></div>
                                <span>123 Real Estate St, Property City</span>
                            </li>
                            <li className="d-flex">
                                <div className="footer-info-item"><i className="fas fa-phone-alt"></i></div>
                                <span>(555) 012-3456</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;
