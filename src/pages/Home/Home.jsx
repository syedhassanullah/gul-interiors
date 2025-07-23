
import About from '../../components/About/About'
import Hero from '../../components/Hero/Hero'
import { Element } from 'react-scroll'


import './Home.css'


const Home = () => {
    return(
        <>
        <Hero/>
        <Element name="about">
        <About/>
        </Element>
        </>
    )
}

export default Home