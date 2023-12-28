function HomePageHeader() {
    return (<section className="colored-section" id="title">
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <a className="navbar-brand" href="">Zenith</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarTogglerDemo02">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#welcome">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#jobs">Jobs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#testimonials">Testimonials</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div id="welcome">
                Welcome to Zenith - Where Dreams Meet Careers.
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <h1 className="big-heading">
                        Unlock Your Potential: Your Gateway to Success Begins Here! Explore Opportunities,
                        Ignite
                        Careers.
                    </h1>
                </div>
                <div className="col-lg-6">
                    <img className="title-image" src="images/4180157.jpg" alt="iphone-mockup"/>
                </div>
            </div>
        </div>
    </section>);
}

export default HomePageHeader;
