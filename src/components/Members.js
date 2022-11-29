import React from 'react'
import styled from 'styled-components'
import { members } from '../data/forum'

const Members = () => {
  return (
    <Wrapper>
        <h3 className='div-title'>members</h3>
        <div className='members'>
            {
                members.map(member => {
                    return (
                        <article key={member.id} className='mem'>
                            <img alt={member.first_name} src='https://via.placeholder.com/40' />
                            <h3>{member.first_name} {member.last_name}</h3>
                        </article>
                    )
                })
            }
        </div>
        <p role={'button'} className='see-more'>See more</p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
.members {
    display: flex;
    flex-direction: column;
    gap: 40px;
}
.mem {
    display: flex;
    align-items: center;
    gap: 1rem;
    text-transform: capitalize;
    img {
        border-radius: 5px;
    }
}
.see-more {
    font-weight: 500;
    line-height: 120%;
    color: var(--lighter-green);
    text-align: center;
}
`

export default Members
