import React, { Component } from 'react'

export default class header extends Component {
    render() {
        return (
            <div className="header">
                <div className="leftHeader">
                {this.props.about}
                {this.props.store}
                </div>
                <div className="rightHeader">
                {this.props.gmail}
                {this.props.images}
                </div>
                {/* <a href="#"> About</a>
                <a href="#"> Store</a>
                <a href="#"> Gmail</a>
                <a href="#"> Images</a> */}
            </div>
        )
    }
}
