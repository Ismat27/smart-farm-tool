import React from 'react'
import styled from 'styled-components'
import heroImg from '../images/hero.png'

const Hero = () => {
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
width: 90%;
margin: auto;
h1 {
    font-size: 25px;
    line-height: 30px;
    letter-spacing: 0.15em;
    color: var(--light-green);
    margin-top: 20px;
}
p {
    font-weight: 500;
    line-height: 30px;
    letter-spacing: 0.15em;
    color: #121212;
    margin-block: 20px;
}
.hero-text {
    max-width: 350px;
}
.hero-btns {
    display: flex;
    flex-direction: column;
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
@media (min-width: 768px) {
    padding-left: 50px;
    width: 100%;
    display: grid;
    grid-template-columns: 40% 60%;
    h1 {
        margin-top: 80px;
        font-weight: 600;
        font-size: 20px;
        line-height: 30px;
    }
}

@media (min-width: 992px) {
    padding-left: 50px;
    display: grid;
    grid-template-columns: 40% 60%;
    h1 {
        font-size: 30px;
        line-height: 50px;
    }
    .hero-btns {
        flex-direction: row;
    }
}
`
export default Hero