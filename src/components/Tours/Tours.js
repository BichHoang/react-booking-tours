import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Tours extends Component {
    render() {
        
        let tours = [
            {   
                id: 1,
                src_img: process.env.PUBLIC_URL + 'images/hot1.jpg',
                price: 775,
                place: 'Istanbul, Turkey'
            },
            {
                id: 2,
                src_img: process.env.PUBLIC_URL + 'images/hot2.jpg',
                price: 775,
                place: 'Istanbul, Turkey'
            },
            {
                id: 3,
                src_img: process.env.PUBLIC_URL + 'images/hot1.jpg',
                price: 775,
                place: 'Istanbul, Turkey'
            },
            {
                id: 4,
                src_img: process.env.PUBLIC_URL + 'images/hot2.jpg',
                price: 775,
                place: 'Istanbul, Turkey'
            }
        ]
        let {match} = this.props;
        console.log(match);
        let url = match.url;
        let result = tours.map((tour, index) => {
            return ( 
                <Link key={index} to={`${url}/${tour.id}`} >
                    <img typeof="foaf:Image" src={process.env.PUBLIC_URL + 'images/hot1.jpg'} alt="img" />
                    <div className="info-panel">
                        <div className="hot-price">${tour.price}</div>
                        <h3 className="country-name">{tour.place}</h3>
                    </div>
                </Link>      
            )
        })
        return (
            <section  id="gallery">
                <div className="region region-onepage-our-gallery">
                    <div id="block-views-0da21991801cce90f89c208d8fb76f5f" className="block block-views">
                        <div className="content">
                            <section className="t-gallery scroll-to-block">
                                <div className="container">
                                    <div className="t-title-block">
                                        <img src={process.env.PUBLIC_URL + 'images/outgallary.png'} alt="img" />
                                        <h2 className="block-title t-about-title">our gallery</h2>
                                        <div id="filters" className="cont-filter clearfix">
                                            <span className="button actual" data-filter="*">all</span>
                                            <span className="button" data-filter=".11">Africa</span>
                                            <span className="button" data-filter=".10">Asia</span>
                                            <span className="button" data-filter=".9">Australia</span>
                                            <span className="button" data-filter=".8">Europe</span>
                                            <span className="button" data-filter=".12">North America</span>
                                            <span className="button" data-filter=".13">South America</span> </div>
                                    </div>
                                </div>
                                <center>
                                    <div id="gallery-popap" className="isotope img-crop ">
                                        <div className="grid" />
                                            {result}
                                    </div> 
                                </center>
                            </section>
                            <div className="content clearfix"></div>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}

export default Tours;
