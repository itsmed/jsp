import React, { Component } from 'react';

import {
  Col,
  Grid,
  Row,
  Well,
} from 'react-bootstrap';

const press = [
  {
    'East Bay Express': 'https://www.eastbayexpress.com/oakland/haywards-just-potato-salad-and-the-ministry-of-meat/Content?oid=5059400'
  },
];

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div style={{margin: '2em'}}>
      <Grid>
        <Row>
          <Col xs={12} md={10} mdOffset={1}>
            <h3>Owners</h3>
            <p>Owned and operated by Pastor CD and Tammy Bennet, Just Potato Salad serves great food...</p>
          </Col>
          <Col xs={12} md={10} mdOffset={1}>
            <h3>Mission</h3>
            <p>Just Potato Salad also has a mission to give back to the community through...</p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={10} mdOffset={1}>
            <Well>
              <h3>Recent Press</h3>
              {
                press.map(item => <p key={Object.keys(item).pop()}>
                  <a href={Object.values(item).pop()} target="_blank" rel="noopener">{Object.keys(item).pop()}</a>
                </p>)
              }
            </Well>
          </Col>
        </Row>
      </Grid>
    </div>;
  }
}

export default About;
