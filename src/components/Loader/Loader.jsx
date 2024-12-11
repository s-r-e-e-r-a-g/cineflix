import React from 'react'
import './loader.css'
import loadAnime from '../../Assets/gif/loadAnime.gif'

const Loader = () => {
  return (
    <div className="loaderBox">
      <div className="load_conatiner">
        {/* <img src={loadAnime} alt="loader" /> */}
        <span class="loader"></span>
        <h3>LOADING...</h3>
      </div>
    </div>
  );
}

export default Loader