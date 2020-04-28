import React, { Component } from 'react'

export default class ChatMsg extends Component {
    render() {
        const userSent = this.props.userSent;
        return (
            <li className={userSent+" clearfix"}>
                <span className={"chat-img pull-"+userSent}>
                <img src="http://placehold.it/50/55C1E7/fff&text=U" alt="User Avatar" className="img-circle" />
                </span>
                <div className="chat-body clearfix">
                    <div className="header">
                        <strong className={"pull-"+userSent+" primary-font"}> {this.props.username} </strong>
                    </div>
                    <p> {this.props.text}
                        <br />
                        <small className=" text-muted"><span className="glyphicon glyphicon-time"></span>{this.props.timestamp}
                        </small>
                    </p>
                </div>
            </li>
        )}
}
