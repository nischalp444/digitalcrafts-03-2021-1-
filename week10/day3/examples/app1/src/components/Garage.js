import React, { Component } from 'react'
import Exotic_Car_Section from "./Exotic_Car_Section"
import Motorcycle_Section from "./Motorcycle_Section"
import Muscle_Car_Section from "./Muscle_Car_Section"

export default class Garage extends Component {
    render() {
        return (
            <div>
                <Exotic_Car_Section/>
                <Motorcycle_Section/>
                <Muscle_Car_Section/>
            </div>
        )
    }
}
