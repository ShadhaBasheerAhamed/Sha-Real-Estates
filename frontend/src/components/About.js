const About = () => {
    return (
        <section className="about">
            <div className="page-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="page-title">About</h1>
                            <h2 className="page-description">About Our Real Estate Management</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src="/img/product1.jpeg" alt="real estate property" className="w-100" />
                        </div>
                        <div className="col-lg-6">
                            <div className="about-item">
                                <div className="title">
                                    Our Commitment to Excellence in Real Estate
                                </div>
                                <div className="about-text">
                                    At <span>Sha Estates</span>, we are dedicated to providing exceptional real estate management services that cater to the diverse needs of our clients. With years of industry experience, we strive to ensure that every property we manage is handled with the utmost care and professionalism.
                                </div>
                                <div className="about-features">
                                    <p className="about-feature"><i className="fas fa-long-arrow-alt-right"></i> Comprehensive property management services tailored to your needs.</p>
                                    <p className="about-feature"><i className="fas fa-long-arrow-alt-right"></i> Expert guidance on property investment and market trends.</p>
                                    <p className="about-feature"><i className="fas fa-long-arrow-alt-right"></i> A dedicated team committed to maximizing your property’s value.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
