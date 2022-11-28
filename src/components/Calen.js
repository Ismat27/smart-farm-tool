import React from 'react'
import Calendar from 'react-calendar'
import styled from 'styled-components'

const Calen = ({value, onChange}) => {
  return (
    <Wrapper>
        <Calendar 
            minDate={new Date()} 
            className={'calender'} 
            value={value} 
            onChange={onChange}
        />
    </Wrapper>
  )
}

const Wrapper = styled.div`
.calender {
    button {
        background-color: var(--white);
        border: none;
        padding: 10px 20px;
        cursor: pointer;
    }

    .react-calendar__month-view__weekdays__weekday {
        border: none
    }
}
.react-calendar__navigation {
    margin-bottom: 1.5rem;
}
.react-calendar__navigation__label {
    font-size: 16px;
}
`

export default Calen