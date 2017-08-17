import React, { Component } from 'react';

import {
  Col,
  Grid,
  Row,
  Well,
} from 'react-bootstrap';

class NotFound extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Grid>
      <Row>
        <Col xs={12} md={10} mdOffset={1}>
          <Well>
            <img src={require('../../images/not_found.png')} style={{width: '100%', height: 'auto', margin: '3px'}} />
          </Well>
        </Col>
      </Row>
    </Grid>;
  }
}

export default NotFound;
