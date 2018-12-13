import React, { Component } from 'react';

class Introduce extends Component {
    render() {
        return (
            <div id="about">
                <section className="t-about scroll-to-block">
                    <div className="container clearfix">
                        <div className="t-about-img-box">
                            <img className="t-about-img" alt="img" src={process.env.PUBLIC_URL + 'images/introduce.png'} />
                        </div>
                        <div className="t-about-info-box">
                            <div className="t-about-info">
                                <h2 className="block-title t-about-title">GIỚI THIỆU</h2>
                                <p className="sub-title t-sub-title">
                                    Nội dung ....</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Introduce;
