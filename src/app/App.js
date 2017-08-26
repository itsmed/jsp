import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import './App.css';

import About from '../routes/about/About';
import Catering from '../routes/catering/Catering';
import Footer from '../components/footer/Footer';
import Landing from '../routes/landing/Landing';
import MenuRoute from '../routes/menu-route/MenuRoute';
import Header from '../components/header/Header';
import NotFound from '../routes/not-found/NotFound';
import ProtectedRoute from '../routes/protected-route/ProtectedRoute';

class App extends Component {
  render() {
    return <Router>
      <div>
        <Header />
       
        <Switch>
          <Route path='/' exact component={Landing} />
          <Route path='/about' component={About} />
          <Route path='/catering' component={Catering} />
          <Route path='/menu' component={MenuRoute} />
          <Route path='/admin-panel' component={ProtectedRoute} />
          <Route component={NotFound} />
        </Switch>
        
        <Footer />
      </div>
    </Router>;
  }
}

export default App;
