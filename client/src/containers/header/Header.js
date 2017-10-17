import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SubNav from './SubNav';
import './header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <div className="navbar">
            <Link to="/dashboard">
              <div className="logo">
                <img
                  src="http://remoteu.staging.wpengine.com/wp-content/themes/remote-u/img/ru-logo-light.svg"
                  alt="remote-u"
                />
              </div>
            </Link>

            <ul className="menu-right">
              <li className="current-user">
                <div>
                  <div className="user-name">
                    <i className="fa fa-user-circle" aria-hidden="true" />
                    {this.props.auth.name.first} {this.props.auth.name.last}
                  </div>
                  <div className="user-school">{this.props.auth.school}</div>
                </div>
              </li>

              <li>
                <a className="login-btn" href="/api/logout">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <SubNav />
      </header>
    );
  }
}

export default Header;
