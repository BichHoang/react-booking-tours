import React, { Component } from 'react';
import './TourDetail.css';
import { connect } from 'react-redux';
import BookingForm from "../BookingForm/BookingForm";
import * as actions from './../../actions/index';
import UserComment from './UserComment';
import callApi from './../../utils/apiCaller';

class TourDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            comments: []
        }
    }
    componentDidMount() {
        callApi('comments','GET',null).then(res => {
            this.setState({comments: res.data})
        })
    }
    openForm = () => {
        console.log("OPEN");
        this.props.openForm();
    }
    render() {
        let {comments} = this.state;
        let result = comments.map((comment, index) => {
            return ( 
                <UserComment key={index} comment={comment} />
            )
        })
        var { isDisplayBookingForm } = this.props;
        let booking = null;
        if(isDisplayBookingForm) booking = <BookingForm />
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
                                                                            <img src="http://banahills.sunworld.vn/wp-content/uploads/2018/08/muon-co-nhung-trai-nghiem-doc-la-san-ngay-combo-dem-ba-na-1240-1.jpg" alt="img" style={{width: '-webkit-fill-available', height: '450px'}} />
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
                                                        <div className={isDisplayBookingForm === true ? 'hidenButton' : 'btnBooking'}>
                                                            <a onClick={this.openForm}>Booking</a>
                                                        </div>
                                                        <div>
                                                            {booking}
                                                        </div>
                                                        <div className="fb-comments" data-href="http://developers.facebook.com/docs/plugins/comments/"
                                                             data-numposts={5} data-colorscheme="dark" data-width="100%">
                                                        </div>
                                                        <div className="content-comment">
                                                            <section id="comments-section" className="comments comment-wrapper comment-wrapper-nid-11">
                                                                <h3 className="comments-title">Comments ({comments.length})</h3>
                                                                {result}
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
const mapStatetoProps = state => {
    return{
        isDisplayBookingForm : state.isDisplayBookingForm
    };
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        openForm : () => {
            dispatch(actions.openForm());
        }
    };
};
export default connect(mapStatetoProps, mapDispatchToProps) (TourDetail);


