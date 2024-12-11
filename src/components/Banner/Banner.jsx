import React, { useEffect, useState } from 'react'
import './banner.css'
import BannerSlides from './BannerSlides'
import { links } from '../../tmdb/tmdbConfig'

const Banner = () => {
  let interval = 6000;
    const [data, setData] = useState([])
    const fetchData = () =>{
        fetch(links.trending).then(res => res.json())
        .then(data => setData(data.results))
        .catch(err=>console.log(err.message))
    }
    useEffect(()=>{
        fetchData();
    },[])
    useEffect(()=>{
      if(data){
        const intervalId = setInterval(sliderFrd, interval);
        return () => clearInterval(intervalId);
      }
    },[data])
    let banWrap = document.querySelector(".banner-wrapper");
    // let banner = document.querySelectorAll(".banner");
    const sliderFrd = () => {
        let banner = document.querySelectorAll(".banner")
        banWrap?.append(banner[0])
    }
    const sliderBrd = () => {
        let banner = document.querySelectorAll(".banner")
        banWrap.prepend(banner[banner.length - 1])
    }
    
    
    let startX;
    const threshold = 60;
    const touchStart =  (e) => {
        startX = e.touches[0].clientX;
      };
    const touchMove = (e) => {
        let currentX = e.touches[0].clientX;
        let deltaX = currentX - startX;
        if (Math.abs(deltaX) >= threshold) {
          if (deltaX > 0) {
            sliderBrd(); 
          } else {
            sliderFrd(); 
          }
          startX = currentX;
        }
    };
  
    


  return (
    <div className='wrapper'> 
        <span className="material-symbols-outlined left-arrow" onClick={sliderBrd}>navigate_before</span>
        <div className="banner-wrapper" onTouchStart={touchStart} onTouchMove={touchMove}>
            {data && data.map(item =>{
                return <BannerSlides item={item} key={item.id}/>
            })}
        </div>
        <span className="material-symbols-outlined right-arrow" onClick={sliderFrd}>navigate_next</span>
    </div>

  )
}

export default Banner