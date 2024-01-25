import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: [],
  datasets: [
    {
      label: 'Prix',
      data: [],
      fill: false,
      borderColor: 'rgb(255, 99, 132)',
      tension: 0.1
    }
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true
    }
  }
};

const PriceChart = () => (
  <>
    <div className='header'>
      <h1 className='title'>Prix des actions</h1>
    </div>
    <Line data={data} options={options} />
  </>
);

export default PriceChart;
