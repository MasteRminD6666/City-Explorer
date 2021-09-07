import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Card from 'react-bootstrap/Card'



class bodyClass extends Component {

 
    render() {
        return (
            <>
                <br></br>
                <Card style={{ width: '30rem' }} className="bg-dark text-white">
                    <Card.Img src={`https://maps.locationiq.com/v3/staticmap?key=pk.2cae4dc102199ef3d69e64cbe4bca40a&center=${this.props.lat},${this.props.lon}`} alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title style={{ color: 'black' }}>{this.props.cityName}</Card.Title>
                        <Card.Title style={{ color: 'black' }}>Lat : {this.props.lat}</Card.Title>
                        <Card.Title style={{ color: 'black' }}>Lon : {this.props.lon}</Card.Title>
                        <Card.Text style={{ color: 'black' }}>
                        {` This is ${this.props.cityName} `}
                    
                            
                        </Card.Text>

                    </Card.ImgOverlay>
                    {this.props.cityinformoation.map(element =>{
                            
                            return  <Card.Text style={{ color: 'black' }}>Day: {element.date} <br></br> Description: {element.description}<br></br> Wind: {element.wind}</Card.Text>
                            
                         })}
                
                </Card>

              
               
            </>
        )
    }

}

export default bodyClass;
