import React, { useState } from 'react'
import Movie from "./Movie"

export default function MovieContainer() {

    const [movieName, setMovieName] = useState([])
    const [search, setSearch] = useState([])

    const handleChange = event => {
        setMovieName(event.target.value)
    }

    const getMovies = async () => {
        const response = await fetch(`http://www.omdbapi.com/?apikey=fa24d12d&s=${search}`,
        { headers: { Accept: "application/json" },})
        const json = await response.json();
        console.log(json)
        setMovieName(json.Search);
    }

    const onSubmit = (event) => {
		event.preventDefault();
		getMovies();
	};

    return (
        <div>
            <h1> Movie Container</h1>
            <form onSubmit={onSubmit}>
            <Movie/>
            <input 
            className="movieSearch"
            type=" search " 
            placeholder="type any movie"
            value = {movieName}
            onChange = {handleChange}
            ></input>
            <input
            type = "submit"
            />
            </form>
        </div>
    )
}
