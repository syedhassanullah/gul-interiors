import './About.css'



const About = () => {
    return (
        <div className= "half-bg about  section-padding">
            <div >
                <div className='container about-content'>

                    <div className='heading' >
                        <h1 className='mb-5'>About Us</h1>
                    </div>
                    <div>
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
                                <p className="text-lg text-gray-700">
  At Gul Interiors, we don’t just design walls and ceilings — we shape environments that inspire. With years of experience and a team of skilled professionals, we bring precision, style, and reliability to every project. Whether it’s a modern home or a commercial space, we turn your vision into a refined reality.
</p>

                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='about-image'>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;