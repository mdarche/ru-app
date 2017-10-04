import React, { Component } from 'react';
import { connect } from 'react-redux';
import './header.css';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a className="login-btn" href="/auth/google">
              Login
            </a>
          </li>
        );
      default:
        return [
          <li key="1">
            <i className="fa fa-user-circle" aria-hidden="true" />
            {this.props.auth.name.first} {this.props.auth.name.last}
          </li>,
          <li key="2">
            <a className="login-btn" href="/api/logout">
              Logout
            </a>
          </li>
        ];
    }
  }

  render() {
    return (
      <nav>
        <div className="navbar">
          <div className="logo">
            <img
              src="http://remoteu.staging.wpengine.com/wp-content/themes/remote-u/img/ru-logo-light.svg"
              alt="remote-u"
            />
          </div>
          <ul className="menu-right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
