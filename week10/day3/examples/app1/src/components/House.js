import React, { Component } from 'react'
import Garage from "./Garage"

export default class House extends Component {
    render() {
        return (
            <div>
                 {this.props.vehicles.map((vehicles) => {
          return <p key={vehicles.name}>{vehicles.name}</p>;
        })}
            </div>
        )
    }
}
