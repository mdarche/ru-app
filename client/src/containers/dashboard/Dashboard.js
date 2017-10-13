import React, { Component } from 'react';
import MainContent from '../components/MainContent';
import Sidebar from '../components/Sidebar';

import './dashboard.css';

class Dashboard extends Component {
  render() {
    return (
      <div id="content-wrapper" className="grid">
        <MainContent>Test</MainContent>
        <Sidebar>Test</Sidebar>
      </div>
    );
  }
}

export default Dashboard;
