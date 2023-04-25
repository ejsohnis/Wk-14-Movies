import React from 'react';
import Card from './MovieCard'
import ForgettingImage from '../Images/forgetting-sarah-marshall-image.jpg'
import GameImage from '../Images/game-night-image.jpg'
import BossesImage from '../Images/horrible-bosses-image.jpg'
import LongImage from '../Images/long-shot-image.jpg';


//i have an array that I pass all the name of the movies and the years 

const MovieList = () => {
    let movies = ["Forgetting Sarah Marshall (2008)", "Game Night (2018)", "Horrible Bosses(2011)", "Long Shot(2019)"];
    return (
        <div>
            {/* when I pass the title, genre, timeLenght and synopsis to the movie cards as properties */}

            <h3>List of Movies</h3>
            <div style={{ display: "flex" }}>
                <Card link={ForgettingImage} title={movies[0]} genre="Comedy" timeLength="1h:52m" synopsis="This is focused on a bad breakup that inspires one of the character to take a vacation in Hawaii." />
                <Card link={GameImage} title={movies[1]} genre="Comedy" timeLength="1h:40m" synopsis="This is focused on group of friends who see each other on a daily basis, were involved in a real life mystery." />
                <Card link={BossesImage} title={movies[2]} genre="Comedy" timeLength="1h:46m" synopsis="This is focused on three friends who plot to kill their awful bosses, when they understand that their bosses make them unhappy. " />
                <Card link={LongImage} title={movies[3]} genre="Comedy" timeLength="2h:3m" synopsis="This is focused on two childhood friends, one became a jounalist, and the other one was the most influential woman that runs for a president, and decided to hire her friend as her speech writer." />

            </div>

        </div>
    )
}


export default MovieList;

