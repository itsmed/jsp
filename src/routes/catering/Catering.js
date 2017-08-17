import React, { Component } from 'react';

import {
  Col,
  Grid,
  Row,
  Well,
} from 'react-bootstrap';

class Catering extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div style={{minHeight: '300px', marginTop: '2em', textAlign: 'center', verticalAlign: 'middle'}}>
      <Grid>
        <Col xs={12} md={10} mdOffset={1}>
          <Well>
            <div style={{verticalAlign: 'middle', textAlign: 'center',}}>
              <h4 style={{fontWeight: 'bold', fontSize: '20pt'}}>More Info Coming Soon!</h4>
              <h5 style={{fontWeight: 'bold', fontSize: '18pt'}}>Please call us to place a catering order. <a href="tel:+15107539667">(510)-753-9667</a></h5>
              <img src={require('../../images/mac_n_cheese_large_2.jpg')} alt='Mac and Cheese Large' style={{width: '100%', height: 'auto'}} />
              <p>Full Mac 'n' Cheese Tray.</p>
            </div>
          </Well>
        </Col>
      </Grid>
    </div>;
  }
}

export default Catering;
