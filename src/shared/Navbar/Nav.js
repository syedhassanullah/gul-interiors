import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import './Nav.css'
import SideNav from "./SideNav";






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

    return (
        <>
            <nav className={navClass}>
                <div className="nav-container container">
                    <div className="nav-title"><span>Gul</span> Interiors</div>
                    <div className="nav-item">
                        <ul>
                            <li className="Nav-Link">
                                <Link>Home</Link>
                            </li>
                            <li className="Nav-Link">
                                <Link>About Us</Link>
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
                    <div className="humburger">Humburger</div>
                    <SideNav/>
                </div>
            </nav>
        </>
    )
}

export default Nav;