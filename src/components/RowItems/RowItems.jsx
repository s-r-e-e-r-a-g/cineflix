import './RowItems.css'
import React, {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom"


const RowItems = ({ rowId, link, name, type, setSearch }) => {
  const [item, setItem] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(link)
      .then((res) => res.json())
      .then((data) => setItem(data.results))
      .catch((err) => console.log(err.message));
  }, [link]);

  const cardEvent = (id, type) => {
    navigate(`/${type}/${id}`);
    setSearch && setSearch(false);
  };


  const scrollEndCheck = (cardSlider) => {
    if((cardSlider?.scrollWidth - cardSlider?.clientWidth) - cardSlider?.scrollLeft < 6){
      document.querySelector("#right-arrow" + rowId).style.display = "none";
    }else{
      document.querySelector("#right-arrow" + rowId).style.display = "block";
    }
    if(cardSlider.scrollLeft < 10){
      
      document.querySelector("#left-arrow" + rowId).style.display = "none";
    }else{
      document.querySelector("#left-arrow" + rowId).style.display = "block";
    }
  }

  const sliderFn = (i) => {
    let cardSlider = document.querySelector("#row-slider" + rowId);
    let size;
    size = cardSlider?.clientWidth;
    cardSlider?.scrollBy({
      left: size * i,
      behavior: "smooth",
    });
    const timeObj = setTimeout(()=>{
      scrollEndCheck(cardSlider);
    }, 400)
    
    return () => clearTimeout(timeObj);
  };
  
  if(item.length == 0)
    return

  return (
    <div className="row-wrapper">
      <h2 className="title">{name}</h2>
      <span
        className="material-symbols-outlined left-arrow arrow"
        id={"left-arrow" + rowId}
        onClick={() => sliderFn(-1)}
      >
        navigate_before
      </span>
      <div className="row-container" id={"row-slider" + rowId}>
        { item?.map((item) => (
            <div
              className="cards"
              key={item.id}
              onClick={() => cardEvent(item.id, type ? type : item.media_type)}
            >
              <img src={`https://image.tmdb.org/t/p/w342${item.poster_path}`} loading='lazy' />
              <div className="card-details">
                <p>{item.title ? item.title : item.name}</p>
              </div>
            </div>
          ))
        }
      </div>
      <span
        className="material-symbols-outlined right-arrow arrow"
        id={"right-arrow" + rowId}
        onClick={() => sliderFn(1)}
      >
        navigate_next
      </span>
    </div>
  );
};

export default RowItems
