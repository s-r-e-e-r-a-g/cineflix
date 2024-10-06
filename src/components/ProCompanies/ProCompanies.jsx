import React from 'react'
import './proCompanies.css'

const ProCompanies = ({companies}) => {
  return (
    <>
          <h3 className='compTitle'>{companies && companies.length == 1 ? "Production Company" : "Production Companies"}</h3>
    <div className="procomapny">
        {companies && companies.map(comp => (
            <div className="companycard" key={comp.id}>
                <img className="companyLogo" src={comp.logo_path ? `https://image.tmdb.org/t/p/w500${comp.logo_path}` : "https://i.pinimg.com/originals/e8/03/d1/e803d189c1a961c2b404641ea477128c.png"} />
                <p>{comp.name}</p>
            </div>
        ))}
    </div>
    </>
  )
}

export default ProCompanies