import Form from 'react-bootstrap/Form'
import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import './froms.scss'


import 'bootstrap/dist/css/bootstrap.min.css';

class FormClass extends Component {

    render() {
        return (
            <>  
            <br></br>
            <Form style={{  display: "inline-block", textAlign:"center"}} className="form-center" onSubmit={this.props.getMapLocation}>
  <Row className="align-items-center">
    <Col sm={3} className="my-1">
  
   
        
        <FormControl style= {{width: '200px'}} id="cityName" placeholder="Enter The City Name " />

    </Col>
    <Col xs="auto" className="my-1">
   
      <Button style= {{marginLeft: '100px'}} variant="outline-primary" type="submit">Explore</Button>
  
    </Col>
  </Row>
</Form>
            </>
        )
    }
}



export default FormClass;