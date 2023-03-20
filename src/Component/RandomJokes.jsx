import React, { useState } from 'react';
import '../App.css';
import { getRandomJoke } from '../Utils/axiosService';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';

const RandomJokes = () => {
    const [joke, setJoke] = useState(null);
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [favorites, setFavorites] = useState([]);
    const [liked, setLiked] = useState(false);

    const getJoke = () => {
        getRandomJoke()
        .then((res) => {console.log(res)
        const aJoke = res.data.value;
        setJoke(aJoke);
        setLikes(0);
        setDislikes(0);
        setLiked(false);
        })
        .catch((err) => {console.log(err)})
    }
    const handleLike = () => {
        if (!liked) {
            setLikes(likes + 1);
            setLiked(true);
            const index = favorites.findIndex((fav) => fav.joke === joke);
            if (index === -1) {
              const updatedFavorites = [...favorites, { joke, liked: true }];
              setFavorites(updatedFavorites);
            } else {
              const updatedFavorites = [...favorites];
              updatedFavorites[index].liked = true;
              setFavorites(updatedFavorites);
            }
          }
    }

    const handleDislike = () => {
        setDislikes(dislikes + 1);
    setLiked(false);
    const index = favorites.findIndex((fav) => fav.joke === joke);
    if (index === -1) {
      const updatedFavorites = [...favorites, { joke, liked: false }];
      setFavorites(updatedFavorites);
    } else {
      const updatedFavorites = [...favorites];
      updatedFavorites[index].liked = false;
      setFavorites(updatedFavorites);
    }
    }
  return (
    <div>
        <div id='background'>
        </div>
        <div className='container'>
            <button onClick={getJoke}>Get a random Joke</button>
            <h5>{joke}</h5>
         
              { joke ?     
                <div>
                <ThumbUpIcon onClick={handleLike} disabled={liked}>Like</ThumbUpIcon>
                <ThumbDownAltIcon onClick={handleDislike}>Dislike</ThumbDownAltIcon>
            </div> :
            <div></div>   
            }    

        </div>
            { joke ? (
            <div>
            <h4>Favorites:</h4>
            <ul>
                {favorites.map((fav, index) => (
                <li key={index}>{fav.joke} - {fav.liked ? "Liked" : "Disliked"}</li>
                ))}
            </ul>
            </div>) : (<span>Press the button</span>)
           }
    </div>
  )
}

export default RandomJokes