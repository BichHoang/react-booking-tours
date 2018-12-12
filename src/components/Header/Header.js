import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <div id="loader-wrapper">
                    <div className="loader-content">
                        <div className="cube1 t-cube" />
                        <div className="cube2 t-cube" />
                    </div>
                </div>
                <div id="home">
                    <header className="fixed-top"  style={{background: 'black'}}>
                        <div className="container clearfix nopadding">
                            <div id="logo"  style={{paddingTop: '15px'}}>
                                <a href="#">
                                    <img src={process.env.PUBLIC_URL + 'images/logo.png'} alt="DNTtravel"/>
                                </a>
                            </div>
                            <nav className="nav r-nav  clearfix">
                                <div className="region region-main-menu">
                                    <div className="content">
                                        <ul className="ccn-main-menu">
                                            <li className="first leaf"><a href="#home" className="active">Home</a></li>
                                            <li className="leaf"><a href="#about" className="active">About us</a></li>
                                            <li className="leaf"><a href="#hot-tours" className="active">Hot tours</a></li>
                                            <li className="leaf"><a href="#services" className="active">Services</a></li>
                                            <li className="leaf"><a href="#gallery" className="active">Gallery</a></li>
                                            <li className="leaf"><a href="#hotel-reviews" className="active">Reviews</a></li>
                                            <li className="leaf"><a href="#blog" className="active">Blog</a></li>
                                            <li className="leaf"><a href="#testimonials" className="active">Testimonials</a></li>
                                            <li className="last leaf"><a href="#contact" className="active">Contact</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </header>
                </div>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                        <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                        <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={process.env.PUBLIC_URL + 'images/banahill.jpg'} alt="First slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Bà Nà Hills</h5>
                                <p>Đến với Bà Nà Hills, du khách sẽ được ngắm nhìn phong cảnh thiên nhiên tuyệt đẹp, chiêm ngưỡng các công trình kiến trúc độc đáo, vui chơi thỏa thích và thưởng thức ẩm thực phong phú.</p>
                            </div>

                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={process.env.PUBLIC_URL + 'images/caurong.jpg'} alt="Second slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Cầu Rồng</h5>
                                <p>Cầu Rồng là cây cầu thứ 6 và là cây cầu mới nhất bắc qua sông Hàn. Vì cây cầu có hình dáng giống một con rồng nên được gọi là Cầu Rồng</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={process.env.PUBLIC_URL + 'images/traibap.jpg'} alt="Third slide" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>TRUNG TÂM HÀNH CHÍNH THÀNH PHỐ ĐÀ NẴNG</h5>
                                <p>Tọa lạc tại ngã tư Trần Phú – Lý Tự Trọng, bên bờ sông Hàn, tòa nhà Trung Tâm
                                    Hành Chính Thành phố Đà Nẵng được coi là công trình điểm nhấn cho toàn thành phố,
                                    biểu tượng của một Đà Nẵng đang vươn lên theo xu hướng hội nhập toàn cầu.</p>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>

        );
    }
}
export default Header;
