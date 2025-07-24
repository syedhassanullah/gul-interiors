import { motion } from "framer-motion";
import { Link } from "react-router-dom";



const SideNav = ({ sideBarButton }) => {

    console.log(sideBarButton, "------------------------------------------")
    return (
        <motion.div
            initial={{ y: '-100%', opacity: 0 }}
            animate={{ y: sideBarButton ? '0%' : '-100%', opacity: sideBarButton ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="SideNav"
        >
            <div className="side-content container">
                <div className="side-navbar-item">
                    <ul>
                        <li>
                            <Link>Home </Link>
                        </li>
                        <li>
                            <Link>About</Link>
                        </li>
                        <li>
                            <Link>Service</Link>
                        </li>
                        <li>
                            <Link>Projects</Link>
                        </li>
                        <li>
                            <Link></Link>
                        </li>
                        <li>
                            <Link></Link>
                        </li>
                    </ul>
                </div>
            </div>

        </motion.div>
    )
}

export default SideNav;