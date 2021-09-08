import React, { Component } from "react";
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroupItem';
import Button from 'react-bootstrap/Button';

import Card from 'react-bootstrap/Card';


class Moives extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
 
    render() {
        return (
            <>
           
                <Card  style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.movieImage}/>
                    <Card.Body>
                        <Card.Title>{this.props.item.title}</Card.Title>
                        <Card.Text>
                            {this.props.item.overview}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup variant="flush" className="list-group-flush">
                        <ListGroupItem><strong>popularity🌟:</strong> {this.props.item.popularity}</ListGroupItem>
                        <ListGroupItem><strong>released_on📅:</strong> {this.props.item.released_on}</ListGroupItem>
                        <ListGroupItem><strong>total_votes🗳:</strong> {this.props.item.total_votes}</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                    <Button variant="outline-info"><Card.Link href="https://www.themoviedb.org/movie" target="_blank">MoreInfo</Card.Link></Button>{' '}
                    
                    </Card.Body>
                </Card>
            </>
        )
    }
}





export default Moives;
