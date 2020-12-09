import React from 'react';
import './dashboard.css';

function Dashboard() {
  return (
    <div className="db-container">
      <div className="row">
        <div className="col-4">
          <PieChart/>
        </div>
        <div className="col-4"></div>
        <div className="col-4"></div>
      </div>
    </div>
  );
}

function PieChart() {
  return (
    <div className="card">
        <div className="card-header">Pie Chart</div>
        <div className="card-body">차트 나올예정</div>
    </div>
  );
}

function LineChart() {
  return (
    <div className="card">
        <div className="card-header">Line Chart</div>
        <div className="card-body">차트 나올예정</div>
    </div>
  );
}

export default Dashboard;
