import React from 'react'
import styled from 'styled-components'
import heroImg from '../images/hero.png'

const Hero = ({getStarted}) => {

  return (
    <section>
        <Wrapper className=''>
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
                    <button className='btn hero-btn' onClick={getStarted} >get started</button>
                    <button className='btn hero-btn btn-two'>learn more</button>
                </div>
            </article>
            <div className='img-container'>
                <div className='orange-circle'>
                    <img className='farmer' alt='farmer' src={heroImg} />
                </div>
            </div>
        </Wrapper>
    </section>
  )
}
const Wrapper = styled.div`
width: 90%;
margin: auto;
h1 {
    font-size: 25px;
    line-height: 30px;
    letter-spacing: 0.15em;
    color: var(--light-green);
    margin-top: 20px;
}
.hero-btns {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
}
.img-container {
    padding: 50px 30px;
    background-color: var(--light-green);
    display: grid;
    place-items: center;
}
.orange-circle {
    background-color: #CCFF33;
    border-radius: 50%;
    max-width: 400px;
    max-height: 400px;
    padding: 30px;
}
@media (min-width: 576px) {
    br {
        display: none;
    }
}
@media (min-width: 768px) {
    padding-left: 50px;
    width: 100%;
    display: grid;
    align-items: stretch;
    grid-template-columns: 40% 60%;
    grid-template-columns: 50% 50%;
    h1 {
        font-weight: 600;
        font-size: 20px;
        line-height: 50px;
    }
    .hero-text {
        max-width: 350px;
        padding-block: 50px;
    }
    br {
        display: inline;
    }
}

@media (min-width: 992px) {
    h1 {
        font-size: 25px;
    }
}
`
export default Hero