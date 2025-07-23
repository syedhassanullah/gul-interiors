import './Hero.css'
import bgVideo1 from '../../assets/Videos/bg1.mp4'
import bgVideo2 from '../../assets/Videos/bg2.mp4'
import bgVideo3 from '../../assets/Videos/bg3.mp4'
// import bgVideo4 from '../../assets/Videos/bg4.mp4'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'


const Hero = () => {

    const videoData = [
        { video: bgVideo1 },
        { video: bgVideo2 },
        { video: bgVideo3 },
        // { video: bgVideo4 }
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % videoData.length)
        }, 6000);
        return () => clearInterval(interval)
    }, [videoData.length]);

    const { video: currentVideo } = videoData[currentIndex];


    return (
        <>
            <div className='hero'>
                <AnimatePresence>
                    <motion.video
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        exit={{ opacity: 0 }}
                        key={currentIndex}
                        // src={videoData[currentIndex].video}
                        src={currentVideo}
                        // src={bgVideo1}
                        autoPlay muted loop />
                </AnimatePresence>
                <div className='background-content-container'>
                    <div className='hero-contain container'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className="content">
                                    <h1><span>gul</span> ineriors</h1>
                                    <h2>The Art Of Interior and Manufacture</h2>
                                    <button>Get Free Consultation</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero