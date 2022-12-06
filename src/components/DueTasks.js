import React from 'react'
import styled from 'styled-components'
import { dueTasks } from '../data/dashboard'

const DueTasks = () => {
  return (
    <Wrapper>
        <h2>due tasks</h2>
        <div className='due-tasks'>
            {
                dueTasks.map((item) => {
                    const {id, task, due, plants} = item
                    const factor = 24 * 60 * 60 * 1000
                    let interval = (due - new Date()) / factor
                    interval = Math.round(interval)
                    const rem = interval > 0? 'left': 'due'
                    return (
                        <article key={id}>
                            <div className='due-date'>
                                <span>{Math.abs(interval)}d</span><br/>
                                <span>{rem}</span>
                            </div>
                            <div>
                                <p>{task}</p>
                                <span className='tags'>{plants}</span>
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
h2 {
    text-transform: capitalize;
    font-weight: 500;
    font-size: 28px;
    margin-bottom: 1rem;
}
.due-tasks {
    display: grid;
    row-gap: 1rem;
}
article {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding: 10px;
    border: 1px solid var(--light-green);
    border-radius: 15px;
}
.due-date {
    background: #CCFF33;
    border-radius: 15px;
    text-align: center;
    padding: 20px;
    
}
p {
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
}
span {
    font-weight: 500;
}
.tags {
    display: inline-block;
    background: rgba(128, 128, 128, 0.2);
    border-radius: 15px;
    padding: 8px 5px;
    font-weight: 500;
}
`

export default DueTasks