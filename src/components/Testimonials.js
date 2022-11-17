import React from 'react'
import styled from 'styled-components'
import testimonials from '../data/testimonials'

const Testimonials = () => {
  return (
    <Wrapper>
        <h1 className='section-title'>Testimonials</h1>
        <div>
            {
                testimonials.map(({image, name, location, text}) => {
                    return (
                        <article key={name}>
                            <img alt={name} src={image} />
                            <h3>
                                <span>{name}, {location}</span>
                            </h3>
                            <p>{text}</p>
                        </article>
                    )
                })
            }
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
--grid-column: 1;
--grid-template-columns: repeat(var(--grid-column), auto);
text-align: center;
width: 90%;
margin: auto;
padding-block: 4rem;
div {
    display: grid;
    grid-template-columns: var(--grid-template-columns);
    justify-content: center;
    gap: 25px;
}
h3 {
    color: var(--light-green);
    text-transform: capitalize;
    margin-top: 5px;
}
p {
    font-size: 16px;
    line-height: 20px;
}
@media (min-width: 576px) {
    --grid-column: 2;
    div {
        justify-content: stretch;
    }
}
@media (min-width: 768px) {
    --grid-column: 2;
    width: 100%;
    padding-left: 50px;
    padding-right: 50px;
}
@media (min-width: 992px) {
    --grid-column: 4;
}

`
export default Testimonials