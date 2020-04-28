import React, { Component } from 'react'
import Login from './Login'
import ConsultorMain from './ConsultorMain';

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
            this.state.isLogged ? 
            <div>
                <ConsultorMain />
            </div>
            : <div>
                <Login 
                onChange={this.onChange}
                onLogin={this.onLogin}/>
            </div>
        )}
}
