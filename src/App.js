import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './common.css';
import './bootstrap.css';
import Dashboard from './dashboard/Dashboard';
import MainSidebar from './component/common/MainSidebar';


function App() {
  return (
    <div className="App">
      <MainSidebar/>
      <div className="content">
        <Dashboard/>
      </div>
    </div>
  );
}

export default App;
