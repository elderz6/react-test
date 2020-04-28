import React, { Component } from 'react'
import { Navbar, Table, Nav } from 'react-bootstrap'
import TableItems from './TableItems'


export default class ConsultorMain extends Component {
    constructor(){
        super();
        this.state = {
            messages:[{
                id:'1',
                username:'aaaaa',
                message:'aaaaaa',
                timestamp:'04/27/2019'
            },{
                id:'2',
                username:'bbbbbbbbb',
                message:'bbbbbb',
                timestamp:'04/24/2020'
            }, {
                id:'3',
                username:'ccccccccc',
                message:'ccccccc',
                timestamp:'04/27/2020'
            },{
                id:'4',
                username:'ggggggggggggg',
                message:'ggggggggg',
                timestamp:'04/29/2020'
            },{
                id:'5',
                username:'zzzzzzzzzzzzzzzz',
                message:'zzzzzzz',
                timestamp:'04/23/2020'
            },{
                id:'6',
                username:'hhhhhhhh',
                message:'hhhhhhhh',
                timestamp:'04/20/2020'
            },
        ]}
    }
    alphaSort = () => {
        this.setState({
            messages:this.state.messages.sort((a, b) => (a.username > b.username) ? 1 : -1)
        });
    }
    dateSort = () =>{
        this.setState({
            messages:this.state.messages.sort((a, b) =>{
                const firstDate = new Date(a.timestamp);
                const secondDate = new Date(b.timestamp);
                return firstDate - secondDate
            })
        });
    }
    dateSortNew = () =>{
        this.setState({
            messages:this.state.messages.sort((a, b) =>{
                const firstDate = new Date(a.timestamp);
                const secondDate = new Date(b.timestamp);
                return  secondDate - firstDate
            })
        });
    }
    removeItem = (id) =>{
        console.log(id);
        this.setState({
            messages:[...this.state.messages.filter(messages => messages.id !== id)]
        })
    }

    render() {
        return (
            <div>
                <Navbar>
                    <Navbar.Brand href="#home">Consultor</Navbar.Brand>
                </Navbar>
                <Nav className="mr-auto">
                    <Nav.Link onClick={this.alphaSort}>Username</Nav.Link>
                    <Nav.Link onClick={this.dateSortNew}>Mais novos</Nav.Link>
                    <Nav.Link onClick={this.dateSort}>Mais antigas</Nav.Link>
                    <Nav.Link onClick={this.props.fetchList}>Listas</Nav.Link>
                </Nav>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>id</th>
                        <th>username</th>
                        <th>Message</th>
                        <th>timestamp</th>
                        <th>remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.messages.map((row) => 
                            <TableItems 
                            userId={row.id}
                            username={row.username}
                            message={row.message}
                            timestamp={row.timestamp}
                            key={row.id}
                            delete={this.removeItem}
                            />
                        )}
                    </tbody>
                </Table>
            </div>
        )}
}
