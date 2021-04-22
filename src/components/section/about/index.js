import React from 'react';
const index = () => {
    return (
        <>
            <section className="pt-120 pb-120 section-pattern ov-hidden" style={{ backgroundImage: "url(/assets/img/banner-pattern/about-pattern.png)" }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="section-title text-right mb-3">
                                <h3 className="p-1">درباره شرکت ما</h3>
                                <h2 className="">ساختگی با تولید   <br />
                                کاربردهای متنوع با هدف <br />
                                ای طراحان رایانه ای علی</h2>
                                <p className="mt-3">
                                ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                                </p>
                            </div>
                         
                        </div>
                        <div className="col-lg-5 video-area mt-50 mt-lg-0">
                            <img src="assets/img/banner-pattern/about-feature.png" data-rjs="2" alt=""/>
                            <a href="/" className="vdo-btn popup-video"><img src="assets/img/logo/play.svg" className="svg" alt=""/> Watch Video</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default index;
