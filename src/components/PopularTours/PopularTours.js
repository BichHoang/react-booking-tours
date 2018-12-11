import React, { Component } from 'react';

class PopularTours extends Component {
    render() {
        return (
            <div className="region region-onepage-popular-tours">
                <div id="block-views-cf51f780f879d6a804e7395dcd644137" className="block block-views">
                    <div className="content">
                        <section className="popular-tour scroll-to-block">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-3 col-popular-info">
                                        &lt;%= image_tag("trico2.png", :alt =&gt; "img") %&gt;
                                        <h2 className="block-title t-about-title">popular tours</h2>
                                        <p className="sub-title t-sub-title">
                                            Nội dung tours phổ biến
                                        </p>
                                    </div>
                                    <div className="col-md-9">
                                        <div className="swiper-container" data-mode="horizontal" data-slides-per-view="responsive" data-xs-slides={1} data-sm-slides={1} data-md-slides={2} data-lg-slides={3} data-loop={0}>
                                            <div className="swiper-wrapper ">
                                                <div className="swiper-slide">
                                                    <div className="t-popular-item">
                                                        &lt;%= image_tag("popular1.jpg", typeof: "foaf:Image" , :alt =&gt; "img", size: "270") %&gt;
                                                        <div className="t-popular-box">
                                                            <div className="hot-price">$450.00</div>
                                                            <h3>Budapest, Hungary</h3>
                                                            <p>et orci id purus pretium</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide">
                                                    <div className="t-popular-item">
                                                        &lt;%= image_tag("popular2.jpg", typeof: "foaf:Image" , :alt =&gt; "img", size: "270") %&gt;
                                                        <div className="t-popular-box">
                                                            <div className="hot-price">$450.00</div>
                                                            <h3>Dubai, UAE</h3>
                                                            <p>et orci id purus pretium</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide">
                                                    <div className="t-popular-item">
                                                        &lt;%= image_tag("popular3.jpg", typeof: "foaf:Image" , :alt =&gt; "img", size: "270") %&gt;
                                                        <div className="t-popular-box">
                                                            <div className="hot-price">$450.00</div>
                                                            <h3>Amalfi coast, Italy</h3>
                                                            <p>et orci id purus pretium</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide">
                                                    <div className="t-popular-item">
                                                        &lt;%= image_tag("popular2.jpg", typeof: "foaf:Image" , :alt =&gt; "img", size: "270") %&gt;
                                                        <div className="t-popular-box">
                                                            <div className="hot-price">$450.00</div>
                                                            <h3>Budapest, Hungary</h3>
                                                            <p>et orci id purus pretium</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pagination pagination-hide" />
                                        </div>
                                        <div className="arrows t-popular-arrows">
                                            <div className="arrow-left">&lt;%= image_tag("trh-l-arrow.png", :alt =&gt; "arrow") %&gt;
                                            </div>
                                            <div className="arrow-right">&lt;%= image_tag("trh-arrow.png", :alt =&gt; "arrow") %&gt;</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}

export default PopularTours;