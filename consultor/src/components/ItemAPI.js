import React, { Component } from 'react'

export default class ItemApi extends Component {
    render() {
        return (
            <tr>
            <td>{this.props.userGroup}</td>
            <td>{this.props.count}</td>
            <td>{this.props.username}</td>
            </tr>
        )
    }
}
