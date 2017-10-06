import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './landing.css';

class Landing extends Component {
  determineAuth() {
    if (!this.props.auth) {
      return (
        <div className="landing-container">
          <div>
            <h1>Unauthorized Landing Page</h1>
            <p>Sexy Login box coming soon</p>
          </div>
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
