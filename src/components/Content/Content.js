import React, { Component } from 'react'
import Slide from '../Slide/Slide'
import Introduce from '../Introduce/Introduce';
import HotTours from '../HotTours/HotTours';
import Ourgallery from '../Ourgallery/Ourgallery';
import Feedback from '../Feedback/Feedback';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';


class Content extends Component {
    render() {
        return (
            <div>
                <Slide/>
                <Introduce/>
                <HotTours match={this.props.match} />
                <Ourgallery match={this.props.match} />
                <Feedback/>
                <Blog/>
                <Contact/>
            </div>
        );
    }
}

export default Content;