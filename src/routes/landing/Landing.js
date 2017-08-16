import React, { Component } from 'react';
import {
  Carousel,
  Col,
  Grid,
  // img,
  Row,
} from 'react-bootstrap';

class Landing extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div style={{marginTop: '1em'}}>
      <Grid>
        <Row>
          <Col xs={12} md={10} mdOffset={1}>
            <div style={{backgroundColor: '#8B0000', padding: '5px'}} className='flex--container--row--mobile'>
              <div className='carousel--wrapper' style={{flex: 1}}>
                <Carousel>
                  <Carousel.Item className='carousel--height'>
                    <img className='jsp--carousel--img' alt="barbaqued ribs" src={require("../../images/the_cue.png")} />
                    <Carousel.Caption>
                      <h3>The Que</h3>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item className='carousel--height'>
                    <img className='jsp--carousel--img' alt="fried snapper" src={require("../../images/seafood.png")} />
                    <Carousel.Caption>
                      <h3>Seafood</h3>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item className='carousel--height'>
                    <img className='jsp--carousel--img' alt="tri tip sandwhich" src={require("../../images/sandwich_sauce_pour_over.jpg")} />
                    <Carousel.Caption>
                      <h3>Sandwiches</h3>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item className='carousel--height'>
                    <img className='jsp--carousel--img' alt="mac 'n' cheese" src={require("../../images/sides.png")} />
                    <Carousel.Caption>
                      <h3>Sides</h3>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item className='carousel--height'>
                    <img className='jsp--carousel--img' alt="pecan pie" src={require("../../images/desserts.png")} />
                    <Carousel.Caption>
                      <h3>Desserts</h3>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </div>
              <div className='carousel--wrapper' style={{ backgroundColor: 'black', height: '400px', color: '#fff', flex: 1}}>
                <div style={{margin: '3px', vericalAlign: 'middle', textAlign: 'center', padding: '3px'}}>
                  <h3 className='landing--about'>Call now to order</h3>
                  <h3 className='landing--about'>Dine In or Carry Out</h3>
                  <h3 className='landing--about'><a href='tel:15107539667'>(510) 753-9667</a></h3>
                </div>
                <div style={{margin: '3px', vericalAlign: 'middle', textAlign: 'center', }}>
                  <h3 className='landing--about'>29587 Mission Blvd.</h3>
                  <h3 className='landing--about'>Hayward, CA 94544</h3>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={10} mdOffset={1}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13221.7836092144!2d-122.04897331983544!3d37.62978831510572!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5c108d4fe17bb3fb!2sJust+Potato+Salad!5e0!3m2!1sen!2sus!4v1502417289818" style={{width: "100%", height: "450px", frameborder: "0", border: "0"}} allowFullScreen></iframe>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={10} mdOffset={1}>
            <img className='red--border' style={{height: 'auto', width: '100%'}} src={require('../../images/jps_front.jpg')}  />
          </Col>
        </Row>
      </Grid>
    </div>;
  }
}

export default Landing;
