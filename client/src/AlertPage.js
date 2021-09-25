import * as React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import {useHistory, useParams} from 'react-router-dom'



export default function AlertPage(){
    const {id} =useParams()
    return(
        <Container style={{color:'white'}}>
            <h1>page for an individual alert {id} </h1>
        </Container>
    )
    
}