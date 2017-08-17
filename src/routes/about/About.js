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
            <div className='flex--container--row--mobile' style={{ minHeight: '100px', verticalAlign: 'middle', textAlign: 'center', }}>
              <h4 style={{flex: 1, fontWeight: 'bolder', fontSize: '18pt'}}>29578 Mission Blvd</h4>
              <h4 style={{flex: 1, fontWeight: 'bolder', fontSize: '18pt'}}>Hayward, Ca 94544</h4>
              <h4 style={{flex: 1, fontWeight: 'bolder', fontSize: '18pt'}}><a href='tel:15107539667'>510-753-9667</a></h4>
            </div>
          </Col>
          <Col xs={12} md={10} mdOffset={1}>
            <img src={require('../../images/jps_front.jpg')} style={{width: '100%', height: 'auto'}} />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={10} mdOffset={1}>
            <Well>
              <h3 style={{textAlign: 'center'}}>Recent Press</h3>
              {
                press.map(item => <div key={Object.keys(item).pop()} style={{textAlign: 'center', borderBottomStyle: 'dashed'}}>
                  <h5><a href={Object.values(item).pop()} target="_blank" rel="noopener">{Object.keys(item).pop()}</a></h5>
                  {/*<iframe src={Object.values(item).pop()} style={{width: "80%", height: "350px", frameborder: "0", border: "3px", margin: '5px'}} allowFullScreen></iframe>*/}
                </div>)
              }
            </Well>
          </Col>
        </Row>
      </Grid>
    </div>;
  }
}

export default About;
