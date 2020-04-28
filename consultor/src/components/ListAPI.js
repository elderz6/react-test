import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import ApiTable from './ApiTable';

export default class ListAPI extends Component {
    constructor(){
        super();
        this.state={
            g1:[],
            g2:[],
            g3:[],
            g4:[]
        }
    }
    sortList = () => {
        const nameArray = this.props.list;
        var checks = false;
        var g1= [];
        var g2= [];
        var g3= [];
        var g4= [];
        for (let i = 0; i < nameArray.length; i++) {
            checks = false;
            while (checks == false) {
                const rng = Math.floor(Math.random() * 4) +1;
                if(rng == 1 && g1.length < 30) {
                    g1.push(nameArray[i])
                    checks = true
                };
                if(rng == 2 && g2.length < 30){
                    g2.push(nameArray[i])
                    checks = true
                };
                if(rng == 3 && g3.length < 30){
                    g3.push(nameArray[i])
                    checks = true
                };
                if(rng == 4 && g4.length < 30){
                    g4.push(nameArray[i])
                    checks = true
                };
            }
        }
        this.setState({
            g1:g1,
            g2:g2,
            g3:g3,
            g4:g4
        })
    }
    componentDidMount(){
        this.sortList();
    }
    render() {
        return (
            <div>
                <Navbar>
                    <Navbar.Brand href="#home">Consultor - Lista</Navbar.Brand>
                </Navbar>
                <Nav className="mr-auto">
                    <Nav.Link onClick={this.props.return}>Return</Nav.Link>
                    <Nav.Link onClick={this.sortList}>Reroll</Nav.Link>
                </Nav>
                <div style={{display:'flex'}}>
                    <ApiTable list={this.state.g1} group={1}/>
                    <ApiTable list={this.state.g2} group={2}/>
                    <ApiTable list={this.state.g3} group={3}/>
                    <ApiTable list={this.state.g4} group={4}/>
                </div>
            </div>
        )
    }
}
