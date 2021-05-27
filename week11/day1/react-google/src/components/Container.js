import React, { Component } from 'react'
import Button1 from "./Button1"
import Button2 from "./Button2"
import Logo from './Logo'
import SearchBar from "./SearchBar"

export default class container extends Component {
    
    render() {
        return (
            <div>
                    <div>
                        {this.props.image}
                    </div>
                    <Logo/>
                    <SearchBar/>
                    <div className="buttons">
                    <Button1/>
                    <Button2/>
                    </div>
            </div>
        )
    }
}
