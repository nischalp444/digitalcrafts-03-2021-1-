import "./App.css"
import "./components/House"
import React, { Component } from 'react'
import House from "./components/House"

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state ={
      vehicles: [{
        motorcycles:[
          {american: [
            {name: "Harley"},
            {name: "Polaris"},
            {name: "Zero"}
          ]},
          {foreign: [
            {name: "BMW"},
            {name: "Aprilia"},
            {name: "KTM"}
          ]}
          
        ],
        cars:[
          {american: [
            {name: "Ram"},
            {name: "Ford"},
            {name: "Jeep"}
          ]},
          {foreign: [
            {name: "BMW"},
            {name: "Audi"},
            {name: "Mercedes"}
          ]}
          
        ]
      }]
    }
  }
  render() {
    const {vehicles} = this.state
    
    return (
      <>
        < House
        vehicles={vehicles}
          />   
      </>
    )
  }
}
