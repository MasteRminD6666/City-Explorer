import React, {Component} from "react";
import Figure from 'react-bootstrap/Figure';

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
  Something went wrong {this.props.errormsg}
  </Figure.Caption>
</Figure>
            </>
        )
    }
}


export default Error;