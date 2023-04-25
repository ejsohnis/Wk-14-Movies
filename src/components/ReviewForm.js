
import "bootstrap/dist/css/bootstrap.css";
import Card from './MovieCard';
// import Form from 'react-bootstrap/Form';

import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import StarImg from '../Images/star.png'

//The ReviewForm component includes the Review form with its properties, 
//and it includes: the stars, the review content, and username

// Rating of the movie
//the function StarsUi has props parapmeter, and it fills the stars in an array,  
//based on how much stars the user would like to fill in


function StarsUi(props) {
    return Array(props.num).fill(" ").map((_s, idx) => {
        return (
            <img key={idx} className="starIcon" src={StarImg} alt="star" />
        )
    })
}


//these are the properties of ReviewForm: Username, content of the review and stars.

function ReviewForm(props) {

    const [review, setReview] = useState({
        username: "",
        content: "",
        stars: 0,
    });
    const [reviews, setReviews] = useState([]);

    //handling the Submit Review, so no interruption will occur with the code, it will not refresh it prevents the default of the event

    const handleReviewSubmit = (e) => {
        console.log(typeof props);
        e.preventDefault();

        //Here is the setReview method that sets the reviews in the array, and we are adding the review to the array of reviews

        setReviews([...reviews, review]);

        //here we reset the Review

        setReview({
            username: "",
            content: "",
            stars: 0,
        });
    };
    return ( //we return here the whole form


        <div className="form-container">


            {/* once you click on submit button, it will call the handleReviewSubmit function */}
            <Form onSubmit={handleReviewSubmit}>

                {/* Form.Group allows the user to write a review. */}

                <Form.Group >

                    <Form.Label>Write a review</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        value={review.username}
                        onChange={(e) => setReview((r => ({ ...r, username: e.target.value })))} />
                    <Form.Control
                        type="text"
                        placeholder="Enter your review"
                        value={review.content}
                        onChange={(e) => setReview((r => ({ ...r, content: e.target.value })))}
                    />
                    <div>Number of start ( 0 - 5 )</div>
                    <Form.Control
                        type="number"
                        min={0}
                        max={5}
                        value={review.stars}
                        onChange={(e) => setReview((r => ({ ...r, stars: Number(e.target.value) })))}
                    />
                </Form.Group>


                <Button variant="primary" type="submit">
                    Submit
                </Button>

                {/* This review.map method has the parameters:  r as a review and the idx of the stars, 
                it allows the user to add stars to the review, content of the review, and the username */}
                {reviews.map((r, idx) => {
                    return (
                        <div key={idx}>
                            <div><StarsUi num={r.stars} /></div>
                            {r.username}: "{r.content}"
                        </div>)
                })}
            </Form>






        </div >



    );
}


export default ReviewForm;
