import React from 'react';
import './dashboard.css';
import { Line } from 'react-chartjs-2';

function Dashboard() {
  let props = {
    pie_chart: {
      header: 'Pie Chart',
      body: '차트 나올예정'
    },
    line_chart: {
      header: 'Line Chart',
      body: '차트 나올예정'
    }
  }


  return (
    <div className="db-container">
      <div className="row">
        <div className="col-4">
          <PieChart header={props.pie_chart.header} body={props.pie_chart.body}/>
        </div>
        <div className="col-4">
          <LineChart header={props.line_chart.header} body={props.line_chart.body}/>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
}

function PieChart(props) {return (
    <div className="card">
        <div className="card-header">{props.header}</div>
        <div className="card-body">
        </div>
    </div>
  );
}

var data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};

class LineChart extends React.Component {

  render() {
    return (
      <div className="card">
        <div className="card-header">{this.props.header}</div>
        <div className="card-body">
          <Line ref="chart" data={data} />
        </div>
      </div>
    );
  }

  componentDidMount() {
    const { datasets } = this.refs.chart.chartInstance.data
    console.log(datasets[0].data);
  }
}

export default Dashboard;
