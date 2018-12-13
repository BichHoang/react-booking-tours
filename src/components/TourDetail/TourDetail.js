import React, { Component } from 'react';
import styles from './TourDetail.css';

class TourDetail extends Component {
    render() {
        return (
            <div>
                <div className="page-title">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="block-title">Pellentesque et lacinia eros, condim entum hendrerit nisl.</h2>
                                <p className="sub-title">
                                    <span className="post-meta">admin  |  March 9 / 2015</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 single-content post">
                                        <div className="region region-content">
                                            <div id="block-system-main" className="block block-system">
                                                <div className="content">
                                                    <article id="node-11" className="" role="article">
                                                        <div className="content-media">
                                                            <div className="">
                                                                <div className="field-items">
                                                                    <div className="field-item even" rel="og:image rdfs:seeAlso" resource="http://demo.createdbycocoon.com/drupal/nine/nrgtravel/1/sites/default/files/styles/large_blog__900x400_/public/popup5.jpg?itok=xzrh_4Wq">
                                                                        <a href="" className="active">
                                                                            <img src="images/tour1.jpg" alt="img" style={{width: '-webkit-fill-available', height: '450px'}} />
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="content-text">
                                                            <div className="field field-name-body field-type-text-with-summary field-label-hidden">
                                                                <div className="field-items">
                                                                    <div className="field-item even" property="content:encoded">
                                                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                                                                        <p />
                                                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                                                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="content clearfix"></div>
                                                        <div className="btnBooking">
                                                            <a onclick="btnBooking();">Booking</a>
                                                        </div>
                                                        <div id="booking" className="section">
                                                            <div className="section-center">
                                                                <div className="container">
                                                                    <div className="row">
                                                                        <div className="booking-form">
                                                                            <div className="form-header">
                                                                                <h1>Book Tour</h1>
                                                                            </div>
                                                                            <form>
                                                                                <div className="row">
                                                                                    <div className="col-sm-6">
                                                                                        <div className="form-group">
                                                                                            <span className="form-label">Name</span>
                                                                                            <input className="form-control" type="text" placeholder="Enter your name" />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-sm-6">
                                                                                        <div className="form-group">
                                                                                            <span className="form-label">Email</span>
                                                                                            <input className="form-control" type="email" placeholder="Enter your email" />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="form-group">
                                                                                    <span className="form-label">Phone</span>
                                                                                    <input className="form-control" type="tel" placeholder="Enter your phone number" />
                                                                                </div>
                                                                                <div className="form-group">
                                                                                    <span className="form-label">Pickup Location</span>
                                                                                    <input className="form-control" type="text" placeholder="Enter ZIP/Location" />
                                                                                </div>
                                                                                <div className="row">
                                                                                    <div className="col-sm-5">
                                                                                        <div className="form-group">
                                                                                            <span className="form-label">Begin Date</span>
                                                                                            <input className="form-control" type="date" required />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="row">
                                                                                    <div className="col-sm-5">
                                                                                        <div className="form-group">
                                                                                            <span className="form-label">End Date</span>
                                                                                            <input className="form-control" type="date" required />
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="form-btn">
                                                                                    <button className="submit-btn">Book Now</button>
                                                                                </div>
                                                                            </form>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="content-comment">
                                                            <section id="comments-section" className="comments comment-wrapper comment-wrapper-nid-11">
                                                                <h3 className="comments-title">Comments (0)</h3>
                                                                <hr />
                                                                <div id="comments" className="comment-wrapper comment-wrapper-nid-11 comments-list">
                                                                    <div className="ajax-comment-wrapper ajax-comment-dummy-comment" style={{display: 'none'}}>
                                                                        <div className="form-item form-type-item"></div>
                                                                    </div>
                                                                </div>
                                                            </section>
                                                        </div>
                                                    </article>
                                                </div>
                                            </div>
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
export default TourDetail;


