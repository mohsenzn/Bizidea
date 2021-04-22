import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { NavLink } from 'react-router-dom';
import PriceCard from './PriceCard';

const listTab = [
    {
        title: "Personal",
        num: 250

    },
    {
        title: "Startup",
        num: 500
    },
    {
        title: "Business",
        num: 1020
    },
    {
        title: "Entrepreneur",
        num: 3000
    },
]
class index extends React.Component {
    state = {
        tabIndex: 0
    }
    render() {

        return (
            <>
                <section className="pt-120 pb-120 section-pattern" style={{ backgroundImage: "url(assets/img/banner-pattern/price-pattern.png)" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div class="section-title text-center">
                                    <h3>قیمت ها</h3>
                                    <h2>کاربردهای متنوع با هدف</h2>
                                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد</p>
                                </div>
                            </div>
                        </div>
                        <div className="pricing-navtab">
                            <Tabs  >
                                <TabList className="row nav nav-tabs">
                                    {listTab.map((val, index) => (

                                        <Tab className="nav-item col-lg-3 col-sm-6 po" key={index} >
                                            <NavLink to="#" class="nav-link text-center " activeClassName="active" >
                                                <h4>{val.title}</h4>
                                                <h2>${val.num}</h2>
                                            </NavLink>

                                        </Tab>
                                    ))}

                                   
                                </TabList>
                                <div className="tab-content">
                                   
                                <TabPanel>
                                    <PriceCard />

                                </TabPanel>
                                <TabPanel>
                                    <PriceCard />
                                </TabPanel>
                                <TabPanel>
                                    <PriceCard />
                                </TabPanel>

                                <TabPanel>
                                    <PriceCard />
                                </TabPanel>
                                </div>

                            </Tabs>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default index;
