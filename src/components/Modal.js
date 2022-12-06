import React from 'react'
import styled from 'styled-components'
import { IoCheckmarkCircleOutline } from 'react-icons/io5'

const Modal = ({text, btnText, closeFunc}) => {
  return (
    <Wrapper>
        <div className='modal-card'>
            <div className='icon-container'>
                <span>
                    <IoCheckmarkCircleOutline />
                </span>
            </div>
            <article>
                <h3>Successful!</h3>
                <p>{text}</p>
                <button className='form-submit' onClick={closeFunc}>{btnText}</button>
            </article>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
position: fixed;
left:0;
top: 0;
width: 100vw;
height: 100vh;
display: grid;
place-items: center;
background-color: rgba(28, 28, 27, 0.7);
text-align: center;
.modal-card {
    width: 90%;
    max-width: 375px;
    border-radius: 15px;
}
.icon-container {
    background-color: var(--light-green);
    padding-block: 1.5rem;
}
svg {
    color: white;
    font-size: 100px;
}
article {
    background-color: white;
    padding-block: 1.5rem;
}
p {
    font-weight: 500;
    line-height: 33px;
    letter-spacing: 0.045em;
    padding-block: 1rem;

}
button {
    max-width: 100px;
    margin: auto;
    padding-block: .5rem;
}
`

export default Modal