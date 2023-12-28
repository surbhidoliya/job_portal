import "../css/Testimonial.css";

function Testimonials() {
    return (<div>
            <section className="colored-section" id="testimonials">
                <div id="testimonial-carousel" className="carousel slide" data-ride="false">
                    <div className="carousel-inner">
                        <div className="carousel-item active container-fluid">
                            <h2 className="testimonial-text">What Users say....</h2>
                        </div>
                        <div id="carouselMultiItemExample" className="carousel slide carousel-dark text-center"
                             data-mdb-ride="carousel">
                            <div className="carousel-inner py-4">
                                <div className="carousel-item active">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <img className="rounded-circle shadow-1-strong mb-4"
                                                     src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                                                     alt="avatar"
                                                     style={{width: "150px"}}/>
                                                <h5 className="mb-3">Anna Deynah</h5>
                                                <p>UX Designer</p>
                                                <p className="text-muted">
                                                    <i className="fas fa-quote-left pe-2"></i>
                                                    Efficient and user-friendly job portal
                                                    that streamlined my job search, connecting me with relevant
                                                    opportunities effortlessly.
                                                </p>

                                            </div>

                                            <div className="col-lg-4 d-none d-lg-block">
                                                <img className="rounded-circle shadow-1-strong mb-4"
                                                     src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
                                                     alt="avatar"
                                                     style={{width: "150px"}}
                                                />
                                                <h5 className="mb-3">John Doe</h5>
                                                <p>Web Developer</p>
                                                <p className="text-muted">
                                                    <i className="fas fa-quote-left pe-2"></i>
                                                    Game-changing platform! This job portal not
                                                    only widened my job search but also simplified the application
                                                    process. A must-use resource for
                                                    job seekers!
                                                </p>
                                            </div>

                                            <div className="col-lg-4 d-none d-lg-block">
                                                <img className="rounded-circle shadow-1-strong mb-4"
                                                     src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                                                     alt="avatar"
                                                     style={{width: "150px"}}
                                                />
                                                <h5 className="mb-3">Maria Kate</h5>
                                                <p>Photographer</p>
                                                <p className="text-muted">
                                                    <i className="fas fa-quote-left pe-2"></i>
                                                    Incredibly user-friendly interface! The job
                                                    portal streamlined my search and connected me with the perfect
                                                    opportunity. 5 stars!
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="src#testimonial-carousel" role="button"
                       data-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </a>
                    <a className="carousel-control-next" href="src#testimonial-carousel" role="button"
                       data-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </a>
                </div>
            </section>
            <section className="colored-section" id="press">
                <img className="press-logo" src="images/NyKinSky.png" alt="company-logo"/>
            </section>
        </div>
    );
}

export default Testimonials

