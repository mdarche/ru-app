import React, { Component } from 'react';

class Sidebar extends Component {
  render() {
    return (
      <div className="col-4_sm-12">
        <div className="sidebar">{this.props.children}</div>
      </div>
    );
  }
}

export default Sidebar;
