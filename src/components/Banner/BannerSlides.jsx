import React from 'react'
import './banner.css'
import { links } from '../../tmdb/tmdbConfig'
import { useNavigate } from "react-router-dom"

const BannerSlides = ({item}) => {
    const navigate = useNavigate();
    const bannerEvent = (id,type) =>{
       navigate(`/${type}/${id}`)
    }       
  return (
    <div className="banner" style={{background:`url(${links.image_base}${item.backdrop_path})`,
    backgroundPosition: 'top',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'}}>
        <div className="contents">
            <h3>{item.title? item.title: item.name}</h3>
            <p>{item.overview}</p>
            <button onClick={()=>{bannerEvent(item.id,item.media_type)}}>View</button>
        </div>
    </div>
  )
}

export default BannerSlides