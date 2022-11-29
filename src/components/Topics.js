import React from 'react'
import styled from 'styled-components'
import { FiSearch } from 'react-icons/fi'
import { topics } from '../data/forum'

const Topics = () => {
  return (
    <Wrapper>
        <div className='search-box'>
            <span role={'button'}>
                <FiSearch />
            </span>
            <input 
                placeholder='search'
            />
        </div>
        <div className='topics-box'>
            <h3 className='div-title'>recent topics</h3>
            <div className='topics'>
                {
                    topics.map(topic => {
                        return (
                            <button key={topic}>
                                {topic}
                            </button>
                        )
                    })
                }
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
.search-box {
    display: flex;
    align-items: center;
    gap: 10px;
    background: rgba(128, 128, 128, 0.1);
    border-radius: 10px;
    max-width: 300px;
    padding: 10px 5px;
    margin-bottom: 2rem;
    span {
        cursor: pointer;
    }
}
.topics-box {
    margin-bottom: 2rem;
}
.topics {
    display: flex;
    gap: 10px 20px;
    flex-wrap: wrap;
    button {
        background: rgba(128, 128, 128, 0.1);
        border-radius: 10px;
        border: none;
        padding: 10px 8px;
        text-transform: capitalize;
        font-weight: 500;
        font-size: 1.2rem;
    }
}
@media (min-width: 768px) {
    .topics-box {
        margin-bottom: 5rem;
    }
}
`

export default Topics
