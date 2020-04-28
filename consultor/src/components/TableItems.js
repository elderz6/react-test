import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

export default class TableItems extends Component {
    render() {
        const timestamp = new Date(this.props.timestamp);
        const date = timestamp.getDate()+'/'+timestamp.getMonth()+'/'+timestamp.getFullYear();
        return (
            <tr>
            <td>{this.props.userId}</td>
            <td>{this.props.username}</td>
            <td>{this.props.message}</td>
            <td>{date}</td>
            <td> 
            <Button onClick={this.props.delete.bind(this, this.props.userId)}>Remover</Button></td>
            </tr>
        )
    }
}
