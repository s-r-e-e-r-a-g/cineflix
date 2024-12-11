import React from 'react'
import './posterCard.css'
import { useNavigate } from 'react-router-dom';
import noImage from '../../Assets/image/no-image-available-png-3.png'

const PosterCard = ({card, type}) => {
    const navigate = useNavigate();

    const cardEvent = (id, type) => {
        navigate(`/${type}/${id}`);
      };

    return (
        <div
            className="cards"
            key={card.id}
            onClick={() => cardEvent(card.id, type ? type : card.media_type)}
        >
            <img src={card.poster_path ? `https://image.tmdb.org/t/p/w342${card.poster_path}` : noImage} loading='lazy' alt='' />
            <div className="card-details">
                <p>{card.title ? card.title : card.name}</p>
            </div>
        </div>
    )
}

export default PosterCard
