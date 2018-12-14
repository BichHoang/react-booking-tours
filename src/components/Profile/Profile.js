import React, { Component } from 'react';
import {connect} from 'react-redux';
import Axios from 'axios';

class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: 0,
            name: '',
            email: '',
            address: '',
            phone: '',
            isSuccess: 0,
            alert: null,
        }
    }

    componentDidMount(){
        var {currentUser} = this.props;
        this.setState({
            id: currentUser.id,
        })
        const path = 'http://5c0e9da8e1498a00133648b9.mockapi.io/users/' + currentUser.id
        console.log(path);
        Axios.get(path)
        .then(res => {
            console.log(res.data)
            const user = res.data;
            this.setState({
                name: user.name,
                email: user.email,
                address: user.address,
                phone: user.phone,
            });
        })
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value});   
    }

    handleSubmit = event => {
        event.preventDefault();
        const id = this.state.id
        const path = 'http://5c0e9da8e1498a00133648b9.mockapi.io/users/' + id + '/'
        const user = {
            id: this.state.id,
            name: this.state.name,
            email: this.state.email,
            address: this.state.address,
            phone: this.state.phone
        }
        
        console.log(user);
        localStorage.removeItem('current_user');
        localStorage.setItem('current_user', JSON.stringify(user));
        Axios.put(path, user)
            .then(res => {
                console.log(res);
                console.log(res.data);
                this.setState({
                    isSuccess: res.status
                })
        });
        this.setState({
            alert: 'Your profile has been updated'
        })
    }

    componentDidUpdate(){
        if (this.state.isSuccess === 200){
            window.location.reload();
        }
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <section className="login-block">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 login-sec">
                                {this.state.alert}
                                <h2 className="text-center">{this.state.name}</h2>
                                <form className="login-form"  onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label className="text-uppercase">User Name</label>
                                        <input type="text" className="form-control" name="name" value={this.state.name}placeholder="Email" onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label className="text-uppercase">Email</label>
                                        <input type="email" className="form-control" style={{width: '-webkit-fill-available'}} name="email" value={this.state.email}placeholder="Email" onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label className="text-uppercase">Address</label>
                                        <input type="text" className="form-control" name="address" placeholder="Address" value={this.state.address} onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label className="text-uppercase">Phone Number</label>
                                        <input type="text" className="form-control" name="phone" placeholder="Phone number" value={this.state.phone} onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-login" onClick={this.checkSignIn} style={{width: '-webkit-fill-available'}}>Update Profile</button>
                                    </div>
                                </form>
                                <div className="copy-text1">Back to Home <a href="/">DNT.com</a></div>
                            </div>
                            <div className="col-md-8 banner-sec">
                                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                    <ol className="carousel-indicators">
                                        <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                                        <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                                        <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                                    </ol>
                                    <div className="carousel-inner" role="listbox">
                                        <div className="carousel-item active">
                                            <img className="d-block img-fluid" src="https://d3hne3c382ip58.cloudfront.net/resized/750x420/ba-na-hills-full-day-tour-in-da-nang-tour-2-36472_1510029029.JPEG" alt="First slide" style={{width: '-webkit-fill-available', height: '-webkit-fill-available'}} />
                                            <div className="carousel-caption d-none d-md-block">
                                                <div className="banner-text">
                                                    <h2>This is Heaven</h2>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi7g9Juthc1SAnniMAofTDgqTq1S8aEu1mXuvjW3merG5Lm8-AdA" alt="First slide" style={{width: '-webkit-fill-available', height: '-webkit-fill-available'}} />
                                            <div className="banner-text">
                                                    <h2>This is Heaven</h2>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                                                </div>
                                            </div>
                                        <div className="carousel-item">
                                            <img className="d-block img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpPhyQyYPtWZV2-72yPF9BlKcMV1NZknNqnspAqhnfzidV8hBskg" alt="First slide" style={{width: '-webkit-fill-available', height: '-webkit-fill-available'}} />
                                            <div className="carousel-caption d-none d-md-block">
                                                <div className="banner-text">
                                                    <h2>This is Heaven</h2>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps)(Profile);