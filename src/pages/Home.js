import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import NavTwo from '../components/NavTwo'
import Hero from '../components/Hero'
import styled from 'styled-components'
import Field from '../components/Field'
import HowItWorks from '../components/HowItWorks'
import Testimonials from '../components/Testimonials'
import About from '../components/About'

const Home = () => {
  const nav = useNavigate()
  const getStarted = () => {
    nav('/signup')
  }
  const scrollRef = useRef(null)
  const scrollDown = () => {
    scrollRef.current.scrollIntoView({behavior: 'smooth'})
  }
  return (
    <Wrapper>
      <NavTwo />
      <Hero getStarted={getStarted} learmMore={scrollDown} />
      <Field getStarted={getStarted} />
      <HowItWorks abc={scrollRef} />
      <Testimonials />
      <About getStarted={getStarted} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
max-width: 1000px;
margin: auto;
background: white;
.section-title {
  text-align: center;
  color: var(--deep-green);
  text-transform: capitalize;
  margin-bottom: 50px;
  font-size: 36px;
  ${'' /* font-weight: 900; */}
}
.box {
  border-radius: 10px;
  border: 2px solid var(--light-green);
}
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
