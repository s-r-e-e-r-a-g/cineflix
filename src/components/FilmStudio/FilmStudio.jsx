import React, { useEffect, useState } from 'react'
import './filmStudio.css'
import StudioCard from '../StudioCard/StudioCard';

const FilmStudio = () => {
  const [studioData, setStudioData] = useState(null);
  useEffect(() => {
    fetch("production_companies.json")
      .then(res => res.json())
      .then(data => setStudioData(data))
      .catch(err => console.log(err))
  }, [])
  return (
    <div className='studioWrpper'>
      {studioData?.map((studio) => (
        <StudioCard key={studio.name} id={studio.id} name={studio.name} logo={studio.logo} />
      ))}
    </div>
  )
}
export default FilmStudio
