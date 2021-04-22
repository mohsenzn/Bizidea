import React from 'react';
const ServiceList = [
    {
        img: "service-1",
        title: 'لورم ایپسوم ',
        description: 'ورم ایپسوم متن ساختگی با تولید سادگی'
    },
    {
        img: "service-2",
        title: 'لورم ایپسوم ',
              description: 'ورم ایپسوم متن ساختگی با تولید سادگی'

    },
    {
        img: "service-3",
        title: 'لورم ایپسوم ',
              description: 'ورم ایپسوم متن ساختگی با تولید سادگی'

    },
    {
        img: "service-4",
        title: 'لورم ایپسوم ',
        description: 'ورم ایپسوم متن ساختگی با تولید سادگی'

    }
]
const index = () => {
    return (
        <>
            <section className="pt-120 pb-90 section-pattern " style={{ backgroundImage: "url(assets/img/banner-pattern/service-pattern.png)" }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 text-right">
                            <div className="section-title text-right">
                                <h3 className="p-1">سرویس ها</h3>
                                <h2 className="">ساختگی با تولید   <br />
                                کاربردهای متنوع با هدف <br />
                                ای طراحان رایانه ای علی</h2>
                                <p className="mt-3">
                                    ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                                </p>
                            </div>
                                <a href="/" className="btn "><span>نمایش همه</span></a>

                        </div>
                        <div className="col-lg-6">
                            <div className="row mt-40 mt-lg-0">
                                {ServiceList.map((val,index) =>(
                                     <div className="col-sm-6 single-service-wrapper" key={index}>
                                   
                                     <div className="single-service text-center">
                                         
                                         <div className="icon">
                                             <img src={`assets/img/servie/${val.img}.png`} data-rjs="2" alt=""/>
                                         </div>
                                        
         
                                         
                                         <div className="content">
                                             <h4>{val.title}</h4>
                                             <p>{val.description}</p>
                                             <a href="/" className="btn-inline">بیشتر</a>
                                         </div>
                                         
                                     </div>
                                     
                                 </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default index;
