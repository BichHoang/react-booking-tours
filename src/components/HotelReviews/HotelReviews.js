import React, { Component } from 'react';

class HotelReviews extends Component {
    render() {
        return (
            <div className="region region-onepage-hotel-reviews">
                <section className="hotel-section scroll-to-block">
                    <div className="container">
                        <div className="t-title-block">
                            <img src={process.env.PUBLIC_URL + 'images/hotelreview.png'} alt="img" />
                            <h2 className="block-title t-about-title">hotel reviews</h2>
                            <p className="sub-title t-sub-title">
                                Duis non condimentum nunc. Nunc quis turpis eu est tincidunt rutrum. Cras a purus quis sem tincidunt egestas vel id lacus.
                            </p>
                        </div>
                    </div>
                    <div className="tab-wrapper">
                        <div className="tab-nav-wrapper container">
                            <div className="nav-tab nav-tab-serv nav-doctor clearfix">
                                <div className="nav-tab-item nav-item-serv">
                                    Europe </div>
                                <div className="nav-tab-item nav-item-serv">
                                    Australia </div>
                                <div className="nav-tab-item nav-item-serv">
                                    Asia </div>
                                <div className="nav-tab-item nav-item-serv">
                                    Africa </div>
                                <div className="nav-tab-item nav-item-serv">
                                    North America </div>
                                <div className="nav-tab-item nav-item-serv">
                                    South America </div>
                            </div>
                        </div>
                        <div className="tabs-content clearfix">
                            <div className="tab-info">
                                <div className="team-container">
                                    <div className="team-info">
                                        <div className="team-member-container active clearfix">
                                            <div className="hotel-block clearfix">
                                                <div className="hotel-slider">
                                                    <div className="swiper-container" data-slides-per-view={1} data-loop={1} data-mode="vertical">
                                                        <div className="swiper-wrapper">
                                                            <div className="item-list">
                                                                <ul>
                                                                    <li className="first"><img typeof="foaf:Image" src={process.env.PUBLIC_URL + 'images/hotel1.jpg'} width={685} height={800} alt="img" /></li>
                                                                    <li><img typeof="foaf:Image" src={process.env.PUBLIC_URL + 'images/hotel1.jpg'} width={1000} height={865} alt="img" /></li>
                                                                    <li><img typeof="foaf:Image" src={process.env.PUBLIC_URL + 'images/hotel2.jpg'} width={1024} height={768} alt="img" /></li>
                                                                    <li className="last"><img typeof="foaf:Image" src={process.env.PUBLIC_URL + 'images/hotel3.jpg'} width={1000} height={865} alt="img" /></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="pagination vertical-pagination" />
                                                    </div>
                                                </div>
                                                <div className="hotel-info">
                                                    <div className="hotel-info-container">
                                                        <div><i className="t-star" /> <i className="t-star" /> <i className="t-star" /> <i className="t-star" /> <i className="t-star" /></div>
                                                        <h3>Conrad Rangali Island Maldives Hotel</h3>
                                                        <p>Nullam bibendum odio a sem bibendum, ut vestibulum ipsum porttitor. Sed finibus nec orci et cursus. Vestibulum facilisis rhoncus tempor. Duis non ipsum volutpat, rhoncus nisi sed, pulvinar ex augue.</p>
                                                        <div className="field-features-sw-hotel-info-list">
                                                            <div className="item-list">
                                                                <ul>
                                                                    <li className="first"><span>Free</span> wifi</li>
                                                                    <li><span>128</span> rooms</li>
                                                                    <li><span>79</span> exotic beach villas</li>
                                                                    <li><span>50</span> luxurious water spas</li>
                                                                    <li className="last"><span>21</span> fabulous spa water villas</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="t-testimonials-slider">
                                                            <div className="swiper-container" data-mode="horizontal" data-slides-per-view={1} data-loop={1}>
                                                                <div className="swiper-wrapper">
                                                                    <div className="swiper-slide">
                                                                        <h4>MELANI GRIFFITH</h4>
                                                                        <p>Duis non condimentum nunc. Nunc quis turpis eu est tincidunt rutrum. Cras a purus quis sem tincidunt egestas vel id lacus. Nunc sed volutpat erat.</p>
                                                                    </div>
                                                                </div>
                                                                <div className="pagination pagination-hide" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-info">
                                <div className="team-container">
                                    <div className="team-info">
                                        <div className="team-member-container active clearfix">
                                            <div className="hotel-block clearfix">
                                                <div className="hotel-slider">
                                                    <div className="swiper-container" data-slides-per-view={1} data-loop={1} data-mode="vertical">
                                                        <div className="swiper-wrapper">
                                                            <div className="item-list">
                                                                <ul>
                                                                    <li className="first"><img typeof="foaf:Image"src={process.env.PUBLIC_URL + 'images/hotel1.jpg'} width={1000} height={865} alt="img" /></li>
                                                                    <li><img typeof="foaf:Image" src={process.env.PUBLIC_URL + 'images/hotel2.jpg'} width={685} height={800} alt="img" /></li>
                                                                    <li><img typeof="foaf:Image" src={process.env.PUBLIC_URL + 'images/hotel3.jpg'} width={1024} height={768} alt="img" /></li>
                                                                    <li className="last"><img typeof="foaf:Image" src={process.env.PUBLIC_URL + 'images/hotel1.jpg'} width={1000} height={865} alt="img" /></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="pagination vertical-pagination" />
                                                    </div>
                                                </div>
                                                <div className="hotel-info">
                                                    <div className="hotel-info-container">
                                                        <div><i className="t-star" /> <i className="t-star" /> <i className="t-star" /> <i className="t-star" /> <i className="t-star" /></div>
                                                        <h3>Conrad Rangali Island Maldives Hotel</h3>
                                                        <p>Nullam bibendum odio a sem bibendum, ut vestibulum ipsum porttitor. Sed finibus nec orci et cursus. Vestibulum facilisis rhoncus tempor. Duis non ipsum volutpat, rhoncus nisi sed, pulvinar ex augue.</p>
                                                        <div className="field-features-sw-hotel-info-list">
                                                            <div className="item-list">
                                                                <ul>
                                                                    <li className="first"><span>Free</span> wifi</li>
                                                                    <li><span>128</span> rooms</li>
                                                                    <li><span>79</span> exotic beach villas</li>
                                                                    <li><span>50</span> luxurious water spas</li>
                                                                    <li className="last"><span>21</span> fabulous spa water villas</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="t-testimonials-slider">
                                                            <div className="swiper-container" data-mode="horizontal" data-slides-per-view={1} data-loop={1}>
                                                                <div className="swiper-wrapper">
                                                                    <div className="swiper-slide">
                                                                        <h4>MELANI GRIFFITH</h4>
                                                                        <p>Duis non condimentum nunc. Nunc quis turpis eu est tincidunt rutrum. Cras a purus quis sem tincidunt egestas vel id lacus. Nunc sed volutpat erat.</p>
                                                                    </div>
                                                                </div>
                                                                <div className="pagination pagination-hide" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-info">
                                <div className="team-container">
                                    <div className="team-info">
                                        <div className="team-member-container active clearfix">
                                            <div className="hotel-block clearfix">
                                                <div className="hotel-slider">
                                                    <div className="swiper-container" data-slides-per-view={1} data-loop={1} data-mode="vertical">
                                                        <div className="swiper-wrapper">
                                                            <div className="item-list">
                                                                <ul>
                                                                    <li className="first"><img typeof="foaf:Image" src={process.env.PUBLIC_URL + 'images/hotel1.jpg'} width={1024} height={768} alt="img" /></li>
                                                                    <li><img typeof="foaf:Image" src={process.env.PUBLIC_URL + 'images/hotel1.jpg'} width={685} height={800} alt="img" /></li>
                                                                    <li><img typeof="foaf:Image"src={process.env.PUBLIC_URL + 'images/hotel1.jpg'} width={1000} height={865} alt="img" /></li>
                                                                    <li className="last"><img typeof="foaf:Image" src={process.env.PUBLIC_URL + 'images/hotel1.jpg'} width={1000} height={865} alt="img" /></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="pagination vertical-pagination" />
                                                    </div>
                                                </div>
                                                <div className="hotel-info">
                                                    <div className="hotel-info-container">
                                                        <div><i className="t-star" /> <i className="t-star" /> <i className="t-star" /> <i className="t-star" /> <i className="t-star" /></div>
                                                        <h3>Conrad Rangali Island Maldives Hotel</h3>
                                                        <p>Nullam bibendum odio a sem bibendum, ut vestibulum ipsum porttitor. Sed finibus nec orci et cursus. Vestibulum facilisis rhoncus tempor. Duis non ipsum volutpat, rhoncus nisi sed, pulvinar ex augue.</p>
                                                        <div className="field-features-sw-hotel-info-list">
                                                            <div className="item-list">
                                                                <ul>
                                                                    <li className="first"><span>Free</span> wifi</li>
                                                                    <li><span>128</span> rooms</li>
                                                                    <li><span>79</span> exotic beach villas</li>
                                                                    <li><span>50</span> luxurious water spas</li>
                                                                    <li className="last"><span>21</span> fabulous spa water villas</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="t-testimonials-slider">
                                                            <div className="swiper-container" data-mode="horizontal" data-slides-per-view={1} data-loop={1}>
                                                                <div className="swiper-wrapper">
                                                                    <div className="swiper-slide">
                                                                        <h4>MELANI GRIFFITH</h4>
                                                                        <p>Duis non condimentum nunc. Nunc quis turpis eu est tincidunt rutrum. Cras a purus quis sem tincidunt egestas vel id lacus. Nunc sed volutpat erat.</p>
                                                                    </div>
                                                                </div>
                                                                <div className="pagination pagination-hide" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-info">
                                <div className="team-container">
                                    <div className="team-info">
                                        <div className="team-member-container active clearfix">
                                            <div className="hotel-block clearfix">
                                                <div className="hotel-slider">
                                                    <div className="swiper-container" data-slides-per-view={1} data-loop={1} data-mode="vertical">
                                                        <div className="swiper-wrapper">
                                                            <div className="item-list">
                                                                <ul>
                                                                    <li className="first"><img typeof="foaf:Image" src="sites/default/files/vertical-slide4.jpg" width={1000} height={865} alt="img" /></li>
                                                                    <li><img typeof="foaf:Image" src="sites/default/files/vertical-slide3.jpg" width={1024} height={768} alt="img" /></li>
                                                                    <li><img typeof="foaf:Image" src="sites/default/files/vertical-slide.jpg" width={685} height={800} alt="img" /></li>
                                                                    <li className="last"><img typeof="foaf:Image" src="sites/default/files/vertical-slide2.jpg" width={1000} height={865} alt="img" /></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="pagination vertical-pagination" />
                                                    </div>
                                                </div>
                                                <div className="hotel-info">
                                                    <div className="hotel-info-container">
                                                        <div><i className="t-star" /> <i className="t-star" /> <i className="t-star" /> <i className="t-star" /> <i className="t-star" /></div>
                                                        <h3>Conrad Rangali Island Maldives Hotel</h3>
                                                        <p>Nullam bibendum odio a sem bibendum, ut vestibulum ipsum porttitor. Sed finibus nec orci et cursus. Vestibulum facilisis rhoncus tempor. Duis non ipsum volutpat, rhoncus nisi sed, pulvinar ex augue.</p>
                                                        <div className="field-features-sw-hotel-info-list">
                                                            <div className="item-list">
                                                                <ul>
                                                                    <li className="first"><span>Free</span> wifi</li>
                                                                    <li><span>128</span> rooms</li>
                                                                    <li><span>79</span> exotic beach villas</li>
                                                                    <li><span>50</span> luxurious water spas</li>
                                                                    <li className="last"><span>21</span> fabulous spa water villas</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="t-testimonials-slider">
                                                            <div className="swiper-container" data-mode="horizontal" data-slides-per-view={1} data-loop={1}>
                                                                <div className="swiper-wrapper">
                                                                    <div className="swiper-slide">
                                                                        <h4>MELANI GRIFFITH</h4>
                                                                        <p>Duis non condimentum nunc. Nunc quis turpis eu est tincidunt rutrum. Cras a purus quis sem tincidunt egestas vel id lacus. Nunc sed volutpat erat.</p>
                                                                    </div>
                                                                </div>
                                                                <div className="pagination pagination-hide" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-info">
                                <div className="team-container">
                                    <div className="team-info">
                                        <div className="team-member-container active clearfix">
                                            <div className="hotel-block clearfix">
                                                <div className="hotel-slider">
                                                    <div className="swiper-container" data-slides-per-view={1} data-loop={1} data-mode="vertical">
                                                        <div className="swiper-wrapper">
                                                            <div className="item-list">
                                                                <ul>
                                                                    <li className="first"><img typeof="foaf:Image" src="sites/default/files/vertical-slide.jpg" width={685} height={800} alt="img" /></li>
                                                                    <li><img typeof="foaf:Image" src="sites/default/files/vertical-slide3.jpg" width={1024} height={768} alt="img" /></li>
                                                                    <li><img typeof="foaf:Image" src="sites/default/files/vertical-slide4.jpg" width={1000} height={865} alt="img" /></li>
                                                                    <li className="last"><img typeof="foaf:Image" src="sites/default/files/vertical-slide2.jpg" width={1000} height={865} alt="img" /></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="pagination vertical-pagination" />
                                                    </div>
                                                </div>
                                                <div className="hotel-info">
                                                    <div className="hotel-info-container">
                                                        <div><i className="t-star" /> <i className="t-star" /> <i className="t-star" /> <i className="t-star" /> <i className="t-star" /></div>
                                                        <h3>Conrad Rangali Island Maldives Hotel</h3>
                                                        <p>Nullam bibendum odio a sem bibendum, ut vestibulum ipsum porttitor. Sed finibus nec orci et cursus. Vestibulum facilisis rhoncus tempor. Duis non ipsum volutpat, rhoncus nisi sed, pulvinar ex augue.</p>
                                                        <div className="field-features-sw-hotel-info-list">
                                                            <div className="item-list">
                                                                <ul>
                                                                    <li className="first"><span>Free</span> wifi</li>
                                                                    <li><span>128</span> rooms</li>
                                                                    <li><span>79</span> exotic beach villas</li>
                                                                    <li><span>50</span> luxurious water spas</li>
                                                                    <li className="last"><span>21</span> fabulous spa water villas</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="t-testimonials-slider">
                                                            <div className="swiper-container" data-mode="horizontal" data-slides-per-view={1} data-loop={1}>
                                                                <div className="swiper-wrapper">
                                                                    <div className="swiper-slide">
                                                                        <h4>MELANI GRIFFITH</h4>
                                                                        <p>Duis non condimentum nunc. Nunc quis turpis eu est tincidunt rutrum. Cras a purus quis sem tincidunt egestas vel id lacus. Nunc sed volutpat erat.</p>
                                                                    </div>
                                                                </div>
                                                                <div className="pagination pagination-hide" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-info">
                                <div className="team-container">
                                    <div className="team-info">
                                        <div className="team-member-container active clearfix">
                                            <div className="hotel-block clearfix">
                                                <div className="hotel-slider">
                                                    <div className="swiper-container" data-slides-per-view={1} data-loop={1} data-mode="vertical">
                                                        <div className="swiper-wrapper">
                                                            <div className="item-list">
                                                                <ul>
                                                                    <li className="first"><img typeof="foaf:Image" src="sites/default/files/vertical-slide2.jpg" width={1000} height={865} alt="img" /></li>
                                                                    <li><img typeof="foaf:Image" src="sites/default/files/vertical-slide.jpg" width={685} height={800} alt="img" /></li>
                                                                    <li><img typeof="foaf:Image" src="sites/default/files/vertical-slide3.jpg" width={1024} height={768} alt="img" /></li>
                                                                    <li className="last"><img typeof="foaf:Image" src="sites/default/files/vertical-slide4.jpg" width={1000} height={865} alt="img" /></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="pagination vertical-pagination" />
                                                    </div>
                                                </div>
                                                <div className="hotel-info">
                                                    <div className="hotel-info-container">
                                                        <div><i className="t-star" /> <i className="t-star" /> <i className="t-star" /> <i className="t-star" /> <i className="t-star" /></div>
                                                        <h3>Conrad Rangali Island Maldives Hotel</h3>
                                                        <p>Nullam bibendum odio a sem bibendum, ut vestibulum ipsum porttitor. Sed finibus nec orci et cursus. Vestibulum facilisis rhoncus tempor. Duis non ipsum volutpat, rhoncus nisi sed, pulvinar ex augue.</p>
                                                        <div className="field-features-sw-hotel-info-list">
                                                            <div className="item-list">
                                                                <ul>
                                                                    <li className="first"><span>Free</span> wifi</li>
                                                                    <li><span>128</span> rooms</li>
                                                                    <li><span>79</span> exotic beach villas</li>
                                                                    <li><span>50</span> luxurious water spas</li>
                                                                    <li className="last"><span>21</span> fabulous spa water villas</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="t-testimonials-slider">
                                                            <div className="swiper-container" data-mode="horizontal" data-slides-per-view={1} data-loop={1}>
                                                                <div className="swiper-wrapper">
                                                                    <div className="swiper-slide">
                                                                        <h4>MELANI GRIFFITH</h4>
                                                                        <p>Duis non condimentum nunc. Nunc quis turpis eu est tincidunt rutrum. Cras a purus quis sem tincidunt egestas vel id lacus. Nunc sed volutpat erat.</p>
                                                                    </div>
                                                                </div>
                                                                <div className="pagination pagination-hide" />
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
            </div>
        );
    }
}

export default HotelReviews;