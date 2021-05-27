import React, { Component } from 'react'

export default class CarlosForm extends Component {
    state = {
        streamerHandle: "",
    }
    handleStreamerSubmission = (event) => {

    }
    render() {
        return (
            <div>
                 <h1 className ="shipping-form-header">Forms React</h1>
                <div className="shipping-form-container">
                <form action = "" className="shipping-form" 
                onSubmit={this.handleStreamerSubmission} >

                <input
                type="text" 
                className="shipping-input-text" 
                placeholder="Streamer Handle"
                value = {this.state.streamerHandle}
                onChange = {(e)=>this.setState({
                streamerHandle: e.target.value
                })} 
                ></input>

                <input 
                type="submit" 
                className="shipping-input-submit" 
                placeholder="Submit"></input>

                </form>
                </div>
            </div>
        )
    }
}
