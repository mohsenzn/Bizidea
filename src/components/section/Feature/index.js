import React, { Component } from 'react';
const ServiceList = [
    {
        img: "feature-1",
        title: 'لورم ایپسوم ',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        img: "feature-2",
        title: 'لورم ایپسوم ',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    },
    {
        img: "feature-3",
        title: 'لورم ایپسوم ',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.'
    }
]
class index extends Component {
    render() {
        return (
            <>
                <section className="pt-120 pb-90 section-pattern" style={{backgroundImage:"url(/assets/img/banner-pattern/feature-pattern.png)"}}>
                    <div className="container">
                        <div className="row justify-content-center">
                            {ServiceList.map((val,index) => (
                                <div className="col-lg-4 col-md-6" key={index}>
                                
                                <div className="single-feature text-center">
                                   
                                    <div className="image">
                                        <img src={`assets/img/feature/${val.img}.png`} data-rjs="2" alt=""/>
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
}

export default index;

