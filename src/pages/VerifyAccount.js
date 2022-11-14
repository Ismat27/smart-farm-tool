import React from 'react'
import styled from 'styled-components'
import { BsFillCameraFill, BsPersonFill } from 'react-icons/bs'
import NavOne from '../components/NavOne'

const VerifyAccount = () => {
  return (
    <>
        <NavOne />
        <Wrapper className='form-section'>
            <h1>Let's get to know you better. Verify your identity.</h1>
            <form>

                <article className='form-field'>
                    <label htmlFor='phone-number'><h2>Phone Number</h2></label>
                    <div className='phone-collector'>
                        <select>
                            <option>+234</option>
                        </select>
                        <input id='phone-number' type={'text'}/>
                    </div>
                </article>
                <article className='form-field'>
                    <label htmlFor='ninNumber'><h2>Your NIN</h2></label>
                    <div>
                    <input
                        style={{fontSize: '20px'}}
                        placeholder='******************************'
                        max={12}
                        type={'password'}
                        name='ninNumber'
                        id='ninNumber'
                        required
                    />
                    </div>
                </article>
                <h2>Upload NIN slip</h2>
                <div className='nins'>
                    <article className='nin'>
                        <label className='upload-lab'>
                            <BsFillCameraFill />
                            <p>Drag document here or browse to upload</p>
                            <input 
                                type={'file'}
                                className='file-input'
                            />
                        </label>
                    </article>
                    <article className='nin'>
                        <label className='upload-lab'>
                            <BsFillCameraFill />
                            <p>Drag document here or browse to upload</p>
                            <input 
                                type={'file'}
                                className='file-input'
                            />
                        </label>
                    </article>
                </div>
                <p className='nin-req'>We require you to upload both sides of your document</p>
                <h2>Upload Selfie</h2>
                <div className='selfie-container'>
                    <article className='selfie-upload'>
                        <label className='upload-lab'>
                            <input 
                                className='file-input'
                                name='selfie'
                                type={'file'}

                            />
                            <BsPersonFill />
                        </label>
                    </article>
                    <p>Tap icon to start</p>
                </div>
                <button className='btn form-submit'>submit</button>
            </form>
        </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
h1 {
    margin-bottom: 40px;
    text-align: left;
}
.file-input {
    display: none;
}
.upload-lab {
    cursor: pointer;
    svg {
        font-size: 40px;
        color: var(--light-green)
    }
}
.form-field {
    max-width: 450px;
    div {
        border-radius: 0;
        margin-top: 10px;
    }
    margin-bottom: 40px;
}
.phone-collector {
    display: flex;
    select {
        flex-basis: 80px;
    }
}
.nins {
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
    align-items: center;
    margin-block: 20px;
}
.nin {
    padding: 50px 5px;
    width: 300px;
    text-align: center;
    border-radius: 10px;
    border: 2px solid var(--light-green);
    p {
        margin-top: 10px;
        font-size: 16px;
    }
}
.nin-req {
    color: var(--grey-one);
    text-align: center;
    margin-bottom: 60px;
}
.selfie-container {
    margin-block: 20px 60px;
    display: flex;
    align-items: center;
    gap: 40px;
    p {
        color: var(--grey-one);
    }
}
.selfie-upload {
    display: grid;
    place-items: center;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 2px solid var(--light-green);
}
@media (min-width: 600px) {
    .nins {
        flex-direction: row;
        justify-content: space-between;
    }
}
`

export default VerifyAccount