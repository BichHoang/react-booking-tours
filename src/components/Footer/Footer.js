import React, { Component } from 'react';
import styles from './Footer.css';

class Footer extends Component {
    render() {
        return (
            <footer className="footer t-footer">
                <div className="container container-footer">
                    <a className="logo-footer" href="">
                        <img src={process.env.PUBLIC_URL + 'images/logo.png'} alt="logo" />
                    </a>
                    <p className="footer-info s-footer-info">
                        Đến với chúng tôi các bạn sẽ ......
                        <br />
                    </p>
                    <div className="region region-footer">
                        <div id="block-simplenews-1" className="block block-simplenews">
                            <div className="content">
                                <center>
                                    <form className="simplenews-subscribe" action="http://demo.createdbycocoon.com/drupal/nine/nrgtravel/1/" method="post" id="simplenews-block-form-1" acceptCharset="UTF-8">
                                        <div>
                                            <div className="form-item form-type-textfield form-item-mail">
                                                <input type="email" id="" name=""
                                                       placeholder="Nhập email để nhận được nhiều thông tin hơn"/>
                                            </div>
                                            <input type="submit" id="edit-submit" name="op" defaultValue="Subscribe" className="send" />
                                            <input type="hidden" name="form_build_id" defaultValue="form-fLd9oAYT9dxb98vZyVTxCqUFN5RrDsJFgBQA0bLmcm4" />
                                            <input type="hidden" name="form_id" defaultValue="simplenews_block_form_1" />
                                        </div>
                                    </form>
                                </center>
                            </div>
                        </div>
                        <div id="block-views-1403ac1f464ec8efb169bd1cfd0c2b7e" className="block block-views">
                            <div className="content">
                                <div className="ftr-social t-ftr-social">
                                    <a className="social-network" target="_blank" href="http://createdbycocoon.com/themes">
                                        <i className="fa fa-linkedin" />
                                    </a>
                                    <a className="social-network" target="_blank" href="http://createdbycocoon.com/themes">
                                        <i className="fa fa-google-plus" />
                                    </a>
                                    <a className="social-network" target="_blank" href="http://createdbycocoon.com/themes">
                                        <i className="fa fa-twitter" />
                                    </a>
                                    <a className="social-network" target="_blank" href="http://createdbycocoon.com/themes">
                                        <i className="fa fa-facebook" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ftr-nav-container">
                    <div className="container">
                        <nav className="ftr-nav b-ftr-nav clearfix">
                            <div className="region region-main-menu">
                                <div className="region region-main-menu">
                                    <div className="content">
                                        <ul className="ccn-main-menu">
                                            <li className="first leaf"><a href="index.html#home" className="active">Home</a></li>
                                            <li className="leaf"><a href="index.html#about" className="active">About us</a></li>
                                            <li className="leaf"><a href="index.html#hot-tours" className="active">Hot tours</a></li>
                                            <li className="leaf"><a href="index.html#services" className="active">Services</a></li>
                                            <li className="leaf"><a href="index.html#popular-tours" className="active">Popular tours</a></li>
                                            <li className="leaf"><a href="index.html#gallery" className="active">Gallery</a></li>
                                            <li className="leaf"><a href="index.html#hotel-reviews" className="active">Reviews</a></li>
                                            <li className="leaf"><a href="index.html#blog" className="active">Blog</a></li>
                                            <li className="leaf"><a href="index.html#testimonials" className="active">Testimonials</a></li>
                                            <li className="last leaf"><a href="index.html#contact" className="active">Contact</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
