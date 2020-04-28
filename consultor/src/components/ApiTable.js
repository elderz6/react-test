import React, { Component } from 'react'
import ItemApi from './ItemAPI'
import {Table} from 'react-bootstrap'

export default class ApiTable extends Component {
    render() {
        var count = 0;
        return (
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>group</th>
                        <th>id</th>
                        <th>username</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                          this.props.list.map(user => {
                            count += 1
                            return <ItemApi 
                            username={user} 
                            count={count} 
                            userGroup={this.props.group}/>
                        })
                        }
                    </tbody>
                </Table>
        )}
}
