import './Hero.css'
import bgVideo1 from '../../assets/Videos/bg1.mp4'
import bgVideo2 from '../../assets/Videos/bg2.mp4'
import bgVideo5 from '../../assets/Videos/bg5.mp4'
import bgVideo6 from '../../assets/Videos/bg6.mp4'
import bgVideo7 from '../../assets/Videos/bg7.mp4'
import bgVideo8 from '../../assets/Videos/bg8.mp4'
import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import logo from '../../assets/images/geewj.png'
import { useEffect } from 'react'
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";



const VIDEOS = [bgVideo2, bgVideo5, bgVideo8, bgVideo7, bgVideo1]

const SLIDE_DURATION = 6000;
const Hero = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const videoRefs = useRef([]);

    // Auto-advance
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % VIDEOS.length);
        }, SLIDE_DURATION);
        return () => clearInterval(timer);
    }, []);

    // Whenever activeIndex changes: reset + play current, pause others
    useEffect(() => {
        videoRefs.current.forEach((vid, i) => {
            if (!vid) return;
            if (i === activeIndex) {
                vid.currentTime = 0;
                const playPromise = vid.play();
                if (playPromise !== undefined) {
                    playPromise.catch((err) => {
                        // Interrupted play request — safe to ignore, or retry
                        console.warn("Play interrupted:", err.message);
                    });
                }
            } else {
                vid.pause();
            }
        });
    }, [activeIndex]);

    return (
        <section className='hero half-sec '>
            <div className='videoLayer'>
                {VIDEOS.map((src, i) => (
                    <video
                        key={src}
                        ref={(el) => (videoRefs.current[i] = el)}
                        src={src}
                        muted
                        playsInline
                        // note: no autoPlay/loop here anymore — handled manually
                        className='video'
                        style={{

                            opacity: i === activeIndex ? 1 : 0,
                        }}
                    />
                ))}
                <div className='overlay' />
            </div>
            <div className='Social-media'>
                
                <div className='icon'>
                    <FaInstagram />
                </div>
                <div className='icon'>
                    <FaFacebookF />
                </div>
                <div className='icon'>
                    <FaWhatsapp/>
                </div>
                

                
            </div>
            {/* Foreground content */}

            <div className='container'>
                <div className=' content'>
                    <h1 className='heading'>Transform Your House Into a Luxury Home</h1>
                    <p className='subheading'>
                        {/* Wallpaper, Wall Panels & False Ceiling — Complete Interior Solutions Under One Roof */}
                        Interior design, flooring, blinds, wallpapers, ceilings, wall panels, and custom finishes in Karachi.
                    </p>
                    <div className='actions'>
                        <button className='primaryBtn'>Get a Free Quote</button>
                        <button className='secondaryBtn'>View Our Work</button>
                    </div>
                </div>
            </div>

            {/* Slide indicators */}
            <div className='dots'>
                {VIDEOS.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setActiveIndex(i)}
                        aria-label={`Show video ${i + 1}`}
                        className='dot'
                        style={{

                            backgroundColor:
                                i === activeIndex ? "#ffffff" : "rgba(255,255,255,0.35)",
                        }}
                    />
                ))}
            </div>
        </section>
    );
}
export default Hero
