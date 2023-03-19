import React, { useState } from 'react';
import '../App.css';
import { getRandomJoke } from '../Utils/axiosService';

const RandomJokes = () => {
    const [joke, setJoke] = useState(null);

    const getJoke = () => {
        getRandomJoke()
        .then((res) => {console.log(res)
        const aJoke = res.data.value;
        setJoke(aJoke)
        })
        .catch((err) => {console.log(err)})
    }
  return (
    <div>
        <div id='background'>
        </div>
        <div className='container'>
            <button onClick={getJoke}>Get a random Joke</button>
            <h5>{joke}</h5> 
        </div>
           
    </div>
  )
}

export default RandomJokes