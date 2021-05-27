import React,{useState, useEffect} from 'react'
import Jokes from "./Jokes"

export default function JokesContainer() {

    const [joke, setJoke] = useState ("")

    useEffect(() => {
        getDadJokes();
      }, []);

      const getDadJokes = async () => {
        const response = await fetch("https://icanhazdadjoke.com", {
          headers: { Accept: "application/json" },
        });
    
        const json = await response.json();
    
        setJoke(json);
      };
    
    return (
        <div>
            <h1>Jokes Container</h1>
            <Jokes />
        </div>
    )
}
