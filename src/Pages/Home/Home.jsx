import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import './Home.css'
import Banner from '../../components/Banner/Banner'
import RowItems from '../../components/RowItems/RowItems'
import {links, searchLinks} from '../../tmdb/tmdbConfig'
import FilmStudio from '../../components/FilmStudio/FilmStudio'
import Language from '../../components/Language/Language'

const Home = () => {
  return (
    <>
        <Navbar placeholder="Search movies, series,..." searchLink={searchLinks.searchAll} />
        <Banner />
        <RowItems rowId="1" link={links.discoverMovie} name="popular movies" type = "movie"/>
        <RowItems rowId="2" link={links.discoverTv} name="popular shows" type = "tv"/>
        <FilmStudio />
        <RowItems rowId="3" link={links.indianMovies} name="Top Indian Movies" type="movie" />
        <RowItems rowId="4" link={links.indianTv} name="Top Indian Shows" type="tv" />
        <Language />
        <RowItems rowId="5" link={links.topRatedMovies} name="top rated movies" type = "movie"/>
        <RowItems rowId="6" link={links.topRatedTv} name="top rated tv series" type = "tv"/>
        <Footer />
    </>
  )
}

export default Home