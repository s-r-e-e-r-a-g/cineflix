import React, { useState } from 'react'
import './genre.css'

const Genre = ({ setGenreArray }) => {
    const [genre, setGenre] = useState(genereJSON)

    const handleGenreClick = (id) => {
        setGenre((prev) =>
            prev.map((data) => {
                if (data.id === id) {
                    if (!data.isActive) {
                        setGenreArray(ids => [...ids, data.id]);
                    }else{
                        setGenreArray(ids=>ids.filter(el =>el != id))
                    }
                    return { ...data, isActive: !data.isActive }
                }
                return data
            })
        )
        setGenre(genre => genre.sort((a, b) => b.isActive - a.isActive));
    }

    const sliderFn = (i) => {
        let cardSlider = document.querySelector(".genreList");
        let cards = document.querySelector(".genreList li");
        let size;
        size = cardSlider?.clientWidth - cards?.clientWidth / 2;
        cardSlider?.scrollBy({
          left: size * i,
          behavior: "smooth",
        });
      };

    return (
        <div className='genreWrapper'>
            <span
        className="material-symbols-outlined left-arrow arrow"
        id={"left-arrow" + "345"}
        onClick={() => sliderFn(-1)}
      >
        navigate_before
      </span>
            <ul className='genreList'>
                {
                    genre?.map((item, i) => (
                            <li key={item.id} className={item.isActive ? "active" : ""} onClick={() => handleGenreClick(item.id)}>{item.name}</li>
                        ))
                }
            </ul>
            <span
        className="material-symbols-outlined right-arrow arrow"
        id={"right-arrow" + "343"}
        onClick={() => sliderFn(1)}
      >
        navigate_next
      </span>
        </div>
    )
}

export default Genre


const genereJSON = [
    {
        "id": 28,
        "name": "Action",
        "isActive": false
    },
    {
        "id": 12,
        "name": "Adventure",
        "isActive": false
    },
    {
        "id": 16,
        "name": "Animation",
        "isActive": false
    },
    {
        "id": 35,
        "name": "Comedy",
        "isActive": false
    },
    {
        "id": 80,
        "name": "Crime",
        "isActive": false
    },
    {
        "id": 99,
        "name": "Documentary",
        "isActive": false
    },
    {
        "id": 18,
        "name": "Drama",
        "isActive": false
    },
    {
        "id": 10751,
        "name": "Family",
        "isActive": false
    },
    {
        "id": 14,
        "name": "Fantasy",
        "isActive": false
    },
    {
        "id": 36,
        "name": "History",
        "isActive": false
    },
    {
        "id": 27,
        "name": "Horror",
        "isActive": false
    },
    {
        "id": 10402,
        "name": "Music",
        "isActive": false
    },
    {
        "id": 9648,
        "name": "Mystery",
        "isActive": false
    },
    {
        "id": 10749,
        "name": "Romance",
        "isActive": false
    },
    {
        "id": 878,
        "name": "Science Fiction",
        "isActive": false
    },
    {
        "id": 10770,
        "name": "TV Movie",
        "isActive": false
    },
    {
        "id": 53,
        "name": "Thriller",
        "isActive": false
    },
    {
        "id": 10752,
        "name": "War",
        "isActive": false
    },
    {
        "id": 37,
        "name": "Western",
        "isActive": false
    }
]