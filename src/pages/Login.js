import React from 'react'
import styled from 'styled-components'
import { SiFacebook } from 'react-icons/si'
import { FcGoogle } from 'react-icons/fc'

const Login = () => {
  return (
    <Wrapper className='form-section'>
    <h1>sign into your account</h1>
    <div className='alt-btns'>
      <button className='btn google-btn'><FcGoogle/>Sign in with Google</button>
      <button className='btn fb-btn'><SiFacebook/>Sign in with Facebook</button>
    </div>
    <div className='alt'>
        <p></p>
        <span>OR</span>
        <p></p>
    </div>
      <form>
        <article className='form-field'>
          <label>email address</label>
          <div>
            <input
                placeholder='Enter email address'
                type={'email'}
                required
            />
          </div>
        </article>
        <article className='form-field'>
            <label>password</label>
            <div>
              <input
                  placeholder='Enter password'
                  type={'password'}
                  required
              />
            </div>
        </article>
        <button className='btn proceed'>sign in</button>
      </form>
      <p>Forget password?</p>
    </Wrapper>
  )
}

const Wrapper = styled.section`
h1 {
  margin-bottom: 50px;
}
.alt {
    color: #BDBDBD;
    max-width: 500px;
    margin: 20px auto;
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    span {
        font-weight: 700;
    }
    p {
        width: 45%;
        background: #BDBDBD;
        height: 1px
    }
}
.alt-btns {
  max-width: 400px;
  margin: auto;
  margin-bottom: 30px;
  .google-btn {
      background-color: #4286F4;
      svg {
          background-color: white;
      }
  }
}
form + p {
  margin-top: 10px;
  font-size: 18px;
  color: var(--light-green)
}
`

export default Login