import React, { Component } from 'react';

class MainContent extends Component {
  render() {
    const column = this.props.size === 'full' ? 'col-12' : 'col-8_sm-12';

    return (
      <div className={column}>
        <div className="main-content">{this.props.children}</div>
      </div>
    );
  }
}

export default MainContent;
