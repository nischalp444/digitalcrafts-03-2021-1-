import React, { Component } from 'react'

export default class Age extends Component {
    constructor(props) {
        super(props)
        this.state = {
            age: 1
        }

    }
    render() {
        return (
            <div>
                <h1>Age.js</h1>
                <p>{this.state.age}</p>
                <button onClick={() => this.setState({age : this.state.age + 1})}>+1</button>
                <button onClick={() => this.setState({age : this.state.age - 1})}>-1</button>
                <button onClick={() => this.setState({age : this.state.age + 10})}>+10</button>
                <button onClick={() => this.setState({age : this.state.age - 10})}>-10</button>
            </div>
        )
    }
}
