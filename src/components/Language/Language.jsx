import React, { useEffect, useState } from 'react'
import './language.css'
import { useNavigate } from 'react-router-dom';

const Language = () => {
    const [langData, setLangData] = useState(null);
    const navigate = useNavigate()

    useEffect(()=>{
        fetch("language.json")
        .then(res => res.json())
        .then(data => setLangData(data.slice(0,8)))
        .catch(err => console.log(err))
    },[])

    const goToLanguage = (name, id) => {
        navigate(`/language/${name}/${id}`);
    }
    const sliderFn = (i) => {
        let cardSlider = document.querySelector("#languageCardWrapper");
        let cards = document.querySelector(".languageCard");
        let size;
        size = cardSlider?.clientWidth - cards?.clientWidth / 2;
        cardSlider?.scrollBy({
          left: size * i,
          behavior: "smooth",
        });
      };

  return (
    <div className='languageCardWrapper'>
        <span onClick={() => sliderFn(-1)} style={{left: 0}}
        className="material-symbols-outlined left-arrow arrow">navigate_before
        </span>
      <div id="languageCardWrapper">
      {
        langData?.map((lang)=>(
            <div className="languageCard" key={lang.id} onClick={()=>goToLanguage(lang.name || lang.original,lang.code)}>
                <img className='langCardImg' src={lang.link} alt="" />
                <div className="text">
                    <h4>{lang.original}</h4>
                    <h6>{lang.name}</h6>
                </div>
            </div>
        ))
      }
      </div>
      <span onClick={() => sliderFn(1)} style={{right: 0}} className="material-symbols-outlined right-arrow arrow">navigate_next
      </span>
    </div>
  )
}

export default Language
