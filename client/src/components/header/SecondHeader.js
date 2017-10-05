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
          <NavLink {...this.props} to={route} activeClassName="active">
            <i className={icon} />
            {label}
          </NavLink>
        </li>
      );
    });
  }

  render() {
    return (
      <div className="subnav">
        <ul>{this.renderMenu()}</ul>
      </div>
    );
  }
}

export default SubHeader;
