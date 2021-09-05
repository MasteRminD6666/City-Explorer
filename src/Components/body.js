import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


class bodyClass extends Component {
    render() {
        return (
            <>
            <br></br>
            <Card style={{ width: '30rem' }} className="bg-dark text-white">
  <Card.Img  src={`https://maps.locationiq.com/v3/staticmap?key=pk.2cae4dc102199ef3d69e64cbe4bca40a&center=${this.props.lat},${this.props.lon}`} alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title style={{ color: 'black' }}>{this.props.cityName}</Card.Title>
    <Card.Text style={{ color: 'black' }}>
        {` This is ${this.props.cityName} it's beautiful.`}
    </Card.Text>
    <Card.Text>Last updated 3 mins ago</Card.Text>
  </Card.ImgOverlay>
</Card>
             
            </>
        )
    }

}

export default bodyClass;
