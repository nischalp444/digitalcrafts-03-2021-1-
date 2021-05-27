import React, { Component } from 'react'

export default class name extends Component {
    constructor(props){
    super(props)
    this.state = {
        name: "Nischal"
    }
    }
    render() {
        return (
                <div>
                <h1>Name.js</h1>
                <p> Your name is:{" " + this.state.name}</p>
                <label>Type in your Name </label>
                <input type = "text" className = "nameInput"></input>
                <p><button onClick={() => this.setState({name: "Bob" })}> Change your Name </button></p>
            </div>
        )
    }
}
