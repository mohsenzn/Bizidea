import React from 'react';
import Helmet from '../components/common/Helmet'
// import Preloader from '../components/element/preloader';
import Hero from '../components/section/Hero';
import Feature from '../components/section/Feature';
import AboutSec from '../components/section/about';
import Work from '../components/section/Work';
import Service from '../components/section/Service';
import Counter from '../components/section/Counter';
import Price from '../components/section/Price';
import Project from '../components/section/Projects';
import Team from '../components/section/Team';
import Brand from '../components/section/Brand';
import Navbar from '../components/layouts/Navbar';
import Footer from '../components/layouts/Footer';

const Home = () => {
    return (
        <>
            <Helmet pageTitle="Bizidea" />
            <Navbar activeHome="current-menu-parent"/>
            {/* <Preloader/> */}
            <Hero/>
            <Feature/>
            <AboutSec/>
            <Work/>
            <Service/>
            <Counter/>
            <Price/>
            <Project/>
            <Team/>
            <Brand/>
            <Footer/>
        </>
    );
}

export default Home;
