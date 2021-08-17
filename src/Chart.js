import React from 'react';
import { Line } from 'react-chartjs-2';
import datafile from "/Users/abetv/repositories/chart-bot/src/datas/data.json"

const data = {
  labels: datafile.map((moment, index) => index),
  datasets: [
    {
      label: '% de dif',
      data: datafile.map(moment => moment.worst.std),
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
};



const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: false,
        },
      },
    ],
  },
};

const LineChart = () => (
  <>
  { console.log(datafile)}
    <div className='header'>
      <h1 className='title'>MONEY MONEY DURING THE DAY</h1>
    </div>
    <Line data={data} options={options} />
  </>
);

export default LineChart;