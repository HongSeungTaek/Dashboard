import React from 'react';
import './MainSidebar.css';


class MainSidebar extends React.Component {

  render() {
    return (
      <div className="main-sidebar">
        <div className="ms-header">헤드</div>
        <div className="ms-info">바디</div>
        <div className="ms-menu-list">바텀</div>
      </div>
    );
  }
}

export default MainSidebar;