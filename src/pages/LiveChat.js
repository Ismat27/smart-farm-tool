import React, { useState } from 'react'
import styled from 'styled-components'
import ExpertBook from '../components/ExpertBook'
import TimePicker from '../components/TimePicker'
import Calen from '../components/Calen'
import Modal from '../components/Modal'
import { useNavigate } from 'react-router-dom'
import { usePlantCare } from '../plant_care_context'

const LiveChat = () => {

    const {
        setDiagnosed,
        setPlantImage,
        setPlantFile
    } = usePlantCare()
        
    const [val, setValue] = useState(new Date())
    const [time, setTime] = useState(10)
    const [showModal, setShowModal] = useState(false)
    const nav = useNavigate()

    const date = val.getDate()
    const month = val.getMonth() + 1
    const year = val.getFullYear()

    const onChange = (value) => {
        setValue(value)
    }

    const bookChat = (event) => {
        event.preventDefault()
        setShowModal(true)
        setPlantFile('')
        setPlantImage('')
        setDiagnosed(false)
    }

    const closeModal = () => {
        setValue(new Date())
        setShowModal(false)
        nav('/dashboard')
    }

  return (
    <>
        {
            showModal &&
            <Modal 
                text={'You have successfully booked a chat.'}
                btnText={'done'}
                closeFunc={closeModal}
            />
        }
        <Wrapper>
            <h1>Book A Live Chat with an Expert</h1>
            <div className='content'>
                <Calen value={val} onChange={onChange} />
                <TimePicker time={time} setTime={setTime} />
                <ExpertBook time={time} date={date} month={month} year={year} />
            </div>
            <button className='btn form-submit' onClick={bookChat}>book chat</button>
        </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
h1 {
    font-weight: 500;
    font-size: 32px;
    line-height: 120%;
    letter-spacing: 0.25px;
    margin-block: 20px 35px;
}
.content {
    display: grid;
    gap: 40px;
    margin-bottom: 30px;
}

@media (min-width: 576px) {
    .content {
        grid-template-columns: repeat(2, auto)
        gap: 20px;
    }
}

@media (min-width: 768px) {

}

@media (min-width: 992px) {
    h1 {
        margin-top: 5px;
    }
    .content {
        grid-template-columns: 350px 200px 250px;
        margin-bottom: 80px;
    }
}
`
export default LiveChat
