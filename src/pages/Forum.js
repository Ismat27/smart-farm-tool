import React from 'react'
import styled from 'styled-components'
import ForumChat from '../components/ForumChat'
import Topics from '../components/Topics'
import Members from '../components/Members'

const Forum = () => {
  return (
    <Wrapper>
        <h1 className='section-title'>Forum</h1>
        <div className='mobile'>
          <Topics />
        </div>
        <div className='cont'>
            <ForumChat />
            <div className='large-screen'>
              <Topics />
              <Members />
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
.large-screen {
  display: none;
}
@media (min-width: 576px) {

}
@media (min-width: 768px) {
  .mobile {
    display: none;
  }
  .cont {
      display: grid;
      grid-template-columns: 60% auto;
      column-gap: 3rem;
    }
    .large-screen {
      display: block;
    }
}
@media (min-width: 992px) {
    .section-title {
        margin-top: 0px;
    }
    .cont {
      grid-template-columns: 55% auto;
      column-gap: 5rem;
    }
}
`

export default Forum
