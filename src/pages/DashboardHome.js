import React from 'react'
import styled from 'styled-components'
import DoughnutChart from '../charts/DoughnutChart'
import StackedBar from '../charts/StackedBar'
import LineChart from '../charts/LineChart'

import { upcomingData } from '../data/dashboard'
import DueTasks from '../components/DueTasks'
import Weather from '../components/Weather'

const DashboardHome = () => {
  return (
    <Wrapper>
      <div className='abc'>
        <Weather />
        <DueTasks />
      </div>
        <div className='abc'>
          <DoughnutChart />
          <StackedBar />
        </div>
        <div className='abc'>
          <LineChart />
          <div className='tasks-box'>
            <h2 className='div-title'>Upcoming week</h2>
            <ul className='upcoming-tasks'>
              {
                upcomingData.map((data, index) => {
                  return (
                    <li className='upcoming-task' key={data}>
                    <span>{index + 1}.</span> {data}
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
.abc {
  display: grid;
  gap: 40px 20px;
  margin-bottom: 2.5rem;
}
  .chart {
    display: grid;
    place-items: center;
    max-width: 400px;
  }
  .chart-title {
    text-align: center;
    margin-bottom: 1rem;
  }
  
@media (min-width: 768px) {
  .abc {
    grid-template-columns: 50% 50%;
    gap: 20px;
    margin-bottom: 5rem;
  }
  .chart {
    display: block;
  }
}
@media (min-width: 992px) {
  .abc {
    grid-template-columns: auto auto;
    gap: 50px;
  }
}
.upcoming-task {
  text-transform: capitalize;
  font-size: 24px;
  line-height: 120%;
  margin-bottom: 1rem;
}
`
export default DashboardHome