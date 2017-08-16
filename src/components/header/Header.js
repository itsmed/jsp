import React from 'react';

import NavMenu from '../nav-menu/NavMenu';
import {
  Col,
  Row,
  Grid,
  Image
} from 'react-bootstrap';


const Header = (props) => (
  <header style={{position: 'inherit', bottom: '160px', backgroundColor: '#8B0000',}}>
    <Grid>
      <Row>
        <Col md={10} mdOffset={1}>
          <div style={{padding: '5px', backgroundColor: '#fff', color: '#8B0000'}}>
            <div style={{display: 'inline-block'}}>
              <Image src={require('../../images/jsp_logo.png')} responsive />
            </div>
            <div className='header--banner'>
              <h6 style={{fontWeight: 'bolder', fontSize: '22px', fontFamily: 'impact'}}>29578 Mission Blvd</h6>
              <h6 style={{fontWeight: 'bolder', fontSize: '22px', fontFamily: 'impact'}}>Hayward, CA 94544</h6>
              <h6 style={{fontWeight: 'bolder', fontSize: '22px', fontFamily: 'impact'}}><a href='tel:1-510-753-9667'>(510)-753-9667</a></h6>
            </div>
            <div style={{textAlign: 'center', verticalAlign: 'middle', backgroundColor: '#fff', display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
              <h6 style={{flex: '1', fontWeight: 'bolder', fontSize: '22px', fontFamily: 'impact'}}>Closed Mon.</h6>
              <h6 style={{flex: '1', fontWeight: 'bolder', fontSize: '22px', fontFamily: 'impact'}}>Tues. 4pm - 9pm</h6>
              <h6 style={{flex: '1', fontWeight: 'bolder', fontSize: '22px', fontFamily: 'impact'}}>Wed. - Fri. 11am - 9pm</h6>
              <h6 style={{flex: '1', fontWeight: 'bolder', fontSize: '22px', fontFamily: 'impact'}}>Sat. 12pm - 9:30pm</h6>
              <h6 style={{flex: '1', fontWeight: 'bolder', fontSize: '22px', fontFamily: 'impact'}}>Sun. 2pm - 8pm</h6>
            </div>
          </div>
          <NavMenu />
        </Col>
      </Row>
    </Grid>
  </header>
);

export default Header;