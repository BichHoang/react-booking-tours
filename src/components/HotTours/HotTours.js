import React, { Component } from 'react';
import styles from './HotTours.css';
import { Link }  from 'react-router-dom';

class HotTours extends Component {
    render() {
        return (
           <section id="hot-tours">
               <div className="marginT-50">
                   <div className="t-title-block">
                       <img src={process.env.PUBLIC_URL + 'images/hottours.png'} alt="img" />
                       <h2 className="block-title t-about-title">hot tours</h2>
                       <p className="sub-title t-sub-title">
                           Các Tours được nhiều người yêu thích mùa này
                       </p>
                   </div>
                   <div className="container img-crop">
                       <div className="row">
                           <div className="col-lg-12">
                               <div className="floatRight">
                                   <a className="left fa fa-chevron-left btn btn-primary" href="#carousel-example-generic" data-slide="prev" />
                                   <a className="right fa fa-chevron-right btn btn-primary" href="#carousel-example-generic" data-slide="next" />
                               </div>
                           </div>
                       </div>
                       <div className="row">
                           <div className="col-lg-12">
                               <div id="carousel-example-generic" className="carousel slide hidden-xs" data-ride="carousel">
                                   <div className="carousel-inner">
                                       <div className="item active">
                                           <div className="row">
                                               <div className="col-sm-4">
                                                   <div className="col-item">
                                                       <div className="photo">
                                                           <img src={process.env.PUBLIC_URL + 'images/hot1.jpg'} className="img-responsive" alt="a" />
                                                       </div>
                                                       <div className="info">
                                                           <div className="row">
                                                               <div className="price col-md-6">
                                                                   <h5>Tour Name</h5>
                                                                   <h5 className="price-text-color">
                                                                       $199.99</h5>
                                                               </div>
                                                               <div className="rating hidden-sm col-md-6">
                                                                   <i className="price-text-color fa fa-star" /><i className="price-text-color fa fa-star">
                                                               </i><i className="price-text-color fa fa-star" /><i className="price-text-color fa fa-star">
                                                               </i><i className="fa fa-star" />
                                                               </div>
                                                           </div>
                                                           <div className="separator clear-left">
                                                               <p className="btn-add">
                                                                   <i className="fa fa-shopping-cart" /><a href="" className="hidden-sm">Order Tour</a></p>
                                                               <p className="btn-details">
                                                                   <i className="fa fa-list" /><Link to="/details">More</Link></p>
                                                           </div>
                                                           <div className="clearfix">
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="col-sm-4">
                                                   <div className="col-item">
                                                       <div className="photo">
                                                           <img src={process.env.PUBLIC_URL + 'images/hot2.jpg'} className="img-responsive" alt="a" />
                                                       </div>
                                                       <div className="info">
                                                           <div className="row">
                                                               <div className="price col-md-6">
                                                                   <h5>Tour Name</h5>
                                                                   <h5 className="price-text-color">
                                                                       $199.99</h5>
                                                               </div>
                                                               <div className="rating hidden-sm col-md-6">
                                                                   <i className="price-text-color fa fa-star" /><i className="price-text-color fa fa-star">
                                                               </i><i className="price-text-color fa fa-star" /><i className="price-text-color fa fa-star">
                                                               </i><i className="fa fa-star" />
                                                               </div>
                                                           </div>
                                                           <div className="separator clear-left">
                                                               <p className="btn-add">
                                                                    <i className="fa fa-shopping-cart" /><a href="" className="hidden-sm">Order Tour</a></p>
                                                               <p className="btn-details">
                                                                    <i className="fa fa-list" /><Link to="/details">More</Link></p>
                                                           </div>
                                                           <div className="clearfix">
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="col-sm-4">
                                                   <div className="col-item">
                                                       <div className="photo">
                                                           <img src={process.env.PUBLIC_URL + 'images/hot4.jpg'} className="img-responsive" alt="a" />
                                                       </div>
                                                       <div className="info">
                                                           <div className="row">
                                                               <div className="price col-md-6">
                                                                   <h5>Tour Name</h5>
                                                                   <h5 className="price-text-color">
                                                                       $199.99</h5>
                                                               </div>
                                                               <div className="rating hidden-sm col-md-6">
                                                                   <i className="price-text-color fa fa-star" /><i className="price-text-color fa fa-star">
                                                               </i><i className="price-text-color fa fa-star" /><i className="price-text-color fa fa-star">
                                                               </i><i className="fa fa-star" />
                                                               </div>
                                                           </div>
                                                           <div className="separator clear-left">
                                                               <p className="btn-add">
                                                                    <i className="fa fa-shopping-cart" /><a href="" className="hidden-sm">Order Tour</a></p>
                                                               <p className="btn-details">
                                                                    <i className="fa fa-list" /><Link to="/details">More</Link></p>
                                                           </div>
                                                           <div className="clearfix">
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                       <div className="item">
                                           <div className="row">
                                               <div className="col-sm-4">
                                                   <div className="col-item">
                                                       <div className="photo">
                                                           <img src={process.env.PUBLIC_URL + 'images/hot4.jpg'} className="img-responsive" alt="a" />
                                                       </div>
                                                       <div className="info">
                                                           <div className="row">
                                                               <div className="price col-md-6">
                                                                   <h5>
                                                                       Product with Variants</h5>
                                                                   <h5 className="price-text-color">
                                                                       $199.99</h5>
                                                               </div>
                                                               <div className="rating hidden-sm col-md-6">
                                                                   <i className="price-text-color fa fa-star" /><i className="price-text-color fa fa-star">
                                                               </i><i className="price-text-color fa fa-star" /><i className="price-text-color fa fa-star">
                                                               </i><i className="fa fa-star" />
                                                               </div>
                                                           </div>
                                                           <div className="separator clear-left">
                                                               <p className="btn-add">
                                                                   <i className="fa fa-shopping-cart" /><a href="http://www.jquery2dotnet.com" className="hidden-sm">Add to cart</a></p>
                                                               <p className="btn-details">
                                                                   <i className="fa fa-list" /><a href="http://www.jquery2dotnet.com" className="hidden-sm">More details</a></p>
                                                           </div>
                                                           <div className="clearfix">
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="col-sm-4">
                                                   <div className="col-item">
                                                       <div className="photo">
                                                           <img src={process.env.PUBLIC_URL + 'images/hot4.jpg'} className="img-responsive" alt="a" />
                                                       </div>
                                                       <div className="info">
                                                           <div className="row">
                                                               <div className="price col-md-6">
                                                                   <h5>
                                                                       Product with Variants</h5>
                                                                   <h5 className="price-text-color">
                                                                       $199.99</h5>
                                                               </div>
                                                               <div className="rating hidden-sm col-md-6">
                                                                   <i className="price-text-color fa fa-star" /><i className="price-text-color fa fa-star">
                                                               </i><i className="price-text-color fa fa-star" /><i className="price-text-color fa fa-star">
                                                               </i><i className="fa fa-star" />
                                                               </div>
                                                           </div>
                                                           <div className="separator clear-left">
                                                               <p className="btn-add">
                                                                   <i className="fa fa-shopping-cart" /><a href="http://www.jquery2dotnet.com" className="hidden-sm">Add to cart</a></p>
                                                               <p className="btn-details">
                                                                   <i className="fa fa-list" /><a href="http://www.jquery2dotnet.com" className="hidden-sm">More details</a></p>
                                                           </div>
                                                           <div className="clearfix">
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="col-sm-4">
                                                   <div className="col-item">
                                                       <div className="photo">
                                                           <img src={process.env.PUBLIC_URL + 'images/hot4.jpg'} className="img-responsive" alt="a" />
                                                       </div>
                                                       <div className="info">
                                                           <div className="row">
                                                               <div className="price col-md-6">
                                                                   <h5>
                                                                       Product with Variants</h5>
                                                                   <h5 className="price-text-color">
                                                                       $199.99</h5>
                                                               </div>
                                                               <div className="rating hidden-sm col-md-6">
                                                                   <i className="price-text-color fa fa-star" /><i className="price-text-color fa fa-star">
                                                               </i><i className="price-text-color fa fa-star" /><i className="price-text-color fa fa-star">
                                                               </i><i className="fa fa-star" />
                                                               </div>
                                                           </div>
                                                           <div className="separator clear-left">
                                                               <p className="btn-add">
                                                                   <i className="fa fa-shopping-cart" /><a href="http://www.jquery2dotnet.com" className="hidden-sm">Add to cart</a></p>
                                                               <p className="btn-details">
                                                                   <i className="fa fa-list" /><a href="http://www.jquery2dotnet.com" className="hidden-sm">More details</a></p>
                                                           </div>
                                                           <div className="clearfix">
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
                   </div>
               </div>
           </section>
        );
    }
}

export default HotTours;
