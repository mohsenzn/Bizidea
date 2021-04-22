import React from 'react';
import Slider from "react-slick";
import {slideSlick} from '../../script/script'
class index extends React.Component{
    render(){
      
        return (
            <>
                <section className="banner section-pattern" style={{backgroundImage:'url(/assets/img/banner-pattern/slider-pattern.png)'}}>
                    
                        <div className="banner-slider">
                        <Slider {...slideSlick}>
                          
                               <div className="single-banner-slider">
                                    <div className="container">
                                        <div className="row align-items-center">
                                            <div className="col-lg-6">
                                                
                                                <div className="banner-content text-right ">
                                                    <h1 className="mb-2">طرحی بسازید <br/>
                                                    که <span>بازدیدکنندگان</span>  <br/>
                                                        را مشتری</h1>
                                                    <p>چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                                                    <a href="/" data-toggle="modal" data-target="#appointmentModalForm"
                                                        className="banner-btn btn mt-3"><span>هم اکنون اقدام کنید</span></a>
                                                </div>
                                                
                                            </div>
                                            <div className="col-lg-6">
                                                
                                                <div className="banner-image mt-50 mt-lg-0 text-center text-lg-right">
                                                    <img src="/assets/img/banner/slider-1.png" data-rjs="2" alt=""/>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-banner-slider">
                                    <div className="container">
                                        <div className="row align-items-center">
                                            <div className="col-lg-6">
                                                
                                                <div className="banner-content text-right">
                                                    <h1 className="mb-2"> <span>تجارت</span> ما<br/>
                                                        تجارت شماست</h1>
                                                    <p>چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
                                                    <a href="/" className="banner-btn btn mt-3"><span>هم اکنون اقدام کنید</span></a>
                                                </div>
                                                
                                            </div>
                                            <div className="col-lg-6">
                                                
                                                <div className="banner-image mt-50 mt-lg-0 text-center text-lg-right">
                                                    <img src="assets/img/banner/slider-2.png" data-rjs="2" alt=""/>
                                                </div>
                                            
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </Slider>
                       
                        </div>
                    
                </section>
            </>
        );
    }
}
    


export default index;
