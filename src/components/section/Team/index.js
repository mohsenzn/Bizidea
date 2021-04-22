import React from 'react';
import { FiInstagram, FiFacebook, FiTwitter, FiLinkedin } from "react-icons/fi";

const teamList = [
    {
        img: "team-1",
        name: "Shahin Gholami"
    },
    {
        img: "team-2",
        name: "Jack Reader"
    },
    {
        img: "team-3",
        name: "Mickle Jection"
    },
    {
        img: "team-4",
        name: "Jeson Roy"
    },
    {
        img: "team-5",
        name: "Andy Mare"
    },
    {
        img: "team-6",
        name: "John Snow"
    }

]
const index = () => {
    return (
        <>
            <section className="pt-120 pb-70 section-pattern" style={{ backgroundImage: "url(assets/img/banner-pattern/testimonial-pattern.png)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title text-center">
                                <h3 className="p-1">تیم ما</h3>
                                <h2 className="">ورم ایپسوم متن ساختگی با </h2>
                                <p className="mt-3">
                                    ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                                    </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {teamList.map((val, index) => (
                            <div className="col-lg-4 col-sm-6" key={index}>

                                <div className="single-team-member">

                                    <div className="image position-relative">
                                        <img src="assets/img/shape/team.svg" className="svg" alt="" />
                                        <img src={`assets/img/team/${val.img}.jpg`} data-rjs="2" alt="" />
                                    </div>

                                    <div className="team-info">
                                        <div className="info-front text-center">
                                            <h4>{val.name}</h4>
                                            <p>CEO of Bizidea</p>
                                        </div>

                                        <div className="info-back">
                                            <ul className="social_icon_list list-inline text-center w-100 d-flex justify-content-around">
                                                <li>
                                                    <a href="/"><FiFacebook className="fa-facebook" /></a>
                                                </li>
                                                <li>
                                                    <a href="/"><FiTwitter className="fa-twitter"/></a>
                                                </li>
                                                <li>
                                                    <a href="/"><FiLinkedin className="fa-linkedin"/></a>
                                                </li>
                                                <li>
                                                    <a href="/"><FiInstagram className="fa-instagram"/></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default index;
