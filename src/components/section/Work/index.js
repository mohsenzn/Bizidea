import React from 'react';
const ServiceList = [
    {
        img: "process-1",
        title: 'لورم ایپسوم ',
        description: 'ورم ایپسوم متن ساختگی با تولید سادگی'
    },
    {
        img: "process-2",
        title: 'لورم ایپسوم ',
              description: 'ورم ایپسوم متن ساختگی با تولید سادگی'

    },
    {
        img: "process-3",
        title: 'لورم ایپسوم ',
              description: 'ورم ایپسوم متن ساختگی با تولید سادگی'

    },
    {
        img: "process-4",
        title: 'لورم ایپسوم ',
              description: 'ورم ایپسوم متن ساختگی با تولید سادگی'

    }
]
const index = () => {
    return (
        <>
            <section className="pt-120 pb-70 section-pattern" style={{ backgroundImage: "url(assets/img/banner-pattern/work-process-pattern.png)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">

                            <div className="section-title text-center">
                                <h3>مراحل</h3>
                                <h2>ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم  </h2>
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد</p>
                            </div>

                        </div>
                    </div>
                    <div className="row process-bg" style={{backgroundImage: "url(assets/img/banner-pattern/process_shape.png)" }}>
                        {ServiceList.map((val,index)=>(
                            <div className="col-lg-3 col-sm-6 single-process-wrapper" key={index}>
                            
                            <div className="single-process text-center">
                               
                                <div className="image">
                                    <img src={`assets/img/work/${val.img}.png`} data-rjs="2" alt=""/>
                                </div>
                                <div className="content">
                                    <h3>{val.title}</h3>
                                    <p>{val.description}</p>
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
