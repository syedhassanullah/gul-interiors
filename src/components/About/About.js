import './About.css'
import aboutImage from '../../assets/images/about.webp'
import aboutImage1 from '../../assets/images/about1.webp'
import aboutImage2 from '../../assets/images/about2.webp'
import aboutImage3 from '../../assets/images/about3.webp'
import aboutImage4 from '../../assets/images/about4.webp'
import aboutImage5 from '../../assets/images/about5.webp'
import aboutImage6 from '../../assets/images/about6.webp'
import aboutImage7 from '../../assets/images/about7.webp'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'




const About = () => {

    const aboutimages = [
        { image: aboutImage },
        { image: aboutImage1 },
        { image: aboutImage2 },
        { image: aboutImage3 },
        { image: aboutImage4 },
        { image: aboutImage5 },
        { image: aboutImage6 },
        { image: aboutImage7 }
    ]


    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % aboutimages.length)
        }, 4000);
        return () => clearInterval(interval)
    }, [aboutimages.length]);

    const { image: currentImage } = aboutimages[currentIndex];


    return (
        <div className="half-bg about  section-padding">
            <div >
                <div className='container about-content'>

                    <div className='heading' >
                        <h1 className='mb-5'>About Us</h1>
                    </div>
                    <div class="row d-flex align-items-center" >
                        <div className='col-md-6'>
                            <div className='about-text '>
                                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                                    Who We Are
                                </h2>

                                <p className="text-lg text-gray-700 mb-4">
                                    Gul Interiors is a leading name in modern wall and ceiling design, delivering high-quality interior finishes for residential, commercial, and industrial spaces. From stylish false ceilings to decorative wall panels, we turn ordinary structures into beautifully crafted environments.
                                </p>

                                {/* <p className="text-lg text-gray-700 mb-4">
                                    Headquartered in Pakistan and trusted by clients locally and internationally, we pride ourselves on a blend of design creativity, technical precision, and flawless execution. Every project is a reflection of our commitment to quality, detail, and client satisfaction.
                                </p>

                                <p className="text-lg text-gray-700">
                                    Our team includes skilled designers, experienced project managers, and passionate artisans — all working together to bring your vision to life on time, on budget, and with outstanding results.
                                </p>  */}
                                <p className="text-lg text-gray-700 mb-4">
                                    At Gul Interiors, we don’t just design walls and ceilings — we shape environments that inspire. With years of experience and a team of skilled professionals, we bring precision, style, and reliability to every project. Whether it’s a modern home or a commercial space, we turn your vision into a refined reality.
                                </p>

                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='about-image'>
                                <AnimatePresence>
                                    <motion.img
                                        key={currentIndex}
                                        src={currentImage}
                                        alt='about-image'
                                        initial={{ opacity: 0, x:100 }}
                                        animate={{ opacity: 1, x:0 }}
                                        exit={{ opacity: 0, x:100 }}
                                        transition={{
                                            duration: 1,
                                            exit: {
                                                delay: 0.5,  
                                                duration: 1,
                                            }
                                        }}
                                    />
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;