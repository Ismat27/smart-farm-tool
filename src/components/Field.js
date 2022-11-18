import React from 'react'
import styled from 'styled-components'
import field from '../images/field.png'

const Field = ({getStarted}) => {
  return (
    <Wrapper>
        <img alt='field' src={field} />
        <article>
            <p>
                We proudly work with the best Botanist consultants. We provide innovative care, control measures and timely diagnosis to ensure you have a successful and booming farm!
            </p>
            <button onClick={getStarted} className='btn action-btn'>get started</button>
        </article>
    </Wrapper>
  )
}

const Wrapper = styled.div`
width: 90%;
margin: auto;
margin-block: 40px;
button {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

@media (min-width: 768px) {
  padding-left: 50px;
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  img {
    width: 600px;
  }
  article {
    padding-left: 10px;
    max-width: 350px;
  }
}

@media (min-width: 992px) {
  
}
`

export default Field