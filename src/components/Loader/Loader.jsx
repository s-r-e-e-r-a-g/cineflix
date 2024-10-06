import React from 'react'
import './loader.css'
import loadAnime from '../../Assets/gif/loadAnime.gif'

const Loader = () => {
  return (
    <div className="loader">
      <div className="load_conatiner">
        <img src={loadAnime} alt="loader" />
        <h3>LOADING...</h3>
      </div>
    </div>
  );
}

export default Loader