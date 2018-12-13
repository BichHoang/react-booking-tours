import React, { Component } from 'react';
import styles from './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="bg-black">
                <div id="loader-wrapper">
                    <div className="loader-content">
                        <div className="cube1 t-cube" />
                        <div className="cube2 t-cube" />
                    </div>
                </div>
                <header className="bg-black">
                    <div className="container clearfix nopadding">
                        <div id="logo">
                            <a href="">
                                <img src="images/logo.png" alt="img" />
                            </a>
                        </div>
                        <div className="menu-button r-menu-button">
                            <span />
                            <span />
                            <span />
                        </div>
                        <nav className="nav r-nav  clearfix">
                            <div className="region region-main-menu">
                                <div className="content">
                                    <ul className="ccn-main-menu">
                                        <li className="first leaf"><a href="/home/index.html#home" className="nav-link active">Home</a></li>
                                        <li className="leaf"><a href="/home/index.html#about" className="nav-link active">About us</a></li>
                                        <li className="leaf"><a href="/home/index.html#hot-tours" className="nav-link active">Hot tours</a></li>
                                        <li className="leaf"><a href="/home/index.html#gallery" className="nav-link active">Gallery</a></li>
                                        <li className="leaf"><a href="/home/index.html#blog" className="nav-link active">Blog</a></li>
                                        <li className="leaf"><a href="/home/index.html#testimonials" className="nav-link active">Testimonials</a></li>
                                        <li className="last leaf"><a href="/home/index.html#contact" className="nav-link active">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>
            </div>

        );
    }
}
export default Header;
