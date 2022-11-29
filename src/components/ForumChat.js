import React from 'react'
import styled from 'styled-components'
import { messages } from '../data/forum'
import { BsChat } from 'react-icons/bs'
import { BiHeart } from 'react-icons/bi'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

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
                                <p className='content'>{data.message}</p>
                                <p className='stats'>
                                    <span className='like'><BiHeart />{data.likes}</span>
                                    <span className='comment'><BsChat/>{data.comments}</span>
                                </p>
                            </div>
                        </article>
                    )
                })
            }
        </div>
        <div className='pgtn'>
            <button>
                <IoIosArrowBack />
            </button>
            <span>1/22</span>
            <button>
                <IoIosArrowForward />
            </button>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
.form-submit {
    width: 60%;
    text-transform: none;
    max-width: 300px;
}
.msgs {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-block: 2rem 5rem;
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
.content {
    line-height: 130%;
    letter-spacing: 0.25px;
    margin-block: .5rem;
}
.stats, .pgtn {
    display: flex;
    justify-content: center;
    gap: 50px;
}
.stats > span {
    display: flex;
    align-items: center;
    gap: 3px;
    font-size: 16px;
    cursor: pointer;
}
.like svg {
    color: #ED2020;
}
.comment svg {
    color: var(--light-green);
}
.pgtn {
    align-items: center;
    span {
        font-weight: 600;
    }
    button {
        background-color: #CCFF33;
        border: none;
        padding: .5rem;
    }
}
`
export default ForumChat