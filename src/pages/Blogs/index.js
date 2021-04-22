import React from 'react';
import Navbar from '../../components/layouts/Navbar';
import Footer from '../../components/layouts/Footer';

const blogList = [
    {
        img:"blog-1",
        title:"How Can You Maximize Your Savings in the New Year",
        sector:"Corporate"
    },
    {
        img:"blog-2",
        title:"Funds in Institutional Portfolios: Florida Retirement System",
        sector:"Corporate"
    }, 
    {
        img:"blog-3",
        title:"Funds in Institutional Portfolios: Florida Retirement System",
        sector:"Finance"
    },
    {
        img:"blog-4",
        title:"When is the Best Time to Look for New Appliances?",
        sector:"Corporate"
    },
    {
        img:"blog-5",
        title:"How to Maximize the Benefits of Your Retirement Account",
        sector:"Business"
    },
    {
        img:"blog-2",
        title:"How Can You Maximize Your Savings in the New Year",
        sector:"Corporate"
    },
]
const index = () => {
    return (
        <>
            <Navbar activeBlo="current-menu-parent" />
            <section className="page-title-bg pt-250 pb-100" style={{ backgroundImage: "url(assets/img/banner-pattern/page-title.png)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="page-title text-center">
                                <h2>Blogs</h2>
                                <ul className="list-inline">
                                    <li><a href="/">Home</a></li>
                                    <li>Blog</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Blogs */}
            <section className="pt-120 pb-90">
                <div className="container">
                    <div className="row">
                        {blogList.map((val,index) => (
                            <div class="col-lg-6" key={index}>
                            <div class="single-blog-item position-relative">
                                <div class="date-bg-shape position-absolute">
                                    <img src="assets/img/shape/blog-date-shape.svg" class="svg" alt=""/>
                                </div>
                            
                                <div class="blog-content">
                                    <p class="posted-on">18 Feb</p>
                                    <p class="category">{val.sector}</p>
                            
                                    <h3 class="blog-title">{val.title}</h3>
                            
                                    <p class="blog-excerpt">Rooms oh fully taken by worse do. To points afraid but may end law
                                        lasted was out laughter raptures. Improved own
                                        provided blessing may peculiar domestic.</p>
                                </div>
                            
                                <div class="blog-hover text-center text-white position-absolute w-100 h-100 d-flex align-items-center justify-content-center bg-overlay"
                                    style={{backgroundImage:`url(assets/img/blog/${val.img}.jpg)`}}>
                                    <h3 class="blog-title"><a href="/">{val.title}</a></h3>
                                </div>
                            
                                <div class="blog-button position-absolute w-100 d-flex align-items-center justify-content-center" data-bg-img="">
                                    <img src="assets/img/shape/blog-shape.svg" class="svg" alt=""/>
                                    <a href="/" class="btn-inline">Read More</a>
                                </div>
                            </div>
                        </div> 
                        ))}
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
}

export default index;
