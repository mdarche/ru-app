import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SecondHeader from './SecondHeader';
import './header.css';

class Header extends Component {
  renderMenu() {
    if (this.props.auth) {
      return (
        <nav>
          <div className="navbar">
            <Link to={this.props.auth ? '/dashboard' : '/'}>
              <div className="logo">
                <img
                  src="http://remoteu.staging.wpengine.com/wp-content/themes/remote-u/img/ru-logo-light.svg"
                  alt="remote-u"
                />
              </div>
            </Link>
            <ul className="menu-right">
              <li>
                <i className="fa fa-user-circle" aria-hidden="true" />
                {this.props.auth.name.first} {this.props.auth.name.last}
              </li>
              <li>
                <a className="login-btn" href="/api/logout">
                  Logout
                </a>
              </li>
            </ul>
          </div>
          <SecondHeader />
        </nav>
      );
    }
  }

  render() {
    return <header>{this.renderMenu()}</header>;
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
