import React, { useState, useContext, createContext } from 'react';

const PlantContext = createContext();

const PlantCareProvider = ({children}) => {

    const [diagnosed, setDiagnosed] = useState(false)
    const [plantImage, setPlantImage] = useState('')
    const [plantFile, setPlantFile] = useState('')

    return (
        <PlantContext.Provider value={
            {
                diagnosed, setDiagnosed,
                plantImage, setPlantImage,
                plantFile, setPlantFile,
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