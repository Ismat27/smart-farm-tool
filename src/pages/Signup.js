import React, { useState } from 'react'
import styled from 'styled-components'
import AccountType from '../components/AccountType'
import NavOne from '../components/NavOne'

import { SiFacebook } from 'react-icons/si'
import { FcGoogle } from 'react-icons/fc'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {

    const nav = useNavigate()

    const [accountType, setAccountType] = useState('farmer')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [designation, setDesignation] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (password !== password2) {
            alert('passwords do not match')
            return
        }
        nav('/verify-account');
    }

  return (
    <>
        <NavOne />
        <Wrapper className='form-section'>
            <h1>create an account</h1>
            <AccountType accountType={accountType} setAccountType={setAccountType} />
            <form onSubmit={handleSubmit}>
                <article className='form-field'>
                    <label>full name</label>
                    <div>
                        <input
                            placeholder='Enter full name'
                            required
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                </article>
                <article className='form-field'>
                    <label>email address</label>
                    <div>
                        <input
                            placeholder='Enter email address'
                            type={'email'}
                            required
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                </article>
                {
                accountType === 'expert' &&
                <article className='form-field'>
                    <label htmlFor='designation'>designation</label>
                    <div>
                        <select 
                            id='designation' 
                            onChange={e => setDesignation(e.target.value)}
                        >
                            <option value={''}>select designation</option>
                        </select>
                    </div>
                </article>
                }
                <article className='form-field'>
                    <label>password</label>
                    <div>
                        <input
                            placeholder='Set password'
                            type={'password'}
                            required
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                </article>
                <article className='form-field'>
                    <label>confirm password</label>
                    <div>
                        <input
                            placeholder='Confirm password'
                            type={'password'}
                            required
                            onChange={e => setPassword2(e.target.value)}
                        />
                    </div>
                </article>
                <button className='btn proceed'>proceed</button>
            </form>
            <div className='alt'>
                <p></p>
                <span>OR</span>
                <p></p>
            </div>
            <div className='alt-btns'>
                <button className='btn google-btn'><FcGoogle/>Sign up with Google</button>
                <button className='btn fb-btn'><SiFacebook/>Sign up with Facebook</button>
            </div>
            <p className='login'>Already have an account? <Link to={'/login'}>Sign in</Link> </p>
        </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
h1 {
    text-transform: capitalize;
}
label, option, select {
    text-transform: capitalize;
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
    margin-bottom: 30px;
    .google-btn {
        background-color: #4286F4;
        svg {
            background-color: white;
        }
    }
}
.login {
    font-weight: 500;
    font-size: 20px;
    justify-content: center;
    display: flex;
    align-items: center;
    gap: 50px;
    a {
        color: var(--light-green)
    }
}
@media (min-width: 600px) {
  .alt-btns {
    display: flex;
    gap: 20px;
  }
}
`

export default Signup