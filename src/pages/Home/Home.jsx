
import About from '../../components/About/About'
import Hero from '../../components/Hero/Hero'
import { Element } from 'react-scroll'


import './Home.css'
import Contact from '../../components/Contact/Contact'
import Footer from '../../shared/Footer/Footer'
import ServiceUpdate from '../../components/Services/ServiceUpdate'
import Gellary from '../../components/Gellary/Gellary'
import Process from '../../components/Process/Process'


// import Services from '../../components/Services/Services'



const Home = () => {
    return(
        <>
        <Hero/>
        <Element name="about">
        <About  />
        </Element>
        <Process/>
        <ServiceUpdate/>
        <Gellary/>
        {/* <Services/> */}
        <Contact/>
        <Footer/>
        </>
    )
}

export default Home