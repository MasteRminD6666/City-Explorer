import React, {Component} from "react";
import Form from './Components/form';
import Header from './Components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import  '../src/App.css';
import axios from "axios";
import Body from "./Components/body";

class App extends Component{
  constructor(props){
    super(props)
    this.state={
      lat:'',
      lon:'',
      cityName:'',
      showBody: false,
      imageSrc: ''
      
    }
  }
  getMapLocation= async (event) => {
  event.preventDefault()
  
  const cityName= event.target.cityName.value ;
  const Key= `pk.2cae4dc102199ef3d69e64cbe4bca40a`;
  const url= `https://us1.locationiq.com/v1/search.php?key=${Key}&q=${cityName}&format=json`;
  
  const selectedCity = await axios.get(url);
  this.setState({
    lat: selectedCity.data[0].lat,
    lon: selectedCity.data[0].lon,
    cityName: selectedCity.data[0].display_name,
    showBody:true,
    
    
  })
 
  const imgSrc = `https://maps.locationiq.com/v3/staticmap?key=${Key}&center=${this.state.lat},${this.state.lon}`
 
  console.log(imgSrc);


  }
  render(){
    return(
    <>
  
    <Header></Header>
    <Form getMapLocation = {this.getMapLocation} ></Form>
    {this.state.showBody &&
      <Body 
      lat={this.state.lat} 
      lon= {this.state.lon}
      cityName= {this.state.cityName}
      
      
      >
      
      </Body>
     
    }
  
    </>
    )
  }
}

export default App;
