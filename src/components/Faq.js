import React, { useState } from 'react'
import styled from 'styled-components'
import { faqs } from '../data/faqs'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

const Faq = () => {
    const [current, setCurrent] = useState('')

    const toggle = (question) => {
        if (question == current) {
            setCurrent('')
        }
        else {
            setCurrent(question)
        }
    }

  return (
    <Wrapper>
        <h1 className='section-title'>FAQ</h1>
        <div className='box faqs'>
            {
                faqs.map(({question, answer}) => {
                    return (
                        <article key={question} className={current===question? 'faq current-faq': 'faq'}>
                            <div className='ques'>
                                <h2>{question}</h2>
                                <span onClick={() => toggle(question)}>
                                    <MdOutlineKeyboardArrowDown/>
                                </span>
                            </div>
                            <p>{answer}</p>
                        </article>
                    )
                })
            }
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
width: 90%;
margin: auto;
max-width: 600px;
margin: auto;
padding-bottom: 50px;
.box {
    padding: 20px;
}
.ques {
    display: flex;
    justify-content: space-between;
    align-items: center;
    svg {
        font-size: 30px;
    }
}
p {
    height: 0;
    overflow: hidden;
    margin: 0 !important;
    color: var(--light-green);
}
h2 {
    font-size: 20px;
}
span {
    cursor: pointer;
}
.current-faq {
    p {
        height: 80px;
    }
    span {
        transform: rotate(180deg);
    }
}

`

export default Faq