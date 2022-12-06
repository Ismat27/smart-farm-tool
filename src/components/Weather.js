import React from 'react'
import styled from 'styled-components'
import weatherImage from '../images/weather.png'


const Weather = () => {
  return (
    <Wrapper>
        <h2>Weather for this week</h2>
        <img src={weatherImage} alt='weather' />
    </Wrapper>
  )
}

const Wrapper = styled.div`
h2 {
    text-transform: capitalize;
    font-weight: 500;
    font-size: 28px;
    margin-bottom: 1rem;
}
`

export default Weather