import React, { useState, useContext, createContext } from 'react';

const PlantContext = createContext();

const PlantCareProvider = ({children}) => {

    const [diagnosed, setDiagnosed] = useState(false)
    const [plantImage, setPlantImage] = useState('')
    const [plantFile, setPlantFile] = useState('')

    const returnHome = () => {
        setPlantFile('')
        setPlantImage('')
        setDiagnosed(false)
    }

    return (
        <PlantContext.Provider value={
            {
                diagnosed, setDiagnosed,
                plantImage, setPlantImage,
                plantFile, setPlantFile,
                returnHome
            }
        }>
            {children}
        </PlantContext.Provider>
    )
}

export const usePlantCare = () => {
    return useContext(PlantContext)
}

export { PlantCareProvider }