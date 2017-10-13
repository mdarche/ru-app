import _ from 'lodash';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import menuItems from './menuItems';
import './secondHeader.css';

class SubHeader extends Component {
  renderMenu() {
    return _.map(menuItems, ({ label, icon, route }) => {
      return (
        <li key={label}>
          <NavLink to={route}>
            <i className={icon} />
            <span className="menu-text">{label}</span>
          </NavLink>
        </li>
      );
    });
  }

  render() {
    return (
      <div className="subnav">
        <NavLink to="/courses">
          <div className="course-menu">
            <div>
              <div className="course-type">
                <span className="menu-text">Course</span>
              </div>
              <div className="course-selection">
                <i className="fa fa-pencil-square-o" aria-hidden="true" />
                <span className="menu-text">
                  Web Design <span className="arrow">&#8250;</span>
                </span>
              </div>
            </div>
          </div>
        </NavLink>
        <ul>{this.renderMenu()}</ul>
        <NavLink to="/settings">
          <div className="settings-menu">
            <i className="fa fa-cog" aria-hidden="true" />
            <span className="menu-text">Settings</span>
          </div>
        </NavLink>
      </div>
    );
  }
}

export default SubHeader;
