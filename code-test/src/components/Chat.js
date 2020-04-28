import React, { Component } from 'react'
import '../styles/chat.css'
import { Navbar, Button } from 'react-bootstrap';
import ChatMsg from './ChatMsg';
export default class Chat extends Component {
    constructor(){
        super();
        this.state={
            messages:[{
                text:'alo',
                timestamp:'11:54',
                userSent:'left',
                username:'pedrin',
                id:0
            },{
                text:'alo2',
                timestamp:'11:55',
                userSent:'right',
                username:'jojo',
                id:1
            }],
            userMsg:''
        }
    }

    getUserMsg = (e) => {
        this.setState({
            userMsg:e.target.value
        });
    }

    sendMsg =  () => {
        const date = new Date();
        const timestamp = date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear();
        const time = date.getHours() + ":" + date.getMinutes();
        this.setState({
            messages:[...this.state.messages,
            {
                text:this.state.userMsg,
                timestamp:timestamp +' - '+time,
                userSent:'right',
                username:this.props.username,
                id:3
            }]
        })
        document.getElementById('btn-input').value = '';
    }

    render() {
        return (
            <div className='container'>
                <Navbar bg='dark' variant='dark'>
                    <Navbar.Brand>Chat {this.props.username}</Navbar.Brand>
                </Navbar>
                <div className="panel-body">
                    <ul className="chat">
                        {this.state.messages.map((msg) => (
                            <ChatMsg 
                                text={msg.text}
                                timestamp={msg.timestamp}
                                userSent={msg.userSent}
                                username={msg.username}
                            />
                        ))}
                    </ul>
                    <div className="panel-footer">
                        <div className="input-group" style={{display:'table'}}>
                            <input
                            onChange={this.getUserMsg} 
                            id="btn-input" 
                            type="text" 
                            className="form-control input-sm" 
                            placeholder="Type your message here..." />
                            <span className="input-group-btn">
                                <Button variant='primary' id="btn-chat" onClick={this.sendMsg}> Send</Button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
