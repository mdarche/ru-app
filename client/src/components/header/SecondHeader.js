import _ from 'lodash';
import React, { Component } from 'react';
import menuItems from './menuItems';
import './secondHeader.css';

class SubHeader extends Component {
  renderMenu() {
    return _.map(menuItems, ({ label, icon }) => {
      return (
        <li>
          <i className={icon} />
          {label}
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
