import React, {Component} from "react";
import Figure from 'react-bootstrap/Figure';
import Alert from 'react-bootstrap/Alert'

class Error extends Component{
    
    render(){
        return(
            <>
            <Figure>
  <Figure.Image
    width={171}
    height={180}
    alt="171x180"
    src="https://31.media.tumblr.com/2e8986a1b1c062623cea1b9edaddcc52/tumblr_mup3qzOPsX1rk0k2jo1_500.gif"
  />
  <Figure.Caption>
  <Alert variant="danger">
  Something went wrong with{' '}
  <Alert.Link href="https://blog.thomasnet.com/industrial-website-404-error"> Not Found {this.props.errormsg}</Alert.Link>. Give it a click if you
    you wanna find out more.
  </Alert>
  
  
  </Figure.Caption>
</Figure>
            </>
        )
    }
}


export default Error;