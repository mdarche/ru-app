import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

// Global CSS Rules
import '../assets/gridlex.css';
import '../assets/normalize.css';

import Header from './header/Header';
import Login from './login/Login';
import Dashboard from './dashboard/Dashboard';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  renderHeader() {
    const { auth } = this.props;
    return auth && auth.registration ? <Header auth={auth} /> : <div />;
  }

  renderIndex() {
    return (
      <Route
        exact
        path="/"
        render={() =>
          this.props.auth ? (
            <Route component={Dashboard} />
          ) : (
            <Redirect to="/login" />
          )}
      />
    );
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            {this.renderHeader()}
            {this.renderIndex()}
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/register" component={Dashboard} />
            <Route path="/login" component={Login} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(App);
