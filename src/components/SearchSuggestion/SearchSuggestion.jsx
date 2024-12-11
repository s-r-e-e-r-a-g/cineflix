import React from 'react'
import './SearchSuggestion.css'
import { useNavigate } from 'react-router-dom'
import noImage from '../../Assets/image/no-image-available-png-3.png'

const SearchSuggestion = ({ data, setSearchData, setSearchKey, setClick, media_type, activeIndex }) => {
  const navigate = useNavigate()

  const showDetails = (type, id, name) => {
    navigate(`/${type}/${id}`)
    setSearchKey(name)
    setSearchData([])
    setClick(true)
  }

  return (
    <div className="suggestion">
      {data?.map((item, index) => (
        <div
          onClick={() =>
            showDetails(
              media_type ? media_type : item.media_type,
              item.id,
              item.title ? item.title : item.name
            )
          }
          className={`suggest ${activeIndex === index ? 'active' : ''}`}
          key={item.id}
        >
          <img
            src={item.poster_path ? `https://image.tmdb.org/t/p/w92${item.poster_path}` : noImage}
            width="20"
            alt={item.title ? item.title : item.name}
          />
          <p className="text-suggestion">{item.title ? item.title : item.name}</p>
        </div>
      ))}
    </div>
  )
}

export default SearchSuggestion
