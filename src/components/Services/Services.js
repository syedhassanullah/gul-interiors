import React from 'react'
import './Services.css'

function Services() {

    // const [selectedService, setSelectedService] = useState('Ceiling');

    return (
        <div className='service'>
            <div className='heading service-heading' >
                <h1 className='mb-5 mt-5 pt-5'>Our Services</h1>
            </div>
            <div className='row p-0 m-0'>
                <div className='col-md-4 p-0'>
                    <div className='ser-lft-sid '>
                        <ul >
                            <li><button >Ceiling</button></li>
                            <li><button >Walls</button></li>
                            <li><button >Floor</button></li>
                            <li><button >Windows & Doors</button></li>
                            <li><button >Modular Elements</button></li>
                        </ul>
                    </div>
                </div>
                <div className='col-md-8 p-0'>
                    <div className='ser-rit-sid '>
                        <div className='container section-padding'>
                            <div className='row mt-5 pt-3 '>
                                <div className='div1'></div>
                                <div className='div2'></div>
                                <div className='div3'></div>
                                <div className='div4'></div>
                                <div className='div5'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
