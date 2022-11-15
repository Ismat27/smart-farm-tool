import React from 'react'
import PlantCareForm from '../components/PlantCareForm'
import PlantCareResult from '../components/PlantCareResult'
import { usePlantCare } from '../plant_care_context'

const PlantCare = () => {

    const {diagnosed} = usePlantCare()

    if (diagnosed) {
        return <PlantCareResult />
    }

    return (
        <PlantCareForm />
    )
}

export default PlantCare