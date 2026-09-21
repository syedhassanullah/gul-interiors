import './Hero.css'
import bgVideo1 from '../../assets/Videos/bg1.mp4'
import bgVideo2 from '../../assets/Videos/bg2.mp4'
import bgVideo5 from '../../assets/Videos/bg5.mp4'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import logo from '../../assets/images/geewj.png'

const videoData = [
    { video: bgVideo2 },
    { video: bgVideo1 },
    { video: bgVideo5 },
]

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState(1 % videoData.length);
    const [activeIsA, setActiveIsA] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIsA(prev => !prev);

            setTimeout(() => {
                setCurrentIndex(prev => {
                    const newIndex = (prev + 1) % videoData.length;
                    setNextIndex((newIndex + 1) % videoData.length);
                    return newIndex;
                });
            }, 1200); // yeh transition duration ke barabar rakho
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='hero'>
            <div className='video-sec'>
                {/* Video A - hamesha DOM mein rehta hai, sirf opacity animate hoti h */}
                <motion.video
                    className="bg-video"
                    src={videoData[currentIndex].video}
                    autoPlay muted loop playsInline preload="auto"
                    animate={{ opacity: activeIsA ? 1 : 0 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    style={{ zIndex: activeIsA ? 1 : 0 }}
                />

                {/* Video B */}
                <motion.video
                    className="bg-video"
                    src={videoData[nextIndex].video}
                    autoPlay muted loop playsInline preload="auto"
                    animate={{ opacity: !activeIsA ? 1 : 0 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    style={{ zIndex: !activeIsA ? 1 : 0 }}
                />
            </div>

            <div className='hero-content'>
                <div className='row d-flex p-0 m-0'>
                    <div className='col-md-4 col-sm-12 p-0'>
                        <div className="content"></div>
                    </div>
                    <div className='col-md-6'>
                        <div className='hero-image'>
                            <img src={logo} alt='hero' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero