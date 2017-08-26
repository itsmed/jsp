import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import {
  firebaseConnect,
  pathToJS,
  isLoaded,
} from 'react-redux-firebase';

import AdminPanel from '../admin-panel/AdminPanel';

class ProtectedRotue extends Component {
  constructor(props) {
    super(props);

    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.isOwner = this.isOwner.bind(this);
  }

  handleLoginSubmit(e) {
    e.preventDefault();
    this.props.firebase.login({
      email: this.emailRef.value,
      password: this.passwordRef.value
    })
    .then(user => console.log("user", user))
    .catch(err => console.log('error', err));

  }

  render() {
    return <div>
      {
        this.isOwner(this.props.user, this.handleLoginSubmit)
      }
    </div>;
  }

  isOwner() {
    if (this.props.user) {
      return <div>
        <button onClick={ () => this.props.firebase.logout() }>Log Out</button>
        <AdminPanel />
      </div>;

    } else {
      return <div>
        <form>
          <input type='text' placeholder='email' ref={input => {this.emailRef = input; }} />
          <input type='password' placeholder='password' ref={input => {this.passwordRef = input; }} />
          <button onClick={ this.handleLoginSubmit }>Submit</button>
        </form>
      </div>;
    }
  }
}

export default compose(
  firebaseConnect(),
  connect(
    ({ firebase }) => ({
      authError: pathToJS(firebase, 'authError'),
      user: pathToJS(firebase, 'auth')
    })
  )
)(ProtectedRotue);
