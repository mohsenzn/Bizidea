import React from 'react';
import Navbar from '../../components/layouts/Navbar';
import { FaCheck } from "react-icons/fa";
import Price from '../../components/section/Price';
import Counter from '../../components/section/Counter';
import Brand from '../../components/section/Brand';
import Testimonial from '../../components/element/Testimonial';
import Footer from '../../components/layouts/Footer';

const servList = [
    {
        img:'service-1',
        title:'Financial Planning'
    },
    {
        img:'service-2',
        title:'Advanced Analytics'
    },
    {
        img:'service-3',
        title:'Market Research'
    },
    {
        img:'service-4',
        title:'Business Campaign'
    },
    {
        img:'service-5',
        title:'Sales & Trading'
    },
    {
        img:'service-6',
        title:'Saving Strategy'
    },
]
const index = () => {
    return (
        <>
            <Navbar activeServ="current-menu-parent" />
            <section className="page-title-bg pt-250 pb-100" style={{ backgroundImage: "url(assets/img/banner-pattern/page-title.png)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="page-title text-center">
                                <h2>Services</h2>
                                <ul className="list-inline">
                                    <li><a href="/">Home</a></li>
                                    <li>Services</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Servie Section */}
            <section className="pt-120 pb-120">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">

                            <div className="section-title text-right mb-4">
                                <h3 className="p-1">درباره شرکت ما</h3>
                                <h2 className="">ساختگی با تولید   <br />
                                کاربردهای متنوع با هدف <br />
                                ای طراحان رایانه ای علی</h2>
                                <p className="mt-3">
                                    ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                                </p>
                            </div>
                            <ul className="list-unstyled list-check text-right">
                                <li> برای شرایط فعلی تکنولوژی مورد نیاز <FaCheck className="bg-1" /></li>
                                <li> برای شرایط فعلی تکنولوژی مورد نیاز <FaCheck className="bg-1" /></li>
                                <li> برای شرایط فعلی تکنولوژی مورد نیاز <FaCheck className="bg-1" /></li>

                            </ul>
                        </div>
                        <div className="col-lg-6 mt-50 mt-lg-0">
                            <img src="assets/img/servie/serviec-1.jpg" data-rjs="2" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            {/* Servie Card */}
            <section className="pt-120 pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title text-center">
                                <h3>سرویس ها</h3>
                                <h2>کاربردهای متنوع با هدف</h2>
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {servList.map((val,index) => (
                              <div className="col-lg-4 col-sm-6" key={index}>
                              <div className="single-service text-center">
                                  <div className="icon">
                                      <img src={`assets/img/servie/${val.img}.png`} data-rjs="2" alt=""/>
                                  </div>
              
                                  <div className="content">
                                      <h4>{val.title}</h4>
                                      <p>Saved he do fruit woody of to. Met defective are allowance two.</p>
                                      <a href="/" className="btn-inline">Read More</a>
                                  </div>
                              </div>
                          </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* PRice */}
            <Price/>
            {/* Countre */}
            <Counter/>
            {/* testmonio */}
                <Testimonial/>
            {/* Brand */}
            <Brand/>
            <Footer/>
        </>
    );
}

export default index;