import React, { Component } from 'react'
import Table from './Table';
import axios from 'axios';
import ListAPI from './ListAPI';

export default class ConsultorMain extends Component {
    constructor(){
        super();
        this.state = {
            requiredList:false,
            namesList:[]
        }
    }
    fetchList = async () => {
        await axios.post('/list')
        .then( res => {
            this.setState({
                requiredList:true,
                namesList:res.data
            })
        });
    }
   backPage = () =>{
       this.setState({
           requiredList:false
       })
   }
    render() {
        return (
            <div>
                {
                   !this.state.requiredList ? <Table fetchList={this.fetchList}/> 
                   :<ListAPI list={this.state.namesList} return={this.backPage}/>
                }
            </div>
        )}
}
