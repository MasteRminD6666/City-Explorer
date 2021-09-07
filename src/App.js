import React, { Component } from "react";
import Form from './Components/form';
import Header from './Components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/App.css';
import axios from "axios";
import Body from "./Components/body";
import Error from "./Components/error";
import { AxiosResponse, AxiosError } from 'axios';

import Card from 'react-bootstrap/Card';

let weatherKey = process.env.REACT_APP_weatherKey
let moviesKey = process.env.REACT_APP_moviesKey
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lat: '',
      lon: '',
      cityName: '',
      showBody: false,
      imageSrc: '',
      displayErr: false,
      errormsg: '',
      weatherDataInof:[],
        }
  }

  getMapLocation = async (event) => {


    event.preventDefault()

    const cityName = event.target.cityName.value;
    const Key = `pk.2cae4dc102199ef3d69e64cbe4bca40a`;
    const url = `https://us1.locationiq.com/v1/search.php?key=${Key}&q=${cityName}&format=json`;
    const weatherUrl = `https://city-explorer-api-bk201.herokuapp.com/weather?key=${moviesKey}`;
    
    try {
      const selectedCity = await axios.get(url).catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
        this.setState({
          displayErr: true,
          showBody: false,
          errormsg: error.response.status
        })

      });
      this.setState({
        lat: selectedCity.data[0].lat,
        lon: selectedCity.data[0].lon,
        cityName: selectedCity.data[0].display_name,
        showBody: true,


      })
     
      const weatherDataInof= await axios.get(weatherUrl)
     this.setState({
       weatherDataInof:weatherDataInof.data.data
     })
     console.log(this.state.weatherDataInof);
 
    }


    catch {


    }

    
  }
  // const moivesUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${moviesKey}`;
  render() {
    return (
      <>

        <Header></Header>
        <Form getMapLocation={this.getMapLocation} ></Form>
        {this.state.showBody &&
          <Body
            lat={this.state.lat}
            lon={this.state.lon}
            cityName={this.state.cityName}
            description={this.state.description}
            
            weatherDataInof={this.state.weatherDataInof}
          >

          </Body>

        }
        {this.state.displayErr &&
          <Error errormsg={this.state.errormsg}></Error>}

          

      </>
    )
  }
}

export default App;
