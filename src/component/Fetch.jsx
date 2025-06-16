import React, { useEffect, useState } from 'react'

const FetchJoke = () => {
    const [joke, setJoke] = useState({});

    const URL = "https://official-joke-api.appspot.com/random_joke";

    const getJoke = async () => {
        const res = await fetch(URL);
        const jsonResp = await res.json();
        setJoke(jsonResp);
        console.log(jsonResp);
    }

    useEffect(() => {
      return () => {
        getJoke();
      }
    }, [])
    
    return (
        <>
            <div className='m-5 text-black-50'>{joke.setup}</div>
            <div>{joke.punchline}</div>
            <button  onClick={getJoke}>Get Joke</button>
        </>

    )
}

export default FetchJoke