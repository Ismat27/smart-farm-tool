import React, { useState } from 'react'
import { GiFarmer } from 'react-icons/gi'
import {IoCheckmarkCircleSharp} from 'react-icons/io5'
import { HiUserPlus } from 'react-icons/hi2'
import styled from 'styled-components'

const AccountType = ({accountType, setAccountType}) => {
  

  const changeAccount = (value) => {
    setAccountType(value)
  }

  return (
    <Wrapper>
      <div onClick={() => changeAccount('farmer')} className={`${accountType === 'farmer' ? 'account-type active': 'account-type'}`}>
          <p className='account'>
              farmer account
              {accountType === 'farmer' && <IoCheckmarkCircleSharp/>}
          </p>
          <p className='icon'><GiFarmer /></p>
      </div>
      <div onClick={() => changeAccount('expert')} className={`${accountType === 'expert' ? 'account-type active': 'account-type'}`}>
          <p className='account'>
              expert account
              {accountType === 'expert' && <IoCheckmarkCircleSharp/>}
          </p>
          <p className='icon'><HiUserPlus /></p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
margin-block: 40px 30px;
.account-type {
  cursor: pointer;
  padding-block: 20px;
  text-align: center;
  min-width: 250px;
  border-radius: 15px;
  border: 1px solid #808080;
  border-radius: 15px;
  margin-bottom: 20px;
  p {
    font-size: 20px;
    font-weight: 500;
    color: #808080;
    text-transform: capitalize;
  }
  .icon {
  font-size: 35px;
}
}
.active {
  border: 2.5px solid #006400;
  p {
    color: #006400;
  }
}
.account {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-bottom: 32px;
}

@media (min-width: 600px) {
  display: flex;
  justify-content: space-between;

}
`

export default AccountType