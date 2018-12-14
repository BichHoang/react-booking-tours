import React , { Component } from 'react';
import './Login.css'

class Login extends Component{
    render() {
        return (
            <div>
                <section className="login-block">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 login-sec">
                                <h2 className="text-center">Login Now</h2>
                                <form className="login-form">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1" className="text-uppercase">Username</label>
                                        <input type="text" className="form-control" placeholder />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1" className="text-uppercase">Password</label>
                                        <input type="password" className="form-control" placeholder />
                                    </div>
                                    <div className="form-group form-check">
                                        <label className="form-check-label">
                                            <input type="checkbox" className="form-check-input" />
                                            <small>Remember Me</small>
                                        </label>
                                        <p className="float-right"><small>Forgot Password</small></p>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-login" style={{width: '-webkit-fill-available'}} >Login</button>
                                    </div>
                                </form>
                                <div className="copy-text">Back to home <a href="http://grafreez.com">DNT.com</a></div>
                            </div>
                            <div className="col-md-8 banner-sec">
                                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                    <ol className="carousel-indicators">
                                        <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                                        <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                                        <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                                    </ol>
                                    <div className="carousel-inner" role="listbox">
                                        <div className="carousel-item active">
                                            <img className="d-block img-fluid"
                                                 src="https://d3hne3c382ip58.cloudfront.net/resized/750x420/ba-na-hills-full-day-tour-in-da-nang-tour-2-36472_1510029029.JPEG"
                                                 alt="First slide" style={{width: '-webkit-fill-available', height: '-webkit-fill-available'}} />
                                            <div className="carousel-caption d-none d-md-block">
                                                <div className="banner-text">
                                                    <h2>This is Heaven</h2>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block img-fluid"
                                                 src="https://d1nabgopwop1kh.cloudfront.net/hotel-asset/10000002004589331_wh_2"
                                                 alt="First slide" style={{width: '-webkit-fill-available', height: '-webkit-fill-available'}} />
                                            <div className="carousel-caption d-none d-md-block">
                                                <div className="banner-text">
                                                    <h2>This is Heaven</h2>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block img-fluid"
                                                 src="http://www.mercure-danang-banahills-french-village.com/wp-content/uploads/sites/50/2017/03/7502221.jpg"
                                                 alt="First slide" style={{width: '-webkit-fill-available', height: '-webkit-fill-available'}} />
                                            <div className="carousel-caption d-none d-md-block">
                                                <div className="banner-text">
                                                    <h2>This is Heaven</h2>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default Login;