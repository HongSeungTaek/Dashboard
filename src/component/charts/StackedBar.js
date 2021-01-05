import React from 'react';
import { Bar } from 'react-chartjs-2';


const data = {
  labels: ['1.1', '1.2', '1.3', '1.4', '1.5', '1.6'],
  datasets: [
    {
      label: '국내',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: 'rgb(255, 99, 132)',
    },
    {
      label: '해외',
      data: [2, 3, 20, 5, 1, 4],
      backgroundColor: 'rgb(54, 162, 235)',
    },
  ],
}

const options = {
  scales: {
    yAxes: [
      {
        stacked: true,
        ticks: {
          beginAtZero: true,
        },
      },
    ],
    xAxes: [
      {
        stacked: true,
      },
    ],
  },
}

class StackedBar extends React.Component {

  render() {
    return (
      <Bar data={data} options={options} />
    );
  }
}

export default StackedBar;