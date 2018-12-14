import React, { Component } from 'react';
import Axios from 'axios';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            users: [],
            count: 0,
            error: null,
            isLoggedIn: false,
        }
    }

    componentDidMount(){
        Axios.get('http://5c0e9da8e1498a00133648b9.mockapi.io/users')
        .then(res => {
            const users = res.data;
            this.setState({users});
        })
    }

    checkSignIn = () => {
        this.state.users.map(user => {
            if ((user.email === this.state.email) && (user.password === this.state.password)){
                this.setState({
                    count: this.state.count + 1,
                    name: user.name
                })
            }
            return this.state.count;
        })
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();
        if (this.state.count !== 0){
            const currentuser = {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            }
            this.setState({
                error: 'Welcome ' + currentuser.name,
                count: 0,
                
            })
            this.setState(prevState => ({
                isLoggedIn: !prevState.isLoggedIn
            }))
        }
        else
        {
            this.setState({error: 'Invalid email or password'});
        }
    }

    render() {
        return (
            <div>
                {this.state.error}
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email:
                        <input type="email" name="email" onChange={this.handleChange}/>
                    </label>
                    <label>
                        Password:
                        <input type="password" name="password" onChange={this.handleChange}/>
                    </label>
                    <button type="submit" onClick={this.checkSignIn}>{this.state.isLoggedIn?'Log Out':'Log In'}</button>
                </form>
            </div>
        );
    }
}

export default Login;