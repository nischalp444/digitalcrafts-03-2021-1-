import React, { Component } from 'react'
import "../App.css"
export default class Form extends Component {

    state = {
        firstName: "",
        lastName: "",
        streetAddress: "",
        apt: "",
        postalCode: "",
        city: "",
        state: "",
        country: "",
        phone: "",

    }

    handleInputFormValues = (event) => {
        this.setState({
          [event.target.name]: event.target.value,
        });
      };
    render() {
        return (
            <div>
                <h1 className ="shipping-form-header">Forms React</h1>
      <div className="shipping-form-container">
      <form 
      action = "" 
      className="shipping-form"
      onSubmit= {this.handleInputFormValues}
      >

        <input
        name="firstName" 
        type="text" 
        className="shipping-input-text" 
        placeholder="First Name" 
        value={this.state.firstName} 
        onChange={this.handleInputFormValues}>

        </input>

        <input 
        name="lastName"
         type="text" 
         className="shipping-input-text" 
         placeholder="Last Name"></input>

        <input 
        name="streetAddress"
         type="text" 
         className="shipping-input-text-street"
          placeholder="Street Address"></input>

        <input 
        name="apt"
         type="text" 
         className="shipping-input-text-apt" 
         placeholder="Apt, Suite"></input>

        <input 
        name="postalCode"
         type="text" 
         className="shipping-input-text" 
         placeholder="Postal Code"></input>

        <input 
        name="city"
         type="text" 
         className="shipping-input-text" 
         placeholder="City"></input>

        <input 
        name="state"
         type="text" 
         className="shipping-input-text" 
         placeholder="State"></input>

        <input 
        name="country"
         type="text" 
         className="shipping-input-text" 
         placeholder="Country"></input>

        <input 
        name="phone"
         type="text" 
         className="shipping-input-text" 
         placeholder="Phone"></input>

        <input type="submit" className="shipping-input-submit" placeholder="Submit"></input>

      </form>
      </div>
            </div>
        )
    }
}
