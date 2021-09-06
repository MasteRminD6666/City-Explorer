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
                </Card>
                <Card  style={{ width: '30rem' }} className="bg-dark text-white">
                <h2>Day 1 : {this.props.firstDayDate}</h2>
                <h2>Day 1 weather : {this.props.firstDayWeather}</h2>
                <h2>Day 1 wind : {this.props.firstDayWind}</h2>
                <h2>Day 2 : {this.props.secondDayDate}</h2>
                <h2>Day 2 weather : {this.props.secondDayWeather}</h2>
                <h2>Day 2 wind : {this.props.secondDayWind}</h2>
                <h2>Day 3  : {this.props.thirdDayDate}</h2>
                <h2>Day 3 weather : {this.props.thirdDayWeather}</h2>
                <h2>Day 3 wind : {this.props.thirdDayWind}</h2>
                </Card>

            </>
        )
    }

}

export default bodyClass;
