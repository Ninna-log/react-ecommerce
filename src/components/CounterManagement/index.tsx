import React from 'react'
import { Component } from 'react';
import { CounterManagementProps, CounterManagementState } from './interface';
import axios from 'axios';
 
class CounterManagement extends React.Component<CounterManagementProps, CounterManagementState> {
    constructor(props: CounterManagementProps) {
        super(props);
        this.state = { 
            counter: 0,
            users: []
        };
        console.log("constructor");
    }

    handleAddClick = () => {
        this.setState({ counter: this.state.counter + 1 })
    }

    handleMinusClick = () => {
        this.setState({ counter: this.state.counter - 1 })
    }

    static getDerivedStateFromProps(props: CounterManagementProps) {
        console.log("getDerivedStateFromProps")
        return null
    }

    clickWindow = () => {
        this.setState({ counter: this.state.counter + 1 })
    }

    componentDidMount() {
        axios.get('https://pokeapi.co/api/v2/pokemon')
            .then(response => {
                const data = response.data.results;
                const users = data.map((userData: any) => userData.name);
                this.setState({ users });
            })
        window.addEventListener('click', this.clickWindow)
    }    

    render() { 
        console.log("render");
        const { ownerName } = this.props;
        const { counter, users } = this.state;
        return (  
            <div>
                <h1>Counter Management</h1>
                <h1>{ownerName}</h1>
                <h1>{counter}</h1>
                <button onClick={this.handleAddClick}> Add </button>
                <button onClick={this.handleMinusClick}> Minus </button>
                <ul>
                    {users.map(user => <li>{user}</li>)}
                </ul>
            </div>
        );
    }
}
 
export default CounterManagement;