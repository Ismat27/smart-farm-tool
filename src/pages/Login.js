import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { SiFacebook } from 'react-icons/si'
import { FcGoogle } from 'react-icons/fc'
import NavOne from '../components/NavOne'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const nav = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    // send data to server for verification
    setEmail('')
    setPassword('')
    event.preventDefault()
    nav('/dashboard')
  }

  return (
    <>
    <NavOne/>
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
        <form onSubmit={handleSubmit}>
          <article className='form-field'>
            <label>email address</label>
            <div>
              <input
                  placeholder='Enter email address'
                  type={'email'}
                  required
                  onChange={(e) => setEmail(e.target.value)}
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
                    onChange={(e) => setPassword(e.target.value)}
                />
              </div>
          </article>
          <button className='btn proceed'>sign in</button>
        </form>
        <p>Forget password?</p>
        <p className='login'>Don't have an account? <Link to={'/signup'}>Sign up</Link> </p>
      </Wrapper>
    </>
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
.login {
    margin-top: 10px;
    font-weight: 500;
    font-size: 20px;
    display: flex;
    align-items: center;
    gap: 50px;
    a {
        color: var(--light-green)
    }
}
`

export default Login