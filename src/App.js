import React, { Component } from "react";
import Form from './Components/form';
import Header from './Components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/App.css';
import axios from "axios";
import Body from "./Components/body";
import Error from "./Components/error";
import { AxiosResponse, AxiosError } from 'axios';


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
      firstDayDate: '',
      firstDayWeather: '',
      firstDayWind: '',
      secondDayDate: '',
      secondDayWeather: '',
      secondDayWind: '',
      thirdDayDate: '',
      thirdDayWeather: '',
      thirdDayWind: '',
    }
  }

  getMapLocation = async (event) => {


    event.preventDefault()

    const cityName = event.target.cityName.value;
    const Key = `pk.2cae4dc102199ef3d69e64cbe4bca40a`;
    const url = `https://us1.locationiq.com/v1/search.php?key=${Key}&q=${cityName}&format=json`;

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
      const herokuUrl = `https://city-explorer-api-bk201.herokuapp.com/weather?cityName=${cityName}`
      const cityInfo = await axios.get(herokuUrl).catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      })

      // one hunder precent sure that we should loop instead of doing it like this 
      this.setState({
        firstDayDate: cityInfo.data[0].date,
        firstDayWeather: cityInfo.data[0].description,
        firstDayWind: cityInfo.data[0].wind,
        secondDayDate: cityInfo.data[1].date,
        secondDayWeather: cityInfo.data[1].description,
        secondDayWind: cityInfo.data[1].wind,
        thirdDayDate: cityInfo.data[2].date,
        thirdDayWeather: cityInfo.data[2].description,
        thirdDayWind: cityInfo.data[2].wind,

      })


    }


    catch {


    }

    console.log(this.state.firstDayDate, this.state.firstDayWeather, this.state.firstDayWind);
  }
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
            firstDayDate={this.state.firstDayDate}
            firstDayWeather={this.state.firstDayWeather}
            firstDayWind={this.state.firstDayWind}
            secondDayDate={this.state.secondDayDate}
            secondDayWeather={this.state.secondDayWeather}
            secondDayWind={this.state.secondDayWind}
            thirdDayDate={this.state.thirdDayDate}
            thirdDayWeather={this.state.thirdDayWeather}
            thirdDayWind={this.state.thirdDayWind}

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
