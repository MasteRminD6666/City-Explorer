import Form from 'react-bootstrap/Form'
import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'

import 'bootstrap/dist/css/bootstrap.min.css';

class FormClass extends Component {

    render() {
        return (
            <>  
            <br></br>
            <Form onSubmit={this.props.getMapLocation}>
  <Row className="align-items-center">
    <Col sm={3} className="my-1">
  
      <InputGroup>
        
        <FormControl id="cityName" placeholder="Enter the city " />
      </InputGroup>
    </Col>
    <Col xs="auto" className="my-1">
      <Button type="submit">Explore</Button>
    </Col>
  </Row>
</Form>
            </>
        )
    }
}



export default FormClass;