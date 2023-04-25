
import { Container, Row, Col, Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import Card from './MovieCard';
import Form from 'react-bootstrap/Form';
import ReviewForm from './ReviewForm';
import React, { useState } from 'react';


// this ReviewList component has the container that houses all the ReviewForm components: one for each movie
//the ReviewForm components are reusable
const ReviewList = () => {
    return (
        <Container>


            <div style={{ display: "flex" }}>

                <Row>


                    <Col md={3}>
                        <h3>Reviews</h3>
                        <ReviewForm />

                    </Col>

                    <Col md={3}>
                        <h3>Reviews</h3>
                        <ReviewForm />
                    </Col>

                    <Col md={3}>
                        <h3>Reviews</h3>
                        <ReviewForm />
                    </Col>

                    <Col md={3}>
                        <h3>Reviews</h3>
                        <ReviewForm />
                    </Col>


                </Row>
            </div>

        </Container>
    )
}




export default ReviewList;
