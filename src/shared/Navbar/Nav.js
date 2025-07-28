import { useState, useEffect } from "react"
// import { Link } from "react-router-dom"
import { Link } from "react-scroll";
import './Nav.css'
import SideNav from "./SideNav";
import { Slant as Hamburger } from 'hamburger-react'
// import logo from '../../assets/images/GULLOGO WHOTE.png'
import logo from '../../assets/images/geewj.png'






const Nav = () => {
    const [navClass, setNavClass] = useState('navigation inactive-Nav');

    useEffect(() => {
        const changeBackNav = () => {
            if (window.scrollY > 80) {
                setNavClass('navigation active-Nav');
            } else {
                setNavClass('navigation inactive-Nav');
            }
        };

        window.addEventListener('scroll', changeBackNav);
        return () => window.removeEventListener('scroll', changeBackNav);
    }, []);

    // Toggle Work

    const [sideBar, setSideBar] = useState(false)

    const open = () => {
        setSideBar(true)
    }

    const close = () => {
        setSideBar(false)
    }

    const HandelTogel = (toggled) => {
        if (toggled) {
            open();
        } else {
            close();
        }
    }



    return (
        <>
            <nav className={navClass}>
                <div className="nav-container container">
                    <div className="nav-title"><img src={logo} alt="logo"/></div>
                    <div className="nav-item">
                        <ul>
                            <li className="Nav-Link">
                                <Link>Home</Link>
                            </li>
                            <li className="Nav-Link">
                                <Link to="about" smooth={true} duration={500} offset={-50} >About Us</Link>
                            </li>
                            <li className="Nav-Link">
                                <Link>Services</Link>
                            </li>
                            <li className="Nav-Link">
                                <Link>Projects</Link>
                            </li>
                            <li className="Nav-Link">
                                <Link to={'/'}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="humburger">
                        <Hamburger
                            toggled={sideBar}
                            toggle={setSideBar}
                            onToggle={HandelTogel}
                            type='primary'
                            size={22} />
                    </div>
                    <SideNav sideBarButton={sideBar} />
                </div>
            </nav>
        </>
    )
}

export default Nav;