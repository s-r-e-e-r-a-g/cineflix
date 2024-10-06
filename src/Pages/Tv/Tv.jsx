import React,{ useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { tvGenre, searchLinks } from '../../tmdb/tmdbConfig'
import RowItems from '../../components/RowItems/RowItems'

const Tv = () => {
  const [data,setData] = useState([])
  useEffect(()=>{
    fetch(tvGenre.getGenre).then(res => res.json())
        .then(data => setData(data.genres))
        .catch(err=>console.log(err.message))
  },[])
  return (
    <>
        <Navbar placeholder="Search tv series" searchLink={searchLinks.searchTv} media_type="tv" />
        {data && data.map(gen=>(
            <RowItems rowId={gen.id} key={gen.id} link={tvGenre.setGenre+gen.id} name={gen.name} type="tv"/>
          ))}
        <Footer />
    </>
  )
}

export default Tv