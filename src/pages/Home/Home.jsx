
import About from '../../components/About/About'
import Hero from '../../components/Hero/Hero'
import { Element } from 'react-scroll'


import './Home.css'
import Contact from '../../components/Contact/Contact'
import Footer from '../../shared/Footer/Footer'
import Services from '../../components/Services/Services'


const Home = () => {
    return(
        <>
        <Hero/>
        <Element name="about">
        <About/>
        </Element>
        <Services/>
        <Contact/>
        <Footer/>
        </>
    )
}

export default Home