import React, {useState, useEffect} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import RowItems from '../../components/RowItems/RowItems'
import {movieGenre, searchLinks} from '../../tmdb/tmdbConfig'

const Movies = () => {
  const [data,setData] = useState([])
  useEffect(()=>{
    fetch(movieGenre.getGenre).then(res => res.json())
        .then(data => setData(data.genres))
        .catch(err=>console.log(err.message))
  },[])
  return (
    <>
        <Navbar placeholder="Search movies" searchLink={searchLinks.searchMovie} media_type="movie"/>
        {data && data.map(gen=>(
            <RowItems rowId={gen.id} key={gen.id} link={movieGenre.setGenre+gen.id} name={gen.name} type="movie"/>
          ))}
        <Footer />
    </>
  )
}

export default Movies