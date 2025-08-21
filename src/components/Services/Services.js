import React from 'react'
import './Services.css'
import { useState } from 'react';

function Services() {

    const [selectedService, setSelectedService] = useState('Ceiling');



    const serviceHandler = (he) => {
        setSelectedService(he)
        console.log("asjksfjah=======================")
    }

    return (
        <div className='service'>

            <div className='row p-0 m-0'>
                <div className='col-md-4 p-0'>
                    <div className='ser-lft-sid '>
                        <ul >
                            <li><button onClick={() => serviceHandler('Ceiling')}>Ceiling</button></li>
                            <li><button onClick={() => serviceHandler('Walls')}>Walls</button></li>
                            <li><button onClick={() => serviceHandler('Floor')}>Floor</button></li>
                            <li><button onClick={() => serviceHandler('windowsDoor')}>Windows & Doors</button></li>
                            <li><button onClick={() => serviceHandler('ModularElement')}>Modular Elements</button></li>
                        </ul>
                    </div>
                </div>
                <div className='col-md-8 p-0'>

                    <div className='container section-padding'>
                        <div className='row'>
                            <div className='col-md-6 col-sm-12 service-heading heading' > 
                                <h1 className=''>Our Services</h1>
                            </div>
                        </div>
                        <div className='ser-rit-sid '>
                            <div className='row mt-5 pt-3 '>
                                {selectedService === 'Ceiling' &&
                                    < div className='div1'> Ceiling</div>
                                }
                                {selectedService === 'Walls' &&
                                    < div className='div1'> Walls</div>
                                }
                                {selectedService === 'Floor' &&
                                    < div className='div1'> Floor</div>
                                }
                                {selectedService === 'windowsDoor' &&
                                    < div className='div1'> windowsDoor</div>
                                }
                                {selectedService === 'ModularElement' &&
                                    < div className='div1'>ModularElement </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Services
