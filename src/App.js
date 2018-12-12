import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import routes from './routes';
import Menu from './components/Menu/Menu';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Introduce from "./components/Introduce/Introduce";
import HotTours from "./components/HotTours/HotTours";
import Ourgallery from "./components/Ourgallery/Ourgallery";
import HotelReviews from "./components/HotelReviews/HotelReviews";
import Contact from "./components/Contact/Contact";
import Blog from "./components/Blog/Blog";
import Feedback from "./components/Feedback/Feedback";
import TourDetail from "./components/TourDetail/TourDetail";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    {/*<Menu />*/}
                    {/*{this.showContentMenus(routes)}*/}
                    <Header></Header>
                    <Introduce/>
                    <HotTours/>
                    <TourDetail/>
                    <Ourgallery/>
                    <Feedback/>
                    <Blog/>
                    <Contact/>
                    <Footer/>
                </div>
            </Router>
        );
    }

    showContentMenus = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                );
            });
        }
        return <Switch>{result}</Switch>;
    }

}

export default App;
