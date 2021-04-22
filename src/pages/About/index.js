import React from 'react';
import Navbar from '../../components/layouts/Navbar';
import AboutUs from '../../components/section/about';
import {FaCheck} from 'react-icons/fa';
import Counter from '../../components/section/Counter';
import Brand from '../../components/section/Brand';
import Testimonial from '../../components/element/Testimonial';
import Footer from '../../components/layouts/Footer';
const index = () => {
    return (
        <>
            <Navbar activeAbo="current-menu-parent" />
            <section className="page-title-bg pt-250 pb-100" style={{ backgroundImage: "url(assets/img/banner-pattern/page-title.png)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="page-title text-center">
                                <h2>About Us</h2>
                                <ul className="list-inline">
                                    <li><a href="/">Home</a></li>
                                    <li>About</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ABout Us */}
            <section class="pt-120 pb-120">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="section-title text-center">
                                <h3>Who We Are</h3>
                                <h2>We’re Expertise & Strategic Agency <br />
                            To Take Care Of Your Business</h2>
                                <p>Met defective are allowance two perceived listening consulted contained. It chicken oh colonel pressed
                        excited suppose to shortly.</p>
                            </div>

                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12">
                            <img src="assets/img/work/about-main.jpg" data-rjs="2" alt="" />
                        </div>
                    </div>

                    <div class="row justify-content-center">
                        <div class="col-lg-10">
                            <div class="about-text mt-5">
                                <p>At as in understood an remarkably solicitude. Mean them very seen she she. Use totally written the observe pressed
                                justice. Instantly cordially far intention recommend estimable yet her his. Ladies stairs enough esteem add fat all
                                enable. Needed its design number winter see. Oh be me sure wise sons no. Piqued ye of am spirit regret. Stimulated
                                discretion impossible admiration in particular conviction up. Pasture he invited mr company shyness. But when shot real
                                her. Chamber her observe visited removal six sending himself boy. At exquisite existence if an oh dependent excellent.
                        Are gay head need down draw.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ABout */}
            <AboutUs />
            {/* About section 3 */}
            <section class="pt-120 pb-120">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <img src="assets/img/work/about02.jpg" data-rjs="2" class="w-100" alt="" />
                        </div>

                        <div class="col-lg-6">
                            <div class="section-title mb-4 mt-50 mt-lg-0 text-right">
                                <h3>آینده شرکت</h3>
                                <h2>کاربردهای متنوع با هدف <br />
                                ای طراحان رایانه ای علی</h2>
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد</p>

                            </div>

                            <ul className="list-unstyled list-check text-right">
                                <li> برای شرایط فعلی تکنولوژی مورد نیاز <FaCheck className="bg-1" /></li>
                                <li> برای شرایط فعلی تکنولوژی مورد نیاز <FaCheck className="bg-1" /></li>
                                <li> برای شرایط فعلی تکنولوژی مورد نیاز <FaCheck className="bg-1" /></li>
                                <li> برای شرایط فعلی تکنولوژی مورد نیاز <FaCheck className="bg-1" /></li>

                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* Counter */}
            <Counter/>
            {/* Testimonial */}
            <Testimonial/>
            {/* Brand */}
            <Brand/>
            <Footer/>
        </>
    );
}

export default index;
