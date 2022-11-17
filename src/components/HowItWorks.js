import React from 'react'
import styled from 'styled-components'

import { FaStethoscope } from 'react-icons/fa'
import { BsCamera } from 'react-icons/bs'
import {BiMessageRounded} from 'react-icons/bi'

const HowItWorks = ({abc}) => {
  return (
    <Wrapper ref={abc}>
        <h1>
            HOW IT WORKS
        </h1>
        <h2>
            Effective plant intervention and care in one click. Follow these steps to get started on Smart Farm Tools.
        </h2>
        <div>
            <article>
                <span className='icon'><BsCamera /></span>
                <h3>Snap diseased plant</h3>
                <p>
                    Send a snapshot of any diseased plant through your dashboard and get prompt diagnosis.
                </p>
            </article>
            <article>
                <span className='icon'><BiMessageRounded /></span>
                <h3>Chat with an Expert</h3>
                <p>
                    Have a chat with our Botanist Consultants via the chat feature for prompt plant care.
                </p>
            </article>
            <article>
                <span className='icon'><FaStethoscope/></span>
                <h3>Maintain a healthy farm</h3>
                <p>
                    Enjoy your disease-free farm by keeping up to date through our timely detailed informations.
                </p>
            </article>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
--grid-column: 2;
width: 90%;
margin: auto;
padding-block: 2rem 3rem;
h1 {
    color: var(--deep-green);
    text-align: center;
}
h2 {
    margin-block: 1.5rem .75rem;
    color: var(--lighter-green);
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 0.045em;
}
div {
        display: grid;
        justify-content: center;
    }
article {
    max-width: 250px;
    text-align: center;
    h3 {
        color: var(--light-green);
        font-size: 20px;
    }
}
.icon {
    display: inline-block;
    margin-bottom: .5rem;
    padding: 10px;
    border-radius: 10px;
    background-color: var(--deep-green);
    svg {
        color: var(--white);
        font-size: 50px;
    }
}
@media (min-width: 576px) {
    div {
        justify-content: stretch;
        grid-template-columns: repeat(var(--grid-column), auto);
    }
}
@media (min-width: 768px) {
    width: 100%;
    padding-left: 50px;
}
@media (min-width: 992px) {
    --grid-column: 3;
}
`

export default HowItWorks