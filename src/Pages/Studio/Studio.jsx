import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { API_KEY } from '../../tmdb/tmdbConfig'
import Loader from '../../components/Loader/Loader';
import './studio.css'
import PosterCard from '../../components/PosterCard/PosterCard';

const Studio = () => {
    const [movie, setMovie] = useState(null);
    const [tv, setTv] = useState(null);
    const [poster, setPoster] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    const bannerObj = {
        174: "https://wallpapercave.com/wp/wp6771997.jpg",
        33: "https://i.ytimg.com/vi/bNJW113tbKk/maxresdefault.jpg",
        25: "https://priyansh.net/cdn-cgi/imagedelivery/lIUQB0PGOeYmlvsEq1B5CQ/d23644cd-35a8-4202-f656-73bd4936f000/w=9999",
        4: "https://wallpapers.com/images/hd/paramount-picture-70nfbqowbco8echs.jpg",
        5: "https://c4.wallpaperflare.com/wallpaper/841/262/325/columbia-logo-movie-picture-wallpaper-preview.jpg",
        2: "https://wallpapers.com/images/featured/disney-has6vy47k75d0bzs.jpg",
        34: "https://wallpapercave.com/wp/wp9459370.jpg",
        3: "https://wallpapers.com/images/featured/pixar-cx81w1x378htuj4p.jpg",
        420: "https://wallpapercave.com/wp/wp12583775.jpg"
    }

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_companies=${id}`).then(res => res.json())
            .then(data => setMovie(data.results))
            .catch(err => console.log(err))
        fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_companies=${id}`).then(res => res.json())
            .then(data => setTv(data.results))
            .catch(err => console.log(err))
        fetch(`https://api.themoviedb.org/3/company/${id}?api_key=${API_KEY}`)
        .then(res => res.json())
        .then(data => setPoster(data))
        .catch(err => console.log(err))
    }, [id])

    if (movie?.length == 0 && tv?.length == 0) {
        const timeObj = setTimeout(() => {
            navigate("/home")
        }, 2000);
        return ()=>clearTimeout(timeObj);
    }

    if (!(movie || tv))
        return <Loader />
    return (
        <div className='studioDetail' >
            <div className="studioBanner">
                <img src={bannerObj[id]  || "https://wallpapercave.com/wp/wp9453290.jpg"} alt="" />
            </div>
            <div className="boxWrapper">
                <div className="blank">
                    {!bannerObj[id] && (poster?.logo_path ? <img src={`https://image.tmdb.org/t/p/w1280${poster.logo_path}`}  alt='' /> : <h1 className='studioName'>{poster?.name}</h1>)}
                </div>
                {movie?.length != 0 && <div className="listWrapper">
                    <h2>Movies</h2>
                    <div className="list">
                        {movie?.map(movie => (
                            <PosterCard card={movie} key={movie.id} type="movie" />
                        ))}
                    </div>
                </div>}
                {tv?.length != 0 && <div className="listWrapper">
                    <h2>TV Series</h2>
                    <div className="list">
                        {tv?.map(tv => (
                            <PosterCard card={tv} key={tv.id} type="tv" />
                        ))}
                    </div>
                </div>}
            </div>{console.log(poster)}
        </div>
    )
}

export default Studio
