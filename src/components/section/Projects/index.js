import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { NavLink } from 'react-router-dom';

const navList = [
    {
        title: "All"
    },
    {
        title: "Financial"
    },
    {
        title: "Business"
    },
    {
        title: "Investment"
    }

]
const listOne = [
    {
        img: 'project-1',

    },
    {
        img: 'project-2',

    },
    {
        img: 'project-3',

    },
    {
        img: 'project-4',

    }
]
const listTwo = [
    {
        img: 'project-1',

    },
    {
        img: 'project-2',

    },
    {
        img: 'project-3',

    }
]
const listThree = [
    {
        img: 'project-1',

    },
    {
        img: 'project-2',

    }
]
const listFour = [
    {
        img: 'project-1',

    },
    {
        img: 'project-2',

    }
]
class index extends React.Component {

    render() {


        return (
            <>
                <section className="pt-120 pb-90 section-pattern" style={{ backgroundImage: "url(assets/img/banner-pattern/case-study-pattern.png)" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-title text-center">
                                    <h3 className="p-1">پروژه ها</h3>
                                    <h2 className="">ساختگی با تولید </h2>
                                    <p className="mt-3">
                                        ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="project-nav text-center mb-30">
                                    <Tabs>
                                        <div className="nav justify-content-center align-items-center">
                                            <TabList className="project_filter list-inline">
                                                {navList.map((val, index) => (
                                                    <Tab key={index}>
                                                        <NavLink to="#" activeClassName="Active"  className="">
                                                            <span class="filter-btn">{val.title}</span>

                                                        </NavLink>
                                                    </Tab>
                                                ))}
                                            </TabList>
                                        </div>
                                        <TabPanel>
                                            <div className="row project-items grid fadeInUp animated">

                                                {listOne.map((val, index) => (
                                                    <div class="col-lg-6 grid-item" key={index}>
                                                        <div class="single-project-item">

                                                            <div class="image">
                                                                <img src={`assets/img/project/${val.img}.png`} data-rjs="2" alt="" />
                                                            </div>

                                                            <div class="project-body">
                                                                <h3><a href="/">Business consultant finds more ways to bring business to light</a></h3>
                                                                <p class="project-meta">Client:<span>Alto Palermo S.A.</span></p>
                                                                <p>Imprudence attachment him his for sympathize. Large above be to means. Dashwood do
                                                                provided stronger is. But discretion
                                                                     frequently.</p>
                                                                <a href="/" class="btn-inline">Read More</a>
                                                            </div>

                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </TabPanel>
                                        <TabPanel>
                                            <div className="row project-items grid fadeInUp animated">

                                                {listTwo.map((val, index) => (
                                                    <div class="col-lg-6 grid-item" key={index}>
                                                        <div class="single-project-item">

                                                            <div class="image">
                                                                <img src={`assets/img/project/${val.img}.png`} data-rjs="2" alt="" />
                                                            </div>

                                                            <div class="project-body">
                                                                <h3><a href="/">Business consultant finds more ways to bring business to light</a></h3>
                                                                <p class="project-meta">Client:<span>Alto Palermo S.A.</span></p>
                                                                <p>Imprudence attachment him his for sympathize. Large above be to means. Dashwood do
                                                                provided stronger is. But discretion
                                                                     frequently.</p>
                                                                <a href="/" class="btn-inline">Read More</a>
                                                            </div>

                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </TabPanel>
                                        <TabPanel>
                                            <div className="row project-items grid fadeInUp animated">

                                                {listThree.map((val, index) => (
                                                    <div class="col-lg-6 grid-item" key={index}>
                                                        <div class="single-project-item">

                                                            <div class="image">
                                                                <img src={`assets/img/project/${val.img}.png`} data-rjs="2" alt="" />
                                                            </div>

                                                            <div class="project-body">
                                                                <h3><a href="/">Business consultant finds more ways to bring business to light</a></h3>
                                                                <p class="project-meta">Client:<span>Alto Palermo S.A.</span></p>
                                                                <p>Imprudence attachment him his for sympathize. Large above be to means. Dashwood do
                                                                provided stronger is. But discretion
                                                                     frequently.</p>
                                                                <a href="/" class="btn-inline">Read More</a>
                                                            </div>

                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </TabPanel>
                                        <TabPanel>
                                            <div className="row project-items grid fadeInUp animated">

                                                {listFour.map((val, index) => (
                                                    <div class="col-lg-6 grid-item" key={index}>
                                                        <div class="single-project-item">

                                                            <div class="image">
                                                                <img src={`assets/img/project/${val.img}.png`} data-rjs="2" alt="" />
                                                            </div>

                                                            <div class="project-body">
                                                                <h3><a href="/">Business consultant finds more ways to bring business to light</a></h3>
                                                                <p class="project-meta">Client:<span>Alto Palermo S.A.</span></p>
                                                                <p>Imprudence attachment him his for sympathize. Large above be to means. Dashwood do
                                                                provided stronger is. But discretion
                                                                     frequently.</p>
                                                                <a href="/" class="btn-inline">Read More</a>
                                                            </div>

                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </TabPanel>
                                    </Tabs>
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
