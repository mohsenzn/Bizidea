import React from 'react';
import { FaCaretRight, FaRegPaperPlane } from "react-icons/fa";

import { FiInstagram, FiFacebook, FiTwitter, FiLinkedin } from "react-icons/fi";

import BactoTop from '../../element/backtoTop'
const index = () => {
    
    return (
        <>
            <div className="footer bg-light section-pattern footer-bg" style={{ backgroundImage: "url(assets/img/banner-pattern/footer-pattern.png)" }}>
                <div className="footer-top pt-60">
                    <div className="container border-bottom">
                        <div className="row">
                            {/* One COl-3 */}
                            <div class="col-lg-3 col-sm-6">
                                <div class="widget widget_contact_info">
                                    <div class="widget-logo">
                                        <img src="assets/img/footer_logo.png" data-rjs="2" alt="" />
                                    </div>
                                    <div class="info-content">
                                        <div class="single-info">
                                            <span>Office Location</span>
                                            <p>173 Collins Street West victoria, Melbourne, Australia</p>
                                        </div>
                                        <div class="single-info">
                                            <span>Business Phone</span>
                                            <p><a href="/">+0096665431</a><a href="/">+0096667331</a></p>
                                        </div>
                                        <div class="single-info">
                                            <span>Support mail</span>
                                            <p>
                                                <a href="/">bizidea@info.com</a>
                                                <a href="/">bizidea@gmail.com</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Two Col-3 */}
                            <div class="col-lg-3 col-sm-6">
                                <div class="widget widget_recent_entries">
                                    <div class="widget-title">
                                        <h4>Recent Posts</h4>
                                    </div>
                                    <div class="single-post media">
                                        <div class="post-image">
                                            <img src="assets/img/blog/recent-post.png" data-rjs="2" alt="" />
                                        </div>
                                        <div class="post-content media-body">
                                            <span class="posted-on">18 Feb, 2019</span>
                                            <h5><a href="/">Funds in Institutional Portfolios</a></h5>
                                        </div>
                                    </div>
                                    <div class="single-post media">
                                        <div class="post-image">
                                            <img src="assets/img/blog/recent-post.png" data-rjs="2" alt="" />
                                        </div>
                                        <div class="post-content media-body">
                                            <span class="posted-on">18 Feb, 2019</span>
                                            <h5><a href="/">Funds in Institutional Portfolios</a></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* three Col-2 */}
                            <div class="col-lg-2 col-sm-6">
                                <div class="widget widget_nav_menu">
                                    <div class="widget-title">
                                        <h4>Quick Links</h4>
                                    </div>
                                    <ul class="menu">
                                        <li><a href="/"><FaCaretRight />About Company</a></li>
                                        <li><a href="/"><FaCaretRight />Our Services</a></li>
                                        <li><a href="/"><FaCaretRight />Our Experts</a></li>
                                        <li><a href="/"><FaCaretRight />Get Constultation</a></li>
                                        <li><a href="/"><FaCaretRight />Terms & Condition</a></li>
                                        <li><a href="/"><FaCaretRight />Privacy policy</a></li>
                                    </ul>
                                </div>
                            </div>
                            {/* four Col-4 */}
                            <div class="col-lg-4 col-sm-6">

                                <div class="widget widget_newsletter">

                                    <div class="widget-title">
                                        <h4>Newsletter</h4>
                                    </div>


                                    <div class="newsletter-content">
                                        <p>Cuteness you exquisite ourselves now end
                                        forfeited. Enquire ye without it garrets himself. Interest our nor received followed
                                    was.</p>

                                        <form action="https://themelooks.us13.list-manage.com/subscribe/post?u=79f0b132ec25ee223bb41835f&amp;id=f4e0e93d1d" method="post" name="mc-embedded-subscribe-form" target="_blank" class="newsletter-form">
                                            <div class="theme-input-group">
                                                <input type="text" placeholder="Your Email" />
                                                <button type="submit"><FaRegPaperPlane /></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <div class="widget widget_social_icon">
                                    <ul class="social_icon_list list-inline">
                                        <li>
                                            <a href="/"><FiFacebook className="fa-facebook" /></a>
                                        </li>
                                        <li>
                                            <a href="/"><FiInstagram className="fa-instagram" /></a>
                                        </li>
                                        <li>
                                            <a href="/"><FiTwitter className="fa-twitter" /></a>
                                        </li>
                                        <li>
                                            <a href="/"><FiLinkedin className="fa-linkedin" /></a>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="copyright-text text-center">
                                    <span><a href="/">bizidea</a> &copy; Copyright 2020.All rights reserved.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BactoTop/>
        </>
    );
}

export default index;
