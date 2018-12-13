import React, { Component } from 'react';

class HomePage extends Component {
    render() {
        return (
            <div>
                <div id="loader-wrapper">
                    <div className="loader-content">
                        <div className="cube1 t-cube" />
                        <div className="cube2 t-cube" />
                    </div>
                </div>
                <header className="r-header header">
                    <div className="container clearfix nopadding">
                        <div id="logo">
                            <a href="/">
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
                                        <li className="first leaf"><a href="/home/index.html#home" className="active">Home</a></li>
                                        <li className="leaf"><a href="/home/index.html#about" className="active">About us</a></li>
                                        <li className="leaf"><a href="/home/index.html#hot-tours" className="active">Hot tours</a></li>
                                        <li className="leaf"><a href="/home/index.html#services" className="active">Services</a></li>
                                        <li className="leaf"><a href="/home/index.html#gallery" className="active">Gallery</a></li>
                                        <li className="leaf"><a href="/home/index.html#hotel-reviews" className="active">Reviews</a></li>
                                        <li className="leaf"><a href="/home/index.html#blog" className="active">Blog</a></li>
                                        <li className="leaf"><a href="/home/index.html#testimonials" className="active">Testimonials</a></li>
                                        <li className="last leaf"><a href="/home/index.html#contact" className="active">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>
                <div className="region region-onepage-hero">
                    <div id="block-views-db8431d022ce1521cfb1c24c2f8c0b83" className="block block-views">
                        <div className="content">
                            <div className="t-banner scroll-to-block">
                                <div className="swiper-container" data-slides-per-view={1} data-loop={1} data-mode="horizontal">
                                    <div className="swiper-wrapper ">
                                        <div className="swiper-slide background-parent">
                                            <img className="center-image" src={process.env.PUBLIC_URL + 'images/banahill.jpg'} alt="img" />
                                            <div className="container">
                                                <div className="t-banner-content">
                                                    <div className="banner-info">
                                                        <div className="banner-price">
                                                            <span>650.000đ</span>/<sub>per person</sub>
                                                        </div>
                                                        <h2>Bà Nà Hills</h2>
                                                        <p>Đến với Bà Nà Hills, du khách sẽ được ngắm nhìn phong cảnh thiên nhiên tuyệt đẹp, chiêm ngưỡng các công trình kiến trúc độc đáo, vui chơi thỏa thích và thưởng thức ẩm thực phong phú.</p>
                                                    </div>
                                                    <div className="banner-info">
                                                        <div className="banner-price">
                                                            <span /><sub />
                                                        </div>
                                                        <h2>Cầu Rồng</h2>
                                                        <p>Cầu Rồng là cây cầu thứ 6 và là cây cầu mới nhất bắc qua sông Hàn. Vì cây cầu có hình dáng giống một con rồng nên được gọi là Cầu Rồng</p>
                                                    </div>
                                                    <div className="banner-info">
                                                        <div className="banner-price">
                                                            <span /><sub />
                                                        </div>
                                                        <h2>TRUNG TÂM HÀNH CHÍNH THÀNH PHỐ ĐÀ NẴNG</h2>
                                                        <p>Tọa lạc tại ngã tư Trần Phú – Lý Tự Trọng, bên bờ sông Hàn, tòa nhà Trung Tâm Hành Chính Thành phố Đà Nẵng được coi là công trình điểm nhấn cho toàn thành phố, biểu tượng của một Đà Nẵng đang vươn lên theo xu hướng hội nhập toàn cầu.</p>
                                                    </div>
                                                    <div className="info-img">
                                                        &lt;%= image_tag "img1.jpg",class: "travel-click" , :alt =&gt; "img", data: {'{'} src: "/assets/banahill.jpg"{'}'} %&gt; &lt;%= image_tag("img2.jpg",class: "travel-click" , :alt =&gt; "img", data: {'{'} src: "/assets/caurong2.jpg"{'}'}) %&gt; &lt;%= image_tag("img3.jpg",class: "travel-click" , :alt =&gt; "img", data: {'{'} src: "/assets/traibap3.jpg"{'}'}) %&gt;
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pagination pagination-hide t-pagination" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    );
    }
}

export default HomePage;
