import React, { Component } from 'react'
import Login from './Login'
import Chat from './Chat'

export default class Main extends Component {
    constructor(){
        super();
        this.state = {
            isLogged: false,
            username:'',
            userId:''
        };
    }
    onChange = (e) => {
        this.setState({
            username:e.target.value
        })
    }
    onLogin = () => {
        if(this.state.username !== '')
            this.setState({ isLogged:true });
        else alert('Username is required')
    }
    render() {
        return (
            // <Chat />
            this.state.isLogged ? 
            <div>
                <Chat 
                username={this.state.username}/>
            </div>
            : <div>
                <Login 
                onChange={this.onChange}
                onLogin={this.onLogin}/>
            </div>
        )}
}
