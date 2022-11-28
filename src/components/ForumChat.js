import React from 'react'
import styled from 'styled-components'
import { messages } from '../data/forum'

const ForumChat = () => {
  return (
    <Wrapper>
        <button className='btn form-submit'>Start a new topic</button>
        <div className='msgs'>
            {
                messages.map(data => {
                    return (
                        <article className='msg' key={data.id}>
                            <img alt='user' src='https://via.placeholder.com/40' />
                            <div className='text'>
                                <h3>{data.topic}</h3>
                                <p>{data.message}</p>
                                <p className='stats'>
                                    <span>{data.likes}</span>
                                    <span>{data.comments}</span>
                                </p>
                            </div>
                        </article>
                    )
                })
            }
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
.form-submit {
    width: 60%;
}
.msgs {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-block: 2rem;
    img {
        border-radius: 5px;
    }
}
.msg {
    display: flex;
    align-items: flex-start;
    gap: .8rem;
    background-color: rgba(128, 128, 128, 0.2);
    border-radius: 15px;
    padding: 10px;
}
.stats {
    display: flex;
    justify-content: center;
    gap: 50px;
}
`
export default ForumChat