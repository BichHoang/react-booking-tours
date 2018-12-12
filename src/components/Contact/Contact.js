import React, { Component } from 'react';
import styles from './Contact.css';

class Contact extends Component {
    render() {
        return (
            <div className="contact t-contact scroll-to-block">
                <div className="container">
                    <div className="region region-onepage-contact-header">
                        <div id="block-block-35" className="t-title-block block block-block">
                            <img src={process.env.PUBLIC_URL + 'images/findus.png'} alt="img" />
                            <h2 className="block-title t-about-title">How to find us</h2>
                            <div className="sub-title t-sub-title">
                                <p>Duis non condimentum nunc. Nunc quis turpis eu est tincidunt rutrum. Cras a purus quis sem tincidunt egestas vel id lacus.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.8065412332803!2d108.15146261400956!3d16.075525788877083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314218d68dff9545%3A0x714561e9f3a7292c!2sDanang+University+of+Technology!5e0!3m2!1svi!2s!4v1516807397758" width="100%" height={450} frameBorder={0} style={{border: 0}} allowFullScreen />
                <div className="addresses-block">
                    <a data-lat="43.653226" data-lng="-79.383184" data-string="1. Here is some address or email or phone or something else..." />
                </div>
                <div className="container contact-us t-contact-us">
                    <div className="row">
                        <div className="col-md-4 contact-info">
                            <div className="region region-onepage-contact-details">
                                <div id="block-block-34" className="block block-block">
                                    <div className="content">
                                        <h5>Address</h5>
                                        <p>54 Nguyễn Lương Bằng</p>
                                        <h5>Call Us</h5>
                                        <a className="phone" href="tel:+485558960568188">+48 555 896 0568 188</a>
                                        <h5>Email</h5>
                                        <p><a className="mail-us" href="mailto:hoangbich@gmail.com">hoangbich@gmail.com</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="region region-onepage-contact">
                                <div id="block-webform-client-block-32" className="block block-webform">
                                    <div className="content contactbg">
                                        <div className="contact">
                                            <form>
                                                <input type="text" id="fname" name="name"
                                                       placeholder="Your name.."/>
                                                <input type="email" id="" name=""
                                                       placeholder="Your email.."/>
                                                <input type="text" id="" name=""
                                                       placeholder="Subject.."/>
                                                <input type="phone" id="" name=""
                                                       placeholder="Your phone.."/>
                                                <textarea id="subject" name="subject" placeholder="Write something.."
                                                          style={{height: '150px'}} defaultValue={""}/>
                                                <center>
                                                    <input type="submit" defaultValue="Submit"/>
                                                </center>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;