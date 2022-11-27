import React from 'react'
import styled from 'styled-components'
import { AiOutlinePlus } from 'react-icons/ai'
import { CgAsterisk } from 'react-icons/cg'
import { usePlantCare } from '../plant_care_context'

const PlantCareForm = () => {
    const {
        plantImage, 
        setPlantImage,
        setDiagnosed,
        plantFile,
        setPlantFile
    } = usePlantCare()

    const handleChange = (event) => {
        const imgFile = event.target.files[0]
        setPlantFile(imgFile)
        setPlantImage(URL.createObjectURL(imgFile))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!plantFile) {
            alert('no file selected')
            return
        }
        const formData = new FormData()
        formData.append('plant', plantFile, plantFile.name)
        console.log(formData.get('plant'));
        // set image to server for diagnosis
        setDiagnosed(true)
    }
    return (
        <Wrapper>
            <h1>Report a diseased plant</h1>
            <p className='prompt'>Please upload picture of diseased plant in the box below</p>
            <form onSubmit={handleSubmit}>
                <div className='upload-container'>
                    <p>Click on the add button to browse for picture or drag a file in.</p>
                    <label className='upload-lab'>
                        <AiOutlinePlus />
                        <input 
                            className='file-input'
                            name='plant'
                            type={'file'}
                            accept="image/*"
                            onChange={(event) => {handleChange(event)}}
                        />
                    </label>
                </div>
                {
                    plantImage &&
                <div className='img-container'>
                    <p>file uploaded</p>
                    <img src={plantImage} alt='plant uploaded'/>
                </div>
                }
                <div className='notes-container'>
                    <p>Note: </p>
                    <ul className='notes'>
                        <li className='note'><CgAsterisk /> Files accepted are jpeg, svg and png</li>
                        <li className='note'><CgAsterisk /> Maximum limit size is 5mb</li>
                    </ul>
                </div>
                <button className='btn form-submit'>continue</button>
            </form>
        </Wrapper>
  )
}

const Wrapper = styled.section`
h1 {
    font-weight: 500;
    font-size: 32px;
    line-height: 120%;
    letter-spacing: 0.25px;
    margin-block: 40px 15px;
}
.upload-container {
  border: 2px dashed var(--grey-one);
  border-radius: 10px;
  padding: 40px 20px;
  margin-block: 30px 15px;
  text-align: center;
  label {
    cursor: pointer;
    text-align: center;
    display: block;
  }
p {
    margin-bottom: 40px;
    font-size: 20px;
}
svg {
    font-size: 40px;
}
}
.notes {
    li {
        padding: 5px 0;
        font-size: 18px;
        display: flex;
    }
}
.img-container {
    img {
        width: 500px;
        max-width: 100%;
        max-height: 300px;

    }
    p {
        text-transform: capitalize;
        margin-bottom: 10px;
        font-weight: bold;
    }
}
.form-submit {
    margin-top: 100px;
}
@media (min-width: 768px) {
    .upload-container {
        padding: 80px 40px;
    }
    .upload-container, .form-submit {
        margin-left: 40px;
    }
    .notes-container {
        padding-left: 60px;
    }
}
`
export default PlantCareForm