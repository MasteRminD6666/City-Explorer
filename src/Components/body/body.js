import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import './body.scss';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroupItem';



class bodyClass extends Component {


    render() {
        return (
            <>

                <br></br>
                <Card style={{ width: '30rem', height: '39em' }} className="bg-dark text-white">
                    <Card.Img  style={{ width: '29.9rem' , height:'20em'}}src={`https://maps.locationiq.com/v3/staticmap?key=pk.2cae4dc102199ef3d69e64cbe4bca40a&center=${this.props.lat},${this.props.lon}`} alt="Card image" />
                    <Card.ImgOverlay>

                        <Card.Title style={{ color: 'black' }}>
                            {` This is ${this.props.cityName} `}


                        </Card.Title>

                    </Card.ImgOverlay>
                    <Card.Body>

                        <ListGroup variant="flush" className="list-group-flush">
                            <ListGroupItem><strong>Lon🌟:</strong> {this.props.lon}</ListGroupItem>
                            <ListGroupItem><strong>Lat📅:</strong> {this.props.lat}</ListGroupItem>
                           
                            {this.props.weatherDataInof.map(Element => {
                                return <Card.Text style={{ color: 'white' }}>
                                    <ListGroupItem><strong>country_code:</strong> {Element.country_code}</ListGroupItem>
                                    <ListGroupItem><strong>datetime:</strong> {Element.datetime}</ListGroupItem>
                                    <ListGroupItem><strong>description:</strong> {Element.description}</ListGroupItem>
                                    <ListGroupItem><strong>timezone:</strong> {Element.timezone}</ListGroupItem>



                                </Card.Text>
                            })}
                        </ListGroup>
                    </Card.Body>



                </Card>



            </>
        )
    }

}

export default bodyClass;
