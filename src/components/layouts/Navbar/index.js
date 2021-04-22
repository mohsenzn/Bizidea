import React, { Component } from "react";
import { FcMenu } from "react-icons/fc";
import { NavLink } from 'react-router-dom'

class index extends Component {
    state = {

        menutrigger: this.menuTrigger,
        CLoseMenuTrigger: false
    }
    menuTrigger = () => {
        document.querySelector('.main-menu').classList.toggle('nav')
    }

    CLoseMenuTrigger = () => {

        let el = document.querySelector('ul.nav')
        if (el.classList.contains('dis')) {
            el.classList.remove('dis');
            el.classList.add(`fadeInDown`);
            this.setState({ CLoseMenuTrigger: true })
        } else {
            el.classList.add('dis');

            this.setState({ CLoseMenuTrigger: false })
        }
    }
    render() {


        window.addEventListener("scroll", function () {
            var scroll = window.scrollY;
            if (scroll < 100) {
                document
                    .querySelector(".header-main.style--one")
                    .classList.remove(`sticky`);
                document
                    .querySelector(".header-main.style--one")
                    .classList.remove(`fadeInDown`);
                document
                    .querySelector(".header-main.style--one")
                    .classList.remove(`animated`);
            } else {
                document
                    .querySelector(".header-main.style--one")
                    .classList.add(`sticky`);
                document
                    .querySelector(".header-main.style--one")
                    .classList.add(`fadeInDown`);
                document
                    .querySelector(".header-main.style--one")
                    .classList.add(`animated`);
            }
        });
        const { activeHome, activeServ, activeBlo, activeCon, activeAbo, activePro } = this.props;
        return (
            <>
                <header className="header fixed-top ">
                    <nav className="navbar navbar-expand-lg fixed-top header-main style--one py-0 my-0">
                        <div className="container ">
                            <div className="logo">
                                <a href="/">
                                    <img className="default-logo" src="assets/img/logo.png" data-rjs="2" alt="" />
                                    <img className="sticky-logo" src="assets/img/sticky_logo.png" data-rjs="2" alt="" />
                                </a>
                            </div>



                            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                                data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                                aria-label="Toggle navigation" onClick={this.CLoseMenuTrigger}>  <FcMenu /></button>


                            <div className="collapse navbar-collapse main-menu d-flex align-items-center justify-content-end" id="navbarResponsive">
                                <ul className="nav align-items-center d-flex flex-row-reverse dis" >

                                    <li className={`menu-item-has-children ${activeHome}`}><NavLink className="nav-link px-0" to="/">صفحه اصلی</NavLink></li>
                                    <li className={`menu-item-has-children ${activeAbo}`}><NavLink to="/about">شرکت ما</NavLink></li>
                                    <li className={`menu-item-has-children ${activeBlo}`}><NavLink to="/blog">وبلاگ</NavLink></li>
                                    <li className={`menu-item-has-children ${activeServ}`}><NavLink to="/services">سرویس ها</NavLink></li>
                                    <li className={`menu-item-has-children ${activePro}`}><NavLink to="/project"> نمونه کار </NavLink></li>
                                    <li className={`menu-item-has-children ${activeCon}`}><NavLink to="/contact">تماس با ما</NavLink></li>

                                </ul>
                            </div>

                        </div>
                    </nav>
                </header>
            </>
        );
    }
}

export default index;