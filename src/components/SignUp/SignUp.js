import React, { Component } from 'react';
import Axios from 'axios';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            users: [],
            count: 0,
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
            }

            Axios.post('http://5c0e9da8e1498a00133648b9.mockapi.io/users', user)
            .then(res => {
                console.log(res);
                console.log(res.data);
            });
            this.setState({error: 'Your account has been created'});
        }
        else{
            this.setState({error: 'This email has already exists', count: 0});
        }      
    }
    render() {
        return (
            <div>
                {this.state.error}
                <form onSubmit={this.handleSubmit}>
                    <label>
                        User Name:
                        <input type="text" name="name" onChange={this.handleChange}/>
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" onChange={this.handleChange}/>
                    </label>
                    <label>
                        Password:
                        <input type="password" name="password" onChange={this.handleChange}/>
                    </label>
                    <button type="submit" onClick={this.checkSignUp}>Sign Up</button>
                </form>
            </div>
        );
    }
}

export default SignUp;