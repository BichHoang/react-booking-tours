import React, { Component } from 'react';
import Axios from 'axios';
import '../Login/Login.css';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            confirmation: '',
            users: [],
            count: 0,
            isSuccess: false,
            error: null,
        }
    };

    componentDidMount(){
        Axios.get('http://5c0e9da8e1498a00133648b9.mockapi.io/users')
        .then(res => {
            const users = res.data;
            this.setState({users});
        })
    }

    checkSignUp = () => {
        this.state.users.map(user => {
            if (user.email === this.state.email){
                this.setState({count: this.state.count + 1})
            }
            return this.state.count;
        })
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault();        
        if (this.state.count === 0){
            const user = {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                confirmation: this.confirmation,
            }

            Axios.post('http://5c0e9da8e1498a00133648b9.mockapi.io/users', user)
            .then(res => {
                console.log(res);
                console.log(res.data);
            });
            this.setState({
                error: 'Your account has been created',
                isSuccess: true,
            });
        }
        else{
            this.setState({error: 'This email has already exists', count: 0});
        }      
    }

    componentDidUpdate(){
        if (this.state.isSuccess){
            Axios.get('http://5c0e9da8e1498a00133648b9.mockapi.io/users')
            .then(res => {
            const users = res.data;
            this.setState({users});
            this.setState({isSuccess: false});
            window.location.replace("/login");
        })
        }
    }
    render() {
        return (
            <div>
                <section className="login-block">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 login-sec">
                                {this.state.error}
                                <h2 className="text-center">Sign Up Now</h2>
                                <form className="login-form"  onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label className="text-uppercase">Full name</label>
                                        <input type="text" className="form-control" name="name" placeholder="Full name" onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label className="text-uppercase">Email</label>
                                        <input type="email" className="form-control" name="email" placeholder="Email" style={{width: '-webkit-fill-available'}} onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label className="text-uppercase">Password</label>
                                        <input type="password" className="form-control" name="password" placeholder="Password" onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label className="text-uppercase">Confirmation</label>
                                        <input type="password" className="form-control" name="confirmation" placeholder="Password" onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-login" style={{width: '-webkit-fill-available'}} onClick={this.checkSignUp}>Sign Up</button>
                                    </div>
                                </form>
                                <div className="copy-text1">Back to Home <a href="/">DNT.com</a></div>
                                <div className="copy-text">Đã có tài khoản <a href="/login">Log in</a></div>
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

export default SignUp;