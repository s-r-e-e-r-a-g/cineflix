import './RowItems.css'
import React, { useState, useEffect } from 'react'
import PosterCard from '../PosterCard/PosterCard';


const RowItems = ({ rowId, link, name, type }) => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch(link)
      .then((res) => res.json())
      .then((data) => {
        setItem(data.results);
      })
      .catch((err) => console.log(err.message));
  }, []);


  const scrollEndCheck = (cardSlider) => {
    if ((cardSlider?.scrollWidth - cardSlider?.clientWidth) - cardSlider?.scrollLeft < 6) {
      document.querySelector("#right-arrow" + rowId).style.display = "none";
    } else {
      document.querySelector("#right-arrow" + rowId).style.display = "block";
    }
    if (cardSlider.scrollLeft < 10) {

      document.querySelector("#left-arrow" + rowId).style.display = "none";
    } else {
      document.querySelector("#left-arrow" + rowId).style.display = "block";
    }
  }

  const sliderFn = (i) => {
    let cardSlider = document.querySelector("#row-slider" + rowId);
    let cards = document.querySelector(".cards");
    let size;
    size = cardSlider?.clientWidth - cards?.clientWidth / 2;
    cardSlider?.scrollBy({
      left: size * i,
      behavior: "smooth",
    });
    const timeObj = setTimeout(() => {
      scrollEndCheck(cardSlider);
    }, 400)

    return () => clearTimeout(timeObj);
  };

  if (item.length == 0)
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
      {
        item ? <div className="row-container" id={"row-slider" + rowId}>
          {item.map((card) => (
            <PosterCard card={card} key={card.id} type={type} />
          ))
          }
        </div> :
          <div className="row-container" id={"row-slider" + rowId}>
            {Array(10).fill(null).map(_ => (
              <div className="cards"></div>
            ))}
          </div>
      }
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
