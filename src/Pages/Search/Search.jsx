import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { useParams } from 'react-router-dom'
import {searchLinks, BASE_URL, API_KEY} from '../../tmdb/tmdbConfig'
import './search.css'
import PosterCard from '../../components/PosterCard/PosterCard'

const Search = () => {
    const { query } = useParams([]);
    const [value, setValue] = useState([]);
    useEffect(()=>{
        if(query){
            fetch(`${BASE_URL}search/multi?api_key=${API_KEY}&include_adult=false&query=${query}`)
            .then(res => res.json())
            .then(data => {
                setValue(data.results);
            })
            .catch(err => console.log(err.message));
        }
    },[query])
  return (
    <>
        <Navbar placeholder="Search movies, series,..."  searchLink={searchLinks.searchAll} />
        <div className="search_wrapper">
            <h2 className='search_key'>Result for : <span>{query}</span></h2>
            <div className="result">
            {value?.map((card) => (
            <PosterCard card={card} key={card.id} type={card.type || card.media_type} />
          ))}
            </div>
        </div>
    </>
  )
}

export default Search