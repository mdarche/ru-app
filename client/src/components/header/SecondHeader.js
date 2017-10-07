import _ from 'lodash';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import menuItems from './menuItems';
import './secondHeader.css';

class SubHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { activeRoute: null };
  }

  click(route) {
    this.setState({ activeRoute: route });
    console.log(this.state.activeRoute);
  }

  renderMenu() {
    return _.map(menuItems, ({ label, icon, route }) => {
      return (
        <li key={label}>
          <NavLink
            {...this.props}
            to={route}
            className={route === this.state.activeRoute ? 'active' : 'inactive'}
            onClick={this.click.bind(this, route)}
          >
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
