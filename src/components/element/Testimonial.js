import React from 'react';
import Slider from "react-slick";

class Testimonial extends React.Component {
    render() {
        let settings = {
           
            fade:true,
            dots: false,
            infinite: true,
            slidesToShow: 1,
            swipeToSlide: true,
            adaptiveHeight: true,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
        };

        return (
            <>
                <section className="pt-120 pb-120 section-pattern" style={{ backgroundImage: "url(assets/img/banner-pattern/testimonial-pattern.png)" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-title text-center">
                                    <h3>کامنت ها</h3>
                                    <h2>کاربردهای متنوع با هدف</h2>
                                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد</p>
                                </div>
                            </div>
                        </div>
                        <div className="testimonial-slider">
                            <Slider {...settings} >
                                <div className="single-testimonial-slide">
                                    <div className="row align-items-center">
                                        <div className="col-md-5">
                                            <div className="testimonial-image mb-50 mb-md-0">
                                                <img src="assets/img/testimonial/testimonial-author-1.png" data-rjs="2" alt="" />
                                            </div>
                                        </div>

                                        <div className="col-md-7">
                                            <div className="testimonial-content">
                                                <p>Mr acuteness we as estimable enjoyment up. An held late as felt know. Learn do allow
                                                solid to grave. In Middleton
                                    suspicion age her attention. Chiefly several bed its wishing.</p>

                                                <h4>Albert Knick</h4>
                                                <span>Businessman</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-testimonial-slide">
                                    <div className="row align-items-center">
                                        <div className="col-md-5">
                                            <div className="testimonial-image mb-50 mb-md-0">
                                                <img src="assets/img/testimonial/testimonial-2.png" data-rjs="2" alt="" />
                                            </div>
                                        </div>

                                        <div className="col-md-7">
                                            <div className="testimonial-content">
                                                <p>Mr acuteness we as estimable enjoyment up. An held late as felt know. Learn do allow
                                                solid to grave. In Middleton
                                    suspicion age her attention. Chiefly several bed its wishing.</p>

                                                <h4>Shah Irani Sojeeb</h4>
                                                <span>XDR Owner</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-testimonial-slide">
                                    <div className="row align-items-center">
                                        <div className="col-md-5">
                                            <div className="testimonial-image mb-50 mb-md-0">
                                                <img src="assets/img/testimonial/testimonial-3.png" data-rjs="2" alt="" />
                                            </div>
                                        </div>

                                        <div className="col-md-7">
                                            <div className="testimonial-content">
                                                <p>Mr acuteness we as estimable enjoyment up. An held late as felt know. Learn do allow
                                                solid to grave. In Middleton
                                    suspicion age her attention. Chiefly several bed its wishing.</p>

                                                <h4>Emran Bikewala</h4>
                                                <span>Business Magnet</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Testimonial;
