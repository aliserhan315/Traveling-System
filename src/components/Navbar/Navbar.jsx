import React, { useState } from 'react';
import './navbar.scss';
import { MdTravelExplore } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
    const [active, setActive] = useState('navBar');
    const showNav = () => {
        setActive('navBar activeNavbar');
    }

    const removeNavbar = () => {
        setActive('navBar');
    }

    return (
        <section className="navBarSection">
            <header className="header flex">
                <div className="logoDiv">
                    <a href="#" className="logo flex">
                        <h1>
                            <MdTravelExplore />travel.
                        </h1>
                    </a>
                </div>
                <div className={active}>
                    <ul className="navLists flex">
                        <li className="navItem">
                            <a href="#home" className="navlink" onClick={removeNavbar}>Home</a>
                        </li>
                        <li className="navItem">
                            <a href="#packages" className="navlink" onClick={removeNavbar}>Packages</a>
                        </li>
                        <li className="navItem">
                            <a href="#shop" className="navlink" onClick={removeNavbar}>Shop</a>
                        </li>
                        <li className="navItem">
                            <a href="#about" className="navlink" onClick={removeNavbar}>About</a>
                        </li>
                        <li className="navItem">
                            <a href="#pages" className="navlink" onClick={removeNavbar}>Pages</a>
                        </li>
                        <li className="navItem">
                            <a href="#news" className="navlink" onClick={removeNavbar}>News</a>
                        </li>
                        <li className="navItem">
                            <a href="#contact-us" className="navlink" onClick={removeNavbar}>Contact Us</a>
                        </li>
                        <button className="btn">
                            <a href="#" >BOOK NOW</a>
                        </button>
                    </ul>
                    <div className="closeNavBar" onClick={removeNavbar}>
                        <IoIosCloseCircle className="icon" />
                    </div>
                </div>
                <div onClick={showNav} className="toggleNavbar">
                    <TbGridDots className="icon" />
                </div>
            </header>
        </section>
    );
}

export default Navbar;
