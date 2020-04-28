import React, { Component } from 'react'
import {InputGroup, FormControl, Button} from 'react-bootstrap';

export default class Login extends Component {

    render() {
        return (
            <div>
                <div className='container'>
                    <h2>
                        Login Consultor
                    </h2>
                   <InputGroup className='loginComp'>
                        <FormControl
                        onChange={this.props.onChange}
                        placeholder='Username'>
                        </FormControl>
                        <InputGroup.Prepend>
                            <Button variant="outline-secondary" onClick={this.props.onLogin}>Login</Button>
                        </InputGroup.Prepend>
                   </InputGroup>
                </div>
            </div>
        )
    }
}
