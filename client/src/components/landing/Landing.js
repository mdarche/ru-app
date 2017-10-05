import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './landing.css';

class Landing extends Component {
  determineAuth() {
    if (!this.props.auth) {
      return (
        <div className="landing-container">
          <h1>Emaily!</h1>
          Collect feedback form your users
        </div>
      );
    }
    return <Redirect to="/dashboard" />;
  }

  render() {
    return <div>{this.determineAuth()}</div>;
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Landing);
