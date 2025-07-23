import { motion } from "framer-motion";



const SideNav = ({sideBarButton}) => {

    console.log(sideBarButton,"------------------------------------------")
    return(
        <motion.div 
        initial={{ y: '-100%',opacity: 0}}
        animate={{ y : sideBarButton ? '0%' : '-100%',opacity: sideBarButton ? 1 : 0}}
        transition={{  duration: 0.3 }}
        className="SideNav"
        >
            <div className="side-content"></div>

        </motion.div>
    )
}

export default SideNav;