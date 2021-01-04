import React from 'react';
import './Dashboard.css';
import LineChart from '../component/charts/Line';
import PieChart from '../component/charts/Pie';
import StackedBar from '../component/charts/StackedBar';
import VerticalBar from '../component/charts/VerticalBar';
import DoughnutChart from '../component/charts/Doughnut';
import GroupedBar from '../component/charts/GroupedBar';


function Dashboard() {
  let props = {
    pie_chart: {
      header: 'Pie Chart',
    },
    dounut_pie_chart: {
      header: 'Doughnut Pie Chart',
    },
    line_chart: {
      header: 'Line Chart',
    },
    vertical_bar_chart: {
      header: 'VerticalBar Chart',
    },
    stacked_bar_chart: {
      header: 'StackedBar Chart',
    },
    grouped_bar_chart: {
      header: 'GroupedBar Chart',
    }
  }


  return (
    <div className="db-container">
      <div className="row mb15">
        <div className="col-6">
          <div className="card">
            <div className="card-header">{props.pie_chart.header}</div>
            <div className="card-body">
              <PieChart/>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="card">
            <div className="card-header">{props.dounut_pie_chart.header}</div>
            <div className="card-body">
              <DoughnutChart/>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb15">
        <div className="col-6">
          <div className="card">
            <div className="card-header">{props.line_chart.header}</div>
            <div className="card-body">
              <LineChart/>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="card">
            <div className="card-header">{props.vertical_bar_chart.header}</div>
            <div className="card-body">
              <VerticalBar/>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb15">
        <div className="col-6">
          <div className="card">
            <div className="card-header">{props.stacked_bar_chart.header}</div>
            <div className="card-body">
              <StackedBar/>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="card">
            <div className="card-header">{props.grouped_bar_chart.header}</div>
            <div className="card-body">
              <GroupedBar/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;