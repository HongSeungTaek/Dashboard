import React from 'react';
import './MainSidebar.css';


class MainSidebar extends React.Component {

  render() {
    return (
      <div className="main-sidebar">
        <div className="ms-header">Dashboard</div>
        <div className="ms-info">
          <ul>
            <li>
              <a>사용자 관리</a>
            </li>
          </ul>
        </div>
        <div className="ms-menu-list">바텀</div>
      </div>
    );
  }
}

export default MainSidebar;