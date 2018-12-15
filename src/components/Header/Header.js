import React, { Component } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {userLogout} from './../../actions/index';

class Header extends Component {
    handleLogout = () => {
        this.props.userLogout();
    }
    render() {
        var {currentUser} = this.props;
        
        var thisUser = null;
        var login = <li className="last leaf"><NavLink to="/login" className="nav-link active">Log In</NavLink></li>
        if(currentUser.id !== -1) {
            let id = this.props.currentUser.id;
            let path = '/user/' + id + '/edit'
            thisUser= <li className="leaf">
                            <NavLink to={path} className="nav-link active">
                            {this.props.currentUser.name}
                            </NavLink>
                            </li>
            login = <li onClick={this.handleLogout} className="leaf"><a href="/" className="nav-link active">LOGOUT</a></li>
        }
        console.log(currentUser);
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
                                        <li className="leaf"><a href="/tours" className="nav-link active">Gallery</a></li>
                                        <li className="leaf"><a href="/#contact" className="nav-link active">Contact</a></li>
                                        {thisUser}
                                        {login}
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

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser
    }
}
const mapDispatchToProps = (dispatch) => {
    console.log("LOGOUT");
    return {
        userLogout: () => {
          dispatch(userLogout())
        }
      }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);
