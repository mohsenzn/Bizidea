import React from 'react';
import Slider from "react-slick";
const imgList = [
    {
        img: "brand-1"
    },
    {
        img: "brand-2"
    },
    {
        img: "brand-3"
    }, {
        img: "brand-4"
    },
    {
        img: "brand-5"
    },
    {
        img: "brand-6"
    }

]
class index extends React.Component {
    render() {
        let settings = {
            className: "",
            dots: false,
            infinite: true,
            slidesToShow: 5,
            swipeToSlide: true,
            adaptiveHeight: true
        };
        return (
            <>
                <section className="pt-120 pb-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="brand-logo">
                                    <Slider {...settings}>
                                        {imgList.map((val, index) => (
                                            <a href="/" class="single-brand-logo" key={index}>
                                                <img src={`assets/img/brand/${val.img}.png`} data-rjs="2" alt="" />
                                            </a>
                                        ))}
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default index;
