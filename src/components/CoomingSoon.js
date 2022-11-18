import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const CoomingSoon = () => {
  return (
    <Wrapper>
        <div>
            <h1>cooming soon</h1>
            <p>This service is underdevelopment...</p>
            <Link className='btn' to={'/dashboard'}>Back to dashboard</Link>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
text-align: center;
padding-top: 100px;
h1 {
    color: var(--deep-green);
    text-transform: uppercase;
    font-size: 2rem;
    margin-bottom: 2rem;
}
p {
    font-size: 1.5rem;
}
a {
    display: block;
    font-size: 1.2rem;
    font-weight: 900;
    color: var(--light-green);
}
`

export default CoomingSoon