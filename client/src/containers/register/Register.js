import React, { Component } from 'react';
import { connect } from 'react-redux';

import RegisterForm from './RegisterForm';

class Register extends Component {
  render() {
    const { auth } = this.props;

    return (
      <div className="register-container">
        <RegisterForm userInfo={auth} />
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Register);
