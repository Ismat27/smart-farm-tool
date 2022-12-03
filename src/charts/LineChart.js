import React from 'react'
import { 
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js/auto'

import { Line, Chart } from 'react-chartjs-2'

ChartJs.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const options = {
  plugins: {
    title: {
      display: false,
      text: '',
    },
    legend: {
      position: 'right',
      labels: {
        boxWidth: 16,
        useBorderRadius: true,
        boxHeight: 16,
        borderRadius: 8,
      }
    }
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
  maintainAspectRatio: false
};

const labels = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun' ]

const data = {
    labels,
    datasets: [
        {
            label: 'Potato',
            data: [5, 10, 15, 5, 10, 12],
            backgroundColor: '#147AD6',
            borderColor: '#147AD6',
            borderWidth: 2
        },
        {
            label: 'Totato',
            data: [10, 25, 20, 10, 20, 18],
            backgroundColor: '#79D2DE',
            borderColor: '#79D2DE',
            borderWidth: 2
            
        },
        {
            label: 'Maize',
            data: [10, 10, 5, 10, 10, 5],
            backgroundColor: '#EC6666',
            borderColor: '#EC6666',
            borderWidth: 2
        },
    ]
}
const LineChart = () => {
  return (
    <article className='chart-box'>
      <h2 className='chart-title'>Profit analysis</h2>
      <div className='chart'>
        <Line
          options={options}
          data={data}
        />
      </div>
    </article>
  )
}

export default LineChart