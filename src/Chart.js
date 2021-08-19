import React from 'react';
import { Line } from 'react-chartjs-2';
import datafile from "./datas/data.json"

const dayMoney = datafile[0];
const skiped = ['worst', 'best', 'total', 'time'];

const additionalData = Object.keys(dayMoney).filter(info => !skiped.includes(info)).map(money => {
    return {
        label: money,
        data: datafile.map(moment => moment[money].std),
        fill: false,
        backgroundColor: 'rgb(110, 120, 110)',
        borderColor: 'rgba(110, 120, 110, 0.2)',
    }; 
});

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
        backgroundColor: 'rgb(0, 180, 0)',
        borderColor: 'rgba(0, 180, 0, 0.2)',
    },
    {
        label: '% du total',
        data: datafile.map(moment => moment.total?.std),
        fill: {
            target: 'origin',
            above: 'rgb(0, 255, 0, 0.5)',   // Area will be red above the origin
            below: 'rgb(255, 0, 0, 0.5)'    // And blue below the origin
          },
        backgroundColor: 'rgb(0, 255, 0)',
        borderColor: 'rgba(0, 255, 0)',  
    },
    ...additionalData
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
    <div className='header'>
      <h1 className='title'>MONEY MONEY DURING THE DAY</h1>
    </div>
    <Line data={data} options={options} />
  </>
);

export default LineChart;