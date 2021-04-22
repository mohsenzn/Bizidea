import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';


class index extends React.Component {
    state = {
        didViewCountUp: false
    };
    onVisibilityChange = isVisible => {
        if (isVisible) {
            this.setState({didViewCountUp: true});
        }
    }
    render(){
        const countList =[
            {
                title:15,
                describe:"لورم ایپسوم",
                pal:""
            },
            {
                title:1250,
                describe:"لورم ایپسوم",
                pal:"+"
            },
            {
                title:1,
                describe:"لورم ایپسوم",
                pal:"k+"
            },
            {
                title:100,
                describe:"لورم ایپسوم",
                pal:"+"
            },
        ]
        return (
            <>
                <section className="pt-120 pb-70 gradient-bg">
                    <div className="container">
                        <div className="row align-items-center">
                            {countList.map((val,index) => (
                                <div className="col-lg-3 col-sm-6" key={index}>
                                  <div className="single-counter text-center text-white">
                                  <VisibilitySensor onChange={this.onVisibilityChange} offset={{top:10}} delayedCall>
                                        <h2 className="count">
                                        <CountUp end={val.title} duration={6}>
                                        <span>{val.title} </span>
                                        </CountUp>
                                        
                                        </h2> 
                                    </VisibilitySensor>
                                      
                                      <p>{val.describe}</p>
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
