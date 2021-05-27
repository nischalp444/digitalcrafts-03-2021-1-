import React, { useState, useEffect } from 'react'
import Movie from "./Movie"

export default function MovieContainer() {


    const [movieName, setMovieName] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        getMovies()    
    }, [])

    const getMovies = async () => {
        const response = await fetch(`http://www.omdbapi.com/?apikey=fa24d12d&s=${search}`,
        
        { headers: { Accept: "application/json" },})
        console.log(search)
        const json = await response.json();
        console.log(json)
        setMovieName(json.search);
    }

    const onSubmit = (event) => {
		event.preventDefault();
		getMovies();
    }
    const handleChange = event => {
        setMovieName(event.target.value)
    }

    return (
        <div>
            <h1> Movie Container</h1>
            <form >
            <Movie/>
            <input 
            className="movieSearch"
            onChange = {handleChange}
            value = {movieName}
            type=" search " 
            placeholder="type any movie"
            ></input>
            <button
            type="submit"
            className="submitButton"
            onClick={onSubmit}
            />
            </form>
        </div>
    )
}
