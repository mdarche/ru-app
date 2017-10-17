import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './login.css';
import logo from '../../assets/ru-logo.svg';

class Login extends Component {
  determineAuth() {
    if (!this.props.auth) {
      return (
        <div className="landing-container">
          <div className="login-container">
            <div className="login-box">
              <div className="login-content">
                <img src={logo} alt="ru-logo" />
                <p>Sign In or Create Account</p>
                <a className="google-btn" href="/auth/google">
                  <i className="fa fa-google" aria-hidden="true" />
                  Login with Google
                </a>
              </div>
            </div>
            <div className="login-image">
              <div className="login-image-overlay" />
            </div>
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

export default connect(mapStateToProps)(Login);
