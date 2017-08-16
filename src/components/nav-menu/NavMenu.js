import React, { Component } from 'react';

// import {
//   Col,
//   Glyphicon,
//   Grid,
//   Nav,
//   NavItem,
// } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { routes } from '../../routes/nav-routes';

class NavMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeKey: 1
    };

    this.handleSelect = this.handleSelect.bind(this);
    this.toggleNav = this.toggleNav.bind(this);
  }

  handleSelect(href) {
    return href === 'home' ? window.location.replace('/') : window.location.replace('/' + href);
  }

  toggleNav() {
    if (this.hiddenNav.classList.contains('mobile--menu--active')) {
      this.hiddenNav.classList.remove('mobile--menu--active');
      this.hiddenNav.classList.add('mobile--menu--hidden');
      return;
    } else {
      this.hiddenNav.classList.remove('mobile--menu--hidden');
      this.hiddenNav.classList.add('menu--menu--active');
      return;
    }
  }

  render() {
    return <div className='nav--menu--container'>
      {
        routes.map(route => (
          <Link
            className='nav--menu--item'
            key={route}
            to={route.toLowerCase() === 'home' ? '/' : route.toLowerCase()}
          >{route}</Link>
        ))
      }
    </div>;
  }
}

export default NavMenu;
