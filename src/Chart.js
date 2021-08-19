import React from 'react';
import { Line } from 'react-chartjs-2';
import datafile from "./datas/data.json"

const data = {
  labels: datafile.map((moment, index) => moment.time ? moment.time : index),
  datasets: [
    {
      label: '% du worst',
      data: datafile.map(moment => moment.worst.std),
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    },
    {
        label: '% du best',
        data: datafile.map(moment => moment.best.std),
        fill: false,
        backgroundColor: 'rgb(0, 99, 132)',
        borderColor: 'rgba(0, 99, 132, 0.2)',
    },
    {
        label: '% du total',
        data: datafile.map(moment => moment.total?.std),
        fill: true,
        backgroundColor: 'rgb(0, 255, 0)',
        borderColor: 'rgba(0, 255, 0)',  
    }
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