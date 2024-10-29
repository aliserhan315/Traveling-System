import React, {useState} from 'react'
import './navbar.scss';
import { MdTravelExplore } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";



const Navbar = ()=>{
    const [active, setActive] = useState('navBar') ;
    const showNav = ()=> {
        setActive('navBar activeNavbar');
    }

    // function to remove navBar
    const removeNavbar = ()=> {
        setActive('navBar');
    }
  
    return(
       
        <section
        className="navBarSection">
             
            <header className="header flex">
                <div className="logoDiv">
                    <a href="#" className="logo flex">
                        <h1>
                        <MdTravelExplore />travel.</h1>

                    </a>
                </div>
                <div className={active}>
                    <ul className="navLists flex">
                        <li className="navItem">
                            <a href="" className="navlink">home</a>
                        </li>
                        <li className="navItem">
                            <a href="" className="navlink">Packages</a>
                        </li>
                        <li className="navItem">
                            <a href="" className="navlink">Shop</a>
                        </li>
                        <li className="navItem">
                            <a href="" className="navlink">About</a>
                        </li>
                        <li className="navItem">
                            <a href="" className="navlink">Pages</a>
                        </li>
                        <li className="navItem">
                            <a href="" className="navlink">News</a>
                        </li>
                        <li className="navItem">
                            <a href="" className="navlink">Contacts</a>
                        </li>
                    <button className="btn">
                        <a href="#" >BOOK NOW</a>
                    </button>
                    </ul>
                    <div className="closeNavBar" onClick={removeNavbar}>
                    <IoIosCloseCircle className="icon"/>
                    </div>
                </div>
                <div onClick={showNav} className="toggleNavbar">
                <TbGridDots  className="icon"/>
                </div>

            </header>

        </section>
    )
    
}

export default Navbar;