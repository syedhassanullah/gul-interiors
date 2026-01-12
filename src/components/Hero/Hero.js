import './Hero.css'
import bgVideo1 from '../../assets/Videos/bg1.mp4'
import bgVideo2 from '../../assets/Videos/bg2.mp4'
// import bgVideo3 from '../../assets/Videos/bg3.mp4'
// import bgVideo4 from '../../assets/Videos/bg4.mp4'
import bgVideo5 from '../../assets/Videos/bg5.mp4'
// import bgVideo4 from '../../assets/Videos/bg4.mp4'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import logo from '../../assets/images/geewj.png'


const Hero = () => {

    const videoData = [
        { video: bgVideo1 },
        { video: bgVideo2 },
        // { video: bgVideo3 },
        // { video: bgVideo4 },
        { video: bgVideo5 },
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
                        transition={{ duration: 1 }}ss
                        exit={{ opacity: 0 }}
                        key={currentIndex}
                        // src={videoData[currentIndex].video}
                        src={currentVideo}
                        // src={bgVideo1}
                        autoPlay muted loop
                        />
                </AnimatePresence>
                {/* <video src={bgVideo1}  autoPlay muted loop/> */}
                <div className='background-content-container'>
                    <div className='hero-content'>
                        <div className='row d-flex p-0 m-0'>
                            <div className='col-md-6 col-sm-12 p-0'>
                                <div className="content">
                                    <div>
                                        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                                            Transform Your Space with Timeless Elegance
                                        </h1>
                                        <p className="mt-4 text-lg md:text-xl text-gray-200 pb-5">
                                            Creotrix Interiors turns your vision into reality with stunning, functional designs.
                                        </p>
                                        {/* <div className='pt-5'></div> */}
                                        <button>Get Free Consultation</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='hero-image'><img src={logo} alt='hero' /> <div></div></div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero

