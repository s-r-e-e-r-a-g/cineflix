import React from 'react'
import './studioCard.css'
import { useNavigate } from 'react-router-dom'

const StudioCard = ({ id, name, logo }) => {
    const navigate = useNavigate()
    const goToStudio = (id) => {
        navigate(`/studio/${id}`)
    }
    

    return (
        <div className='studio' key={name} onClick={() => goToStudio(id)}>
            <img src={logo} alt={name} />
        </div>
    )
}

export default StudioCard
