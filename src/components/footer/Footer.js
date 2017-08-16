import React from 'react';
import {
  Col,
  Row,
} from 'react-bootstrap';


const Footer = (props) => (
  <footer>
    <Row>
      <Col xs={12}>
        <h5>Just Potato Salad... And Much Much More</h5>
        <h6>29587 Mission Blvd. Hayward, CA 94544
          <a href="tel:+15107539667">(510)-753-9667</a>
        </h6>
      </Col>
    </Row>
    <Row>
      <Col xs={4} xsOffset={4}>
        <span style={{fontSize: '10px', display: 'block'}}>copyright 2017 Just Potato Salad</span>
        <span style={{fontSize: '10px', display: 'block'}}>Built by<a href="http://itsmed.github.io" target="_blank" rel="noopener">Dejon Gill</a></span>
      </Col>
    </Row>
  </footer>
);

export default Footer;