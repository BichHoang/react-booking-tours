import React, { Component } from 'react';
import './TourDetail.css';

class UserComment extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    render() {
        let {comment} = this.props;
        return ( 
        <div>
            <hr />
            <div id="comments" className="comment-wrapper comment-wrapper-nid-11 comments-list">
                <div className="ajax-comment-wrapper ajax-comment-dummy-comment">
                    <div className="form-item form-type-item">
                        {comment.user_name} đã ns rằng: {comment.text}
                    </div>
                </div>
            </div>
        </div>
    )};
}

export default UserComment;


