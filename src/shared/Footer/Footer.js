import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import './Footer.css'



const Footer = () => {
    return (
        <div className="footer pt-5 ">
            <div>
                <div className='container '>
                    <div className='row pb-5 pt-5'>
                        <div className='col-md-4 aah f-gul-text'>
                            <h2 className='pb-4'>Gul Interiors</h2>
                            <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London.</p>
                        </div>
                        <div className='col-md-8'>
                            <div className='ftr-link-sec'>
                                <div className='row'>
                                    <div className='col-md-3 aah '>
                                        <h4>Office</h4>
                                        <p>ahsfakfka f</p>
                                    </div>
                                    <div className='col-md-4 aah '>QUICK LINKS</div>
                                    <div className='col-md-5 aah'>QUICK LINKS</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='footer-icon'>

                            <div className='icon'>
                                <FaInstagram />
                            </div>
                            <div className='icon'>
                                <FaFacebookF />
                            </div>
                            <div className='icon'>
                                <FaWhatsapp />
                            </div>
                            <div className='icon'>
                                <FaLinkedin />
                            </div>
                            <div className='icon'>
                                <FaTwitter />
                            </div>
                            <div className='icon'>
                                <FaWhatsapp />
                            </div>
                        </div>
                    </div>

                    <div className='row copy-right'>
                        all right resiverd by ""
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;