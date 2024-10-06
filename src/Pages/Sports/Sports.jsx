import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import {searchLinks} from '../../tmdb/tmdbConfig'
import Draggable from 'react-draggable'
import './sports.css'

const Sports = () => {
  return (
    <>
        <Navbar placeholder="Search movies, series,..." searchLink={searchLinks.searchAll} />
        <Draggable handle=".drag-handle">
          <div className="sports-wrapper" style={{ backgroundColor: "red"}}>
            <h2 className="drag-handle" style={{cursor: "grab"}}>Coming Soon...</h2>
          </div>
        </Draggable>
       
        <Footer />
    </>
  )
}

export default Sports