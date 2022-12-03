import React from 'react';
import { 
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Doughnut} from 'react-chartjs-2';
import {cropsData} from '../data/dashboard'

ChartJs.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const values = cropsData.map(d => d.value)
const labels = cropsData.map(d => d.label)

const options = {
  plugins: {
    title: {
      display: false,
      text: '',
    },
    legend: {
      position: 'bottom',
      labels: {
        boxWidth: 10,
        useBorderRadius: true,
        boxHeight: 10,
        borderRadius: 5,
      },
    }
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
      display: false,
    },
    y: {
      stacked: true,
      display: false,
    },
  },
  maintainAspectRatio: false
};

const state = {
  labels: labels,
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: [
        '#147AD6',
        '#79D2DE',
        '#EC6666',
      ],
      hoverBackgroundColor: [
      '#147AD6',
      '#79D2DE',
      '#EC6666',
      ],
      data: values
    }
  ]
}

const DoughnutChart = () => {
    return (
      <article className='chart-box'>
        <h2 className='chart-title'>Crops in the field</h2>
        <div className='chart'>
          <Doughnut
            data={state}
            options={options}
          />
        </div>
      </article>
    );
}

export default DoughnutChart