import React from 'react'
import { 
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'

import { Bar } from 'react-chartjs-2'

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
        position: 'bottom',
        labels: {
            boxWidth: 12,
            boxHeight: 12,
            useBorderRadius: true,
            borderRadius: 6,
        }
      }
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
        // display: false,
      },
      y: {
        stacked: true,
        display: false,
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
            borderWidth: 0,
            borderColor: 'transparent',
            barPercentage: 0.15,
            borderRadius: 5
        },
        {
            label: 'Totato',
            data: [10, 25, 20, 10, 20, 18],
            backgroundColor: '#79D2DE',
            borderWidth: 0,
            borderColor: 'transparent',
            barPercentage: 0.15,
            borderRadius: 5
            
        },
        {
            label: 'Maize',
            data: [10, 10, 5, 10, 10, 5],
            backgroundColor: '#EC6666',
            borderWidth: 0,
            borderColor: 'transparent',
            barPercentage: 0.15,
            borderRadius: 5
        },
    ]
}

const StackedBar = () => {
  return (
    <article className='chart-box'>
        <h2 className='chart-title'>Harvest from Jan-Jun</h2>
        <div className='chart'>
            <Bar
                options={options}
                data={data}
            />
        </div>
    </article>
  )
}

export default StackedBar