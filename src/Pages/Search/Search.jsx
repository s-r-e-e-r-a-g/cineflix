import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { useNavigate, useParams } from 'react-router-dom'
import {searchLinks, BASE_URL, API_KEY} from '../../tmdb/tmdbConfig'
import Footer from '../../components/Footer/Footer'
import noImage from '../../Assets/image/no-image-available-png-3.png'
import './search.css'

const Search = () => {
    const { query } = useParams([]);
    const [value, setValue] = useState([]);
    const navigate = useNavigate();
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
    const cardEvent = (id, type) => {
        navigate(`/${type}/${id}`);
    };
  return (
    <>
        <Navbar placeholder="Search movies, series,..."  searchLink={searchLinks.searchAll} />
        <div className="search_wrapper">
            <h2 className='search_key'>Result for : <span>{query}</span></h2>
            <div className="result">
            {value && value.map((item) => (
            <div
              className="cards"
              key={item.id}
              onClick={() => cardEvent(item.id, item.type ? item.type : item.media_type)}
            >
              <img src={ item.poster_path ? `https://image.tmdb.org/t/p/w342${item.poster_path}` : noImage } />
              <div className="card-details">
                <p>{item.title ? item.title : item.name}</p>
              </div>
            </div>
          ))}
            </div>
        </div>
        <Footer />
    </>
  )
}

export default Search