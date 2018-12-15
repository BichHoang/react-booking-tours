import React, { Component } from 'react';
import './Ourgallery.css';
import { Link } from 'react-router-dom';
import {filter, includes} from 'lodash';
import { getAllTourAPI, getAllCategoryAPI } from '../../actions';
import {connect} from 'react-redux';

class Ourgallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tours: [],
            category: 'all',
            categories: [],
            currentPage: 1,
            todosPerPage: 8,
            search: '',
            strSearch: '',
            isSearch: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }
    componentDidMount() {
        this.props.getAllTour();
        this.props.getAllCategory();
    }
    getTours = (tours, url) => {
        
        let {category, search, isSearch, strSearch} = this.state;
        if(category !== 'all') {
            tours = filter(tours, function(o) { 
                return o.category_id === category;
            })
        }
        console.log(tours);
        if(isSearch) {
            tours = filter(tours, (tour) => {
                return includes(tour.name.toLocaleLowerCase(), strSearch.toLocaleLowerCase());
            });
        }
        let result = tours.map((tour, index) => {
            return ( 
                <Link key={index} to={`${url}/${tour.id}`} className="country-link 8 work-img" >
                    <img typeof="foaf:Image" src={tour.img} alt="img" />
                    <div className="info-panel">
                        <div className="hot-price">${tour.price}</div>
                        <h3 className="country-name">{tour.name}</h3>
                    </div>
                </Link>      
            )
        })
        return result;
    }
    changeCategory = (category_id) => {
        this.setState({
            category: category_id,
            search: '',
            isSearch: false
        })
    }
    getCategories = (categories) => {
        let result = categories.map((category, index) => {
        let actual = this.state.category === category.id ? "actual" : null;
        return (
            <span 
                onClick={() => this.changeCategory(category.id)} 
                className={`button ${actual}`} >
                    {category.name}
            </span>
            )
        })
        return result;
    } 
    handleChange = (event) => {
        this.setState({ search: event.target.value });   
    }
    handleSearch = () => {
        this.setState({isSearch: true, strSearch: this.state.search})
    }
    render() {
        let {tours, match, categories} = this.props;
        let url = match.url;
        if(url === '/') {
            url = '/tours';
        }

        const {  currentPage, todosPerPage } = this.state;
        const todos = [...this.getTours(tours, url)];
        // Logic for displaying current todos
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

        const renderTodos = currentTodos.map((todo, index) => {
            return todo;
        });

        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {

            return (
                <li className={`${this.state.active}`}
                    key={number}
                    id={number}
                    onClick={this.handleClick}
                >
                    {number}
                </li>
            );
        });
        return (
            <section id="gallery">
                <div className="region region-onepage-our-gallery">
                    <div id="block-views-0da21991801cce90f89c208d8fb76f5f" className="block block-views">
                        <div className="content">
                            <section className="t-gallery scroll-to-block">
                                <div className="container">
                                    <div className="t-title-block">
                                        <h2 className="block-title t-about-title">our gallery</h2>
                                        <img src={process.env.PUBLIC_URL + 'images/outgallary.png'} alt="img" />
                                        <div id="filters" className="cont-filter clearfix">
                                          {this.getCategories(categories)}
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="col-sm-1"></div>
                                                <div className="col-sm-10">
                                                <div className="search-form">
                                                    <input value={this.state.search} type="text" name="search" onChange={this.handleChange}  placeholder="Search" />
                                                    <button onClick={this.handleSearch} className="btn btn-default">
                                                        <span className="glyphicon glyphicon-search" />
                                                    </button>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <center>
                                    <div id="gallery-popap" className="isotope img-crop ">
                                        <div className="grid" />
                                            {renderTodos}
                                        <div className="content clearfix"></div>
                                        <div className="pagination">
                                            <ul id="page-numbers">
                                                {renderPageNumbers}
                                            </ul>
                                        </div>
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

const mapStateToProps = (state) => {
    return {
        tours: state.tours,
        categories: state.categories
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        getAllTour: () => {
            dispatch(getAllTourAPI());
        },
        getAllCategory: () => {
            dispatch(getAllCategoryAPI());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Ourgallery);
