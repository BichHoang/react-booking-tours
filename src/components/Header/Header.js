import React, { Component } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

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
                <header className="bg-black fixed-top">
                    <div className="container clearfix nopadding">
                        <div id="logo">
                            <a href="/">
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
                                        <li className="first leaf"><NavLink to="/" className="nav-link active">Home</NavLink></li>
                                        <li className="leaf"><a href="/#about" className="nav-link active">About us</a></li>
                                        <li className="leaf"><a href="/#hot-tours" className="nav-link active">Hot tours</a></li>
                                        <li className="leaf"><a href="/#gallery" className="nav-link active">Gallery</a></li>
                                        <li className="leaf"><a href="/#contact" className="nav-link active">Contact</a></li>
                                        <li className="last leaf"><NavLink to="/login" className="nav-link active">Login</NavLink></li>
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
