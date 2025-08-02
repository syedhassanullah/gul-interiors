
import About from '../../components/About/About'
import Hero from '../../components/Hero/Hero'
import { Element } from 'react-scroll'


import './Home.css'
import Contact from '../../components/Contact/Contact'


const Home = () => {
    return(
        <>
        <Hero/>
        <Element name="about">
        <About/>
        </Element>
        <Contact/>
        </>
    )
}

export default Home