import React from 'react'
import styled from 'styled-components'
import { BsCalendar } from 'react-icons/bs'
import { IoMdTimer } from 'react-icons/io'
import { TbCalendarTime } from 'react-icons/tb'

const formatTime = (time) => {
    let unit = 'pm';
    if (time < 12) {
        unit = 'am'
    }
    return `${time > 12 ? time % 12 : time}:00 ${unit}`
}

const ExpertBook = ({time}) => {
  return (
    <Wrapper>
        <article>
            <div className='img-container'></div>
            <div className='profile'>
                <h2>Dr Chisom</h2>
                <h3>Ph.d  Msc Bsc</h3>
            </div>
        </article>
        <article className='schedule-info'>
            <span className='icon'>
                <BsCalendar />
            </span>
            <div>
                <p>31st December, 2022</p>
                <p>Date</p>
            </div>
        </article>
        <article className='schedule-info'>
            <span className='icon'>
                <IoMdTimer />
            </span>
            <div>
                <p>{formatTime(time)}</p>
                <p>Time</p>
            </div>
        </article>
        <article className='schedule-info'>
            <span className='icon'>
                <TbCalendarTime />
            </span>
            <div>
                <p>1 hour</p>
                <p>Duration</p>
            </div>
        </article>
        
    </Wrapper>
  )
}

const Wrapper = styled.div`
article {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
}
.img-container {
    width: 100px;
    height: 100px;
    background-color: black;
    border-radius: 50%;
}
.schedule-info > div >p:first-child {
    margin-bottom: .5rem;
}
.icon {
    svg {
        font-size: 30px;
    }
}
@media (min-width: 768px) {
article {
    margin-bottom: 30px;
}
}
`

export default ExpertBook