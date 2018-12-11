import React, { Component } from 'react';
import styles from './Feedback.css';

class Feedback extends Component {
    render() {
        return (
            <div className="content">
                <p className="bg-clor">a</p>
                <section className="t-review-section scroll-to-block">
                    <div className="t-title-block">
                        <img src={process.env.PUBLIC_URL + 'images/feedback.png'} alt="img" />
                        <h2 className="block-title t-about-title">Review from clients</h2>
                        <p className="sub-title t-sub-title">
                            Duis non condimentum nunc. Nunc quis turpis eu est tincidunt rutrum. Cras a purus quis sem tincidunt egestas vel id lacus.
                        </p>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-offset-2 col-md-8">
                                <div className="carousel slide" data-ride="carousel" id="quote-carousel">
                                    {/* Bottom Carousel Indicators */}
                                    <ol className="carousel-indicators">
                                        <li data-target="#quote-carousel" data-slide-to={0} className="active" />
                                        <li data-target="#quote-carousel" data-slide-to={1} />
                                        <li data-target="#quote-carousel" data-slide-to={2} />
                                    </ol>
                                    {/* Carousel Slides / Quotes */}
                                    <div className="carousel-inner">
                                        {/* Quote 1 */}
                                        <div className="item active">
                                            <blockquote>
                                                <div className="row">
                                                    <div className="col-sm-3 text-center">
                                                        <img className="img-circle" src="http://www.reactiongifs.com/r/overbite.gif" style={{width: '100px', height: '100px'}} /> {/*
                                    <img class="img-circle" src="https://s3.amazonaws.com/uifaces/faces/twitter/kolage/128.jpg" style="width: 100px;height:100px;">*/}
                                                    </div>
                                                    <div className="col-sm-9">
                                                        <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit!</p>
                                                        <small>Someone famous</small>
                                                    </div>
                                                </div>
                                            </blockquote>
                                        </div>
                                        {/* Quote 2 */}
                                        <div className="item">
                                            <blockquote>
                                                <div className="row">
                                                    <div className="col-sm-3 text-center">
                                                        <img className="img-circle" src="https://s3.amazonaws.com/uifaces/faces/twitter/mijustin/128.jpg" style={{width: '100px', height: '100px'}} />
                                                    </div>
                                                    <div className="col-sm-9">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam auctor nec lacus ut tempor. Mauris.</p>
                                                        <small>Someone famous</small>
                                                    </div>
                                                </div>
                                            </blockquote>
                                        </div>
                                        {/* Quote 3 */}
                                        <div className="item">
                                            <blockquote>
                                                <div className="row">
                                                    <div className="col-sm-3 text-center">
                                                        <img className="img-circle" src="https://s3.amazonaws.com/uifaces/faces/twitter/keizgoesboom/128.jpg" style={{width: '100px', height: '100px'}} />
                                                    </div>
                                                    <div className="col-sm-9">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut rutrum elit in arcu blandit, eget pretium nisl accumsan. Sed ultricies commodo tortor, eu pretium mauris.</p>
                                                        <small>Someone famous</small>
                                                    </div>
                                                </div>
                                            </blockquote>
                                        </div>
                                    </div>
                                    {/* Carousel Buttons Next/Prev */}
                                    <a data-slide="prev" href="#quote-carousel" className="left carousel-control"><i className="fa fa-chevron-left" /></a>
                                    <a data-slide="next" href="#quote-carousel" className="right carousel-control"><i className="fa fa-chevron-right" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Feedback;
