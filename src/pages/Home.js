import React from 'react'
import { useNavigate } from 'react-router-dom'
import NavTwo from '../components/NavTwo'
import Hero from '../components/Hero'
import styled from 'styled-components'
import Field from '../components/Field'
import HowItWorks from '../components/HowItWorks'

const Home = () => {
  const nav = useNavigate()
  const getStarted = () => {
    nav('/signup')
  }
  return (
    <Wrapper>
      <NavTwo />
      <Hero getStarted={getStarted} />
      <Field getStarted={getStarted} />
      <HowItWorks />
    </Wrapper>
  )
}

const Wrapper = styled.div`
max-width: 900px;
margin: auto;
background: white;
p {
    font-weight: 500;
    line-height: 30px;
    letter-spacing: 0.15em;
    color: #121212;
    margin-block: 20px;
}
button, .btn-two:hover {
  width: 200px;
  border-radius: 10px;
  border: 2px solid var(--light-green);
  color: #FFFFFF;
  background-color: var(--light-green);
  text-transform: capitalize;
  letter-spacing: 0.06em;
  font-weight: 500;
  font-size: 18px;
}

.btn-two, button:hover  {
  color: var(--light-green);
  background-color: #FFFFFF;
}

`

export default Home
