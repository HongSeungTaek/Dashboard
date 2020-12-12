import React from 'react';
import './Dashboard.css';
import LineChart from '../component/charts/Line';
import PieChart from '../component/charts/Pie';
import StackedBar from '../component/charts/Bar';


function Dashboard() {
  let props = {
    pie_chart: {
      header: 'Pie Chart',
    },
    line_chart: {
      header: 'Line Chart',
    },
    bar_chart: {
      header: 'Bar Chart',
    }
  }


  return (
    <div className="db-container">
      <div className="row">
        <div className="col-4">
          <div className="card">
            <div className="card-header">{props.pie_chart.header}</div>
            <div className="card-body">
              <PieChart/>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card">
            <div className="card-header">{props.line_chart.header}</div>
            <div className="card-body">
              <LineChart/>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card">
            <div className="card-header">{props.bar_chart.header}</div>
            <div className="card-body">
              <StackedBar/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;