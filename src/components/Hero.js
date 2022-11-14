import React from 'react'
import styled from 'styled-components'
import heroImg from '../images/hero.png'

const Hero = () => {
  return (
    <section>
        <Wrapper className='page-center'>
            <article className='hero-text'>
                <h1>
                    Get Quick And Fast,<br />
                    Plant Diagnosis <br />
                    At Your Fingertips. <br/>
                </h1>
                <p>
                    We provide easy and quick access to botanist consultants for diagnosis of plants’ diseases, for cure, control and prevention.
                </p>
                <div className='hero-btns'>
                    <button className='btn hero-btn'>get started</button>
                    <button className='btn hero-btn'>learn more</button>
                </div>
            </article>
            <div className='img-container'>
                <div className='orange-circle'>
                    <img className='farmer' src={heroImg} />
                </div>
            </div>
        </Wrapper>
    </section>
  )
}
const Wrapper = styled.div`
h1, p {
    letter-spacing: 0.15em;
}
.hero-text {
    max-width: 350px;
}
.img-container {
    padding: 50px 30px;
    background-color: var(--light-green);
}
.orange-circle {
    background-color: #CCFF33;
    border-radius: 50%;
    max-width: 400px;
    max-height: 400px;
    padding: 30px;
}
@media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
}
`
export default Hero