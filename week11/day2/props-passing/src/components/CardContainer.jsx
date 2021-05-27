import React, { Component } from 'react';
import Card from "./Card"
import "./cardContainer.css"

class CardContainer extends Component {
    state = {
        searchCriteria: "",
        pokemonName: "",
        pokemonHp: "",
        frontUrl: "",
        backUrl: "",
    }

   inputHandler = (event) => {
       console.log(event.target.name)
       this.setState({
           [event.target.name]: event.target.value,
       })
   }
   submitHandler = (event) => {
    event.preventDefault()
   }

   searchCriteria = (event) =>{
       const search = event.target.value.toLowerCase()
    
           this.setState({
               searchCriteria:search
           })
   }

    render() {
        
        const {pokemonData} = this.props
        
        const filteredData = pokemonData[0].pokemon.filter(pokemon => pokemon.name.includes(this.state.searchCriteria)) ? pokemonData[0].pokemon.filter(pokemon => pokemon.name.includes(this.state.searchCriteria)) :pokemonData[0].pokemon

        
        return (
            <div className="main-card-container">
                <div>
                <input className="search-field" onChange={(e)=>this.searchCriteria(e)} type="text" placeholder="Search for a pokemon"/>

                </div>
                <div>
                <form
                onSubmit={this.submitHandler} 
                >
                 <input 
                 name = "pokemonName"
                 className="enterName"
                 type="text" 
                 placeholder="Enter a Name"
                 value = {this.state.pokemonName}
                 onChange = {this.inputHandler}
                 />

                 <input 
                 name = "pokemonHp"
                 className="enterHp" 
                 type="text" 
                 placeholder="Enter a HP"
                 value = {this.state.pokemonHp}
                 onChange = {this.inputHandler}
                 />

                 <input 
                 name = "frontUrl"
                 className="enterFront" 
                 type="text" 
                 placeholder="Enter front URL"
                 value = {this.state.frontUrl}
                 onChange = {this.inputHandler}
                 />

                 <input 
                 name = "backUrl"
                 className="enterBack" 
                 type="text" 
                 placeholder="Enter back URL"
                 value = {this.state.backUrl}
                 onChange = {this.inputHandler}
                 />

                 <input 
                 name = "submit"
                 type="submit" 
                 value="Create" 
                 className="create-button" />

                </form>
                </div>
                <div className="card-container">

                {filteredData.map((singlePokemon,index) => <Card key={singlePokemon.name}  pokemon={singlePokemon}  />
                )}
                </div>
              
            </div>
        );
    }
}


export default CardContainer;