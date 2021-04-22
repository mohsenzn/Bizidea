import React from 'react';
import Navbar from '../../components/layouts/Navbar';
import Footer from '../../components/layouts/Footer';

const index = () => {
    return (
        <>
            <Navbar activeCon="current-menu-parent" />
            <section className="page-title-bg pt-250 pb-100" style={{ backgroundImage: "url(assets/img/banner-pattern/page-title.png)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="page-title text-center">
                                <h2>Contact Us</h2>
                                <ul className="list-inline">
                                    <li><a href="/">Home</a></li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-120 pb-120">
                <div className="container">
                    <div className="row">
                        <div class="col-lg-4">
                            <div class="contact-info">
                                <h3>Contact Info</h3>
                                <p>Continue new you declared differed learning bringing honoured.</p>

                                <div class="row">
                                    <div class="col-sm-6 col-lg-12 single-contact-info media align-items-center">
                                        <div class="image">
                                            <img src="assets/img/logo/location.svg" class="svg" alt="" />
                                        </div>
                                        <div class="media-body">
                                            <h4>Office Location</h4>
                                            <p>173 Collins Street West victoria,
                                    Melbourne, Australia</p>
                                        </div>
                                    </div>

                                    <div class="col-sm-6 col-lg-12 single-contact-info media align-items-center">
                                        <div class="image">
                                            <img src="assets/img/logo/phone.svg" class="svg" alt="" />
                                        </div>
                                        <div class="media-body">
                                            <h4>Business Phone</h4>
                                            <p><a href="/">+0096665431</a> <a href="/">+0096667331</a></p>
                                        </div>
                                    </div>

                                    <div class="col-sm-6 col-lg-12 single-contact-info media align-items-center">
                                        <div class="image">
                                            <img src="assets/img/logo/email.svg" class="svg" alt="" />
                                        </div>
                                        <div class="media-body">
                                            <h4>Business Email</h4>
                                            <p><a href="/">bizidea@info.com</a>
                                                <a href="/">bizidea@gmail.com</a>
                                            </p>
                                        </div>
                                    </div>

                                    <div class="col-sm-6 col-lg-12 single-contact-info media align-items-center">
                                        <div class="image">
                                            <img src="assets/img/logo/email.svg" class="svg" alt="" />
                                        </div>
                                        <div class="media-body">
                                            <h4>Office Hours</h4>
                                            <p>Monday - Friday <br />
                                                8:30 AM - 6:00 PM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-8">
                            <div class="contact-form-wrapper">
                                <h3>Send Us Message</h3>
                                <p>Our believe has request not how comfort evident. Up delight cousins we feeling
                        minutes. Genius has looked end piqued spring. Down has rose feel find man.</p>

                                <form method="POST" action="sendmail.php" class="contact-form">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <input type="text" name="name" class="theme-input-style" placeholder="Your Name" required />
                                        </div>
                                        <div class="col-md-6">
                                            <input type="email" name="email" class="theme-input-style" placeholder="Your Email" required />
                                        </div>
                                        <div class="col-md-6">
                                            <input type="text" name="company" class="theme-input-style" placeholder="Company Name" />
                                        </div>
                                        <div class="col-md-6">
                                            <input type="tel" name="phone" class="theme-input-style" placeholder="Phone" />
                                        </div>

                                        <div class="col-12">
                                            <textarea name="message" class="theme-input-style" required></textarea>
                                        </div>

                                        <div class="col-12">
                                            <button type="submit" class="btn"><span>Submit</span></button>
                                        </div>
                                    </div>
                                    <div class="form-response"></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
}

export default index;