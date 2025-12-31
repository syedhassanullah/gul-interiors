import React from 'react'
import './Services.css'
import { useState } from 'react';
import servicesData from '../../Data/ServicesCardData';
import { AnimatePresence, motion } from 'framer-motion'





function ServiceUpdate() {
    const [selectedService, setSelectedService] = useState("Ceiling");

    const categories = Object.keys(servicesData);


    const cardVariants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: {
            opacity: 1, scale: 1,
            transition: {
                type: "spring",
                stiffness: 120,
                damping: 14
            }
        },
        exit: { opacity: 0, y: 100 },
    };


    return (
        <div className='service'>

            <div className='row p-0 m-0'>

                <div className='col-md-4 p-0'>
                    <div className='ser-lft-sid '>
                        
                            <ul >
                                {categories.map((cat) => (
                                    <li key={cat}>
                                        <button
                                            className={selectedService === cat ? "active" : ""}
                                            onClick={() => setSelectedService(cat)}
                                        >
                                            {cat}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        
                    </div>
                </div>
                <div className='col-md-8 p-0'>

                    <div className='container section-padding'>
                        <div className='row'>
                            <div className='col-md-12 col-sm-12 service-heading heading' >
                                <h1 className=''>Our Services</h1>
                            </div>
                        </div>
                        <div className='ser-rit-sid'>
                            <div className='row mt-5 pt-3 '>
                                <AnimatePresence mode="wait">
                                    {servicesData[selectedService].map((service) => (

                                        <motion.div
                                            key={service.id + selectedService}
                                            variants={cardVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            transition={{ duration: 0.3 }}


                                            className="col-md-6 col-sm-12 mb-4"
                                        >
                                            <div
                                                className="service-card p-3 border rounded shadow">
                                                <h3>{service.title}</h3>
                                                <p>{service.description}</p>
                                            </div>
                                        </motion.div>

                                    ))}
                                </AnimatePresence>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default ServiceUpdate
