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
    // const scrollToSection = (id) => {
    //     const section = document.getElementById(id);
    //     if (section) {
    //         section.scrollIntoView({ behavior: "smooth" });
    //         window.location.hash = id; // 👈 URL me #id add ho jayega
    //     }
    // };
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });

            // 👇 URL me #id add kar do
            window.location.hash = id;
        }
        
    };



    return (
        <>
            <nav className={navClass}>
                <div className="nav-container container">
                    <div className="nav-title"><img src={logo} alt="logo" /></div>
                    <div className="nav-item">
                        <ul>
                            <li className="Nav-Link">
                                <Link>Home</Link>
                            </li>
                            <li className="Nav-Link">
                                <Link onClick={() => scrollToSection("about")}   smooth={true} duration={500} offset={-50} >About Us</Link>
                                {/* <button >About</button> */}

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