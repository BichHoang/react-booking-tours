import React, { Component } from 'react';

class Blog extends Component {
    render() {
        return (
            <div className="blog scroll-to-block">
                <div className="container from-blog">
                    <div className="region region-onepage-blog">
                        <div id="block-views-17ce894fd21e8520e3982e4b62550a8e" className="block block-views">
                            <div className="content">
                                <h2 className="block-title b-block-title">From the blog</h2>
                                <p className="sub-title">
                                    Duis non condimentum nunc. Nunc quis turpis eu est tincidunt rutrum. Cras a purus quis sem tincidunt egestas vel id lacus.
                                </p>
                                <div className="row">
                                    <div className="col-md-4 col-sm-4 post">
                                        <a href="post/pellentesque-et-lacinia-eros-condim-entum-hendrerit-nisl.html"><img typeof="foaf:Image" src={process.env.PUBLIC_URL + 'images/blog1.jpg'} width={370} height={277} alt="img" /></a>
                                        <h5><a href="post/pellentesque-et-lacinia-eros-condim-entum-hendrerit-nisl.html">Pellentesque et lacinia eros, condim entum hendrerit nisl.</a></h5>
                                        <p>admin | 09 March 2015</p>
                                        <a className="read-more red-blog" href="post/pellentesque-et-lacinia-eros-condim-entum-hendrerit-nisl.html">Read more</a> </div>
                                    <div className="col-md-4 col-sm-4 post">
                                        <a href="post/pellentesque-et-lacinia-eros-condim-entum-hendrerit-nisl-0.html"><img typeof="foaf:Image" src={process.env.PUBLIC_URL + 'images/blog2.jpg'} width={370} height={277} alt="img" /></a>
                                        <h5><a href="post/pellentesque-et-lacinia-eros-condim-entum-hendrerit-nisl-0.html">Pellentesque et lacinia eros, condim entum hendrerit nisl.</a></h5>
                                        <p>admin | 09 March 2015</p>
                                        <a className="read-more red-blog" href="post/pellentesque-et-lacinia-eros-condim-entum-hendrerit-nisl-0.html">Read more</a> </div>
                                    <div className="col-md-4 col-sm-4 post">
                                        <a href="post/pellentesque-et-lacinia-eros-condim-entum-hendrerit-nisl-1.html"><img typeof="foaf:Image" src={process.env.PUBLIC_URL + 'images/blog3.jpg'} width={370} height={277} alt="img" /></a>
                                        <h5><a href="post/pellentesque-et-lacinia-eros-condim-entum-hendrerit-nisl-1.html">Pellentesque et lacinia eros, condim entum hendrerit nisl.</a></h5>
                                        <p>admin | 09 March 2015</p>
                                        <a className="read-more red-blog" href="post/pellentesque-et-lacinia-eros-condim-entum-hendrerit-nisl-1.html">Read more</a> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Blog;
