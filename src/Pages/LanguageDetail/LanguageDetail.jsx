import React, { useEffect, useState } from 'react'
import './languageDetail.css'
import { useParams } from 'react-router-dom'
import { API_KEY, BASE_URL } from '../../tmdb/tmdbConfig'
import PosterCard from '../../components/PosterCard/PosterCard'
import Loader from '../../components/Loader/Loader'
import Genre from '../../components/Genre/Genre'

const LanguageDetail = () => {
    const [languageData, setLanguageData] = useState(null);
    const [genreArray, setGenreArray] = useState([]);
    const [genres, setGenres] = useState("")
    const { name, id } = useParams();


    useEffect(() => {
        setGenres(genreArray.join(','));
    }, [genreArray]);

    useEffect(() => {
        Promise.all([
            fetch(`${BASE_URL}discover/movie?api_key=${API_KEY}&with_original_language=${id}&page=1&with_genres=${genres}`),
            fetch(`${BASE_URL}discover/movie?api_key=${API_KEY}&with_original_language=${id}&page=2&with_genres=${genres}`),
            fetch(`${BASE_URL}discover/movie?api_key=${API_KEY}&with_original_language=${id}&page=3&with_genres=${genres}`)
        ])
            .then(([res1, res2, res3]) => Promise.all([res1.json(), res2.json(), res3.json()]))
            .then(([data1, data2, data3]) => {
                setLanguageData([...data1.results, ...data2.results, ...data3.results]);
            })
            .catch(err => console.log(err));
    }, [genres, id]);


    if (!languageData)
        return <Loader />

    if (languageData.length == 0) {
        return <div className="languageWrapper" style={{display:"flex",flexDirection:"column"}}>
            <h2>{name} Movies</h2>
            <Genre setGenreArray={setGenreArray} />
            <h2 style={{flex:1,display:"flex",justifyContent:"center",alignItems:"center"}}>NO DATA FOUND</h2>
        </div>
    }
    return (
        <div className='languageWrapper'>
            <h2>{name} Movies</h2>
            <Genre setGenreArray={setGenreArray} />
            
            <div className="list">
                {languageData?.map((movie, i) => (
                    <PosterCard card={movie} key={`${movie.id}${i}`} type="movie" />
                ))}
            </div>
        </div>
    )
}

export default LanguageDetail
