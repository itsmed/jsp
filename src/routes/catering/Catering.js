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
            <h4>Coming Soon!</h4>
            <h5>Please call us to place an order. <a href="tel:+15107539667">(510)-753-9667</a></h5>
          </Well>
        </Col>
      </Grid>
    </div>;
  }
}

export default Catering;
