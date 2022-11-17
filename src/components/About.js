import React from 'react'
import styled from 'styled-components'
import lady from '../images/lady.png'
import aboutImg from '../images/about-img.png'

const About = ({ getStarted }) => {
  return (
    <Wrapper>
        <h1 className='section-title'>About Us</h1>
        <div className='about-container'>
            <img alt='garden' src={aboutImg} />
            <article>
                <h2>
                    We are Smart Farm Tools, Your most reliable Farm Clinic.
                </h2>
                <p>
                    We help you detect plant diseases, recommend solutions to ensure you get a cure.
                </p>
                <p>
                    We also refer you to Botanists who will assist you in  getting that healthy farm you deserve.
                </p>
                <p>
                We proudly work with the best Botanist consultants. We provide innovative care, control measures and timely diagnosis to ensure you have a successful and booming farm!
                </p>
            </article>
        </div>
        <div className='box'>
            <article>
                <h2>
                    Don't let diseases and pest ruin your harvest year.
                </h2>
                <p>
                    Gain access to prompt and accurate diagnosis for plants diseases; and expert care for prevention and control. 
                </p>
                <button onClick={getStarted} className='btn'>get started</button>
            </article>
            <img alt='lady-farmer' src={lady} />
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
width: 90%;
margin: auto;
padding-bottom: 50px;
h2 {
    font-weight: 400;
    font-size: 30px;
    line-height: 40px;
    letter-spacing: 0.045em;
    color: var(--light-green);
}
.box {
    margin-top: 50px;
    display: flex;
    flex-direction: column-reverse;
    h2 {
        color: #000000;
    }
    padding: 10px;
}
button {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
}
@media (min-width: 576px) {
    .box {
        display: grid;
        grid-template-columns: 50% 50%;
  }
}
@media (min-width: 768px) {
    padding-bottom: 100px;
    .about-container {
        display: grid;
        grid-template-columns: 50% 50%;
        article {
            padding-left: 25px;
            ${'' /* max-width: 350px; */}
        }
  }
  .box {
    margin-top: 100px;
    display: grid;
    grid-template-columns: 50% 50%;
  }
  padding-left: 50px;
  padding-right: 50px;
  width: 100%;
}

@media (min-width: 992px) {
  
}
`

export default About