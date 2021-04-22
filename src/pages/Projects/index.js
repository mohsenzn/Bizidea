import React from 'react';
import Navbar from '../../components/layouts/Navbar';
import Project from '../../components/section/Projects';
import Footer from '../../components/layouts/Footer';

const index = () => {
    return (
        <>
            <Navbar activePro="current-menu-parent" />
            <section className="page-title-bg pt-250 pb-100" style={{ backgroundImage: "url(assets/img/banner-pattern/page-title.png)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="page-title text-center">
                                <h2>Projects</h2>
                                <ul className="list-inline">
                                    <li><a href="/">Home</a></li>
                                    <li>Projets</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* We well Done */}
            <section class="pt-120 pb-120">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <img src="assets/img/blog/case-study-about.jpg" data-rjs="2" alt="" />
                        </div>
                        <div class="col-lg-6">
                            <div class="section-title mb-50 mb-lg-0">
                                <h3>What We’ve Done</h3>
                                <h2>We Work All Over The <br />
                            World With Company</h2>
                                <p>Enjoyed minutes related on fanny dried as often me. Goodness as reserved raptures to mistaken steepest oh he. Gravity he
                                mr sixteen esteems. Mile home new way with high said. Finished horrible blessing landlord dwelling dissuade if. Rent
                        fond am he in on read. Anxious cordial demands settled entered in do to colonel landlord dwelling dissuade.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Project */}
            <Project/>
            <Footer/>
        </>
    );
}

export default index;
