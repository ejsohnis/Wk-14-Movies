import React from 'react';
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.css";


//creation of application for a movie that has the properties of 
//image, genre, timeLength, synopsis, review and stars

const MovieCard = (props) => {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.link} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{
                    props.genre}<br />
                    {props.timeLength} <br />
                    {props.synopsis} <br />
                    {props.review}
                    {props.stars}
                </Card.Text>

            </Card.Body >
        </Card >
    )
}


export default MovieCard;

