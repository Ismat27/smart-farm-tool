import React from 'react'
import NavTwo from '../components/NavTwo'
import Hero from '../components/Hero'
import styled from 'styled-components'

const Home = () => {
  return (
    <Wrapper>
      <NavTwo />
      <Hero />
    </Wrapper>
  )
}

const Wrapper = styled.div`
max-width: 1200px;
margin: auto;
background: white;
button {
  width: 200px;
  border-radius: 10px;
  border: 2px solid var(--light-green);
  color: #FFFFFF;
  background-color: var(--light-green);
  text-transform: capitalize;
  letter-spacing: 0.06em;
  font-weight: 500;
  font-size: 20px;
}
`

export default Home
