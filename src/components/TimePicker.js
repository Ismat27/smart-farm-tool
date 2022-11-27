import React from 'react'
import styled from 'styled-components'

const times = [10, 11, 12, 13, 14, 15, 16]

const TimePicker = ({time, setTime}) => {
  return (
    <Wrapper>
        <p>Pick a time</p>
        <article className='times'>
            {
                times.map(t => {
                    if (t===12) {
                        return (
                            <button 
                                className={`${t===time ? 'time-btn active' : 'time-btn'}`} 
                                key={t}
                                onClick={() => setTime(t)}
                            >
                                {t}:00 pm
                            </button>
                        )
                    }
                    return (
                        <button 
                            className={`${t===time ? 'time-btn active' : 'time-btn'}`} 
                            key={t}
                            onClick={() => setTime(t)}
                        >
                            {t % 12}:00 {t >12? 'pm': 'am'}
                        </button>
                    )
                })
            }
        </article>
    </Wrapper>
  )
}

const Wrapper = styled.div`
p {
    font-size: 20px;
    margin-bottom: 1.5rem;
}
.times {
    background: #ECE5EC;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    width: 200px;
    padding-block: 40px;
}
.time-btn {
    cursor: pointer;
    border-radius: 20px;
    border: none;
    padding: 10px;
    color: #2C3E50;
    font-size: 20px;
    width: 100px;
}
.time-btn.active {
    background-color: var(--light-green);
    color: var(--white);
}
@media (min-width: 576px) {
    p {
        padding-top: 10px;
}

}
@media (min-width: 768px) {

}
@media (min-width: 992px) {

}
`

export default TimePicker