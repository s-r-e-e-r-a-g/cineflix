import React from 'react'
import './SearchSuggestion.css'
import { useNavigate } from 'react-router-dom'

const SearchSuggestion= ({data, setSearchData, setSearchKey, setClick, media_type, handleKey}) => {
  const navigate = useNavigate()
  const showDetails = (type,id,name)=>{
    navigate(`/${type}/${id}`)
    setSearchKey(name)
    setSearchData([])
    setClick(true)
  }
  
  return (
    <div className="suggestion" onKeyDown={handleKey}>
      {data.map(item=>(
      <div onClick={()=>showDetails(media_type ? media_type : item.media_type,item.id,item.title?item.title:item.name)} className="suggest" key={item.id}>
        <img src={`https://image.tmdb.org/t/p/w92${item.poster_path}`} width="20"/>
        <p className="text-suggestion">{item.title?item.title:item.name}</p>
      </div>
      )).splice(0,6)}
    </div>
  )
}

export default SearchSuggestion