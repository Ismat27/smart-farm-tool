import React from 'react'
import styled from 'styled-components'
import ForumChat from '../components/ForumChat'

const Forum = () => {
  return (
    <Wrapper>
        <h1 className='section-title'>Forum</h1>
        <div>
            <ForumChat />
        </div>

    </Wrapper>
  )
}

const Wrapper = styled.section`
@media (min-width: 992px) {
    .section-title {
        margin-top: 0px;
    }
}
`

export default Forum