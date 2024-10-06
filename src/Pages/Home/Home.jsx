import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import './Home.css'
import Banner from '../../components/Banner/Banner'
import RowItems from '../../components/RowItems/RowItems'
import {links, searchLinks} from '../../tmdb/tmdbConfig'

const Home = () => {
  return (
    <>
        <Navbar placeholder="Search movies, series,..." searchLink={searchLinks.searchAll} />
        <Banner />
        <RowItems rowId="1" link={links.discoverMovie} name="movies" type = "movie"/>
        <RowItems rowId="2" link={links.discoverTv} name="shows" type = "tv"/>
        <RowItems rowId="3" link={links.topRatedMovies} name="top movies" type = "movie"/>
        <RowItems rowId="4" link={links.topRatedTv} name="top tv" type = "tv"/>
        <Footer />
    </>
  )
}

export default Home