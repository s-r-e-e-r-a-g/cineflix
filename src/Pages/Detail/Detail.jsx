import React, {useEffect, useState} from 'react'
import Loader from "../../components/Loader/Loader";
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import {useParams} from 'react-router-dom' 
import {fetchMediaDetails} from './fetchMediaDetails'
import { fetchMediaVideos } from "./fetchMediaVideos";
import {searchLinks} from '../../tmdb/tmdbConfig'
import ProCompanies from '../../components/ProCompanies/ProCompanies'
import VideoClip from '../../components/VideoClip/VideoClip'
import RowItems from '../../components/RowItems/RowItems'
import {API_KEY, BASE_URL} from '../../tmdb/tmdbConfig'
import "./Detail.css";
import { fetchStreamingServices } from './fetchStreamingServices';
import Imdb from '../../Assets/image/imdb.png'

const Detail = () => {
  const [data,setData] = useState(null);
  const [video, setVideo] = useState(null)
  const [recom, setRecom] = useState(null);
  const [service, setService] = useState(null);
  const {type, id} = useParams([]);   
  
  useEffect(()=>{
    setData(null);
    fetchMediaDetails(type, id, setData);
    fetchMediaVideos(type, id, setVideo);
    fetchStreamingServices(type, id, setService);
    setRecom(`${BASE_URL}${type}/${id}/recommendations?api_key=${API_KEY}`);
  },[type, id]);
  
  
  return (
    <div className="detailCover">
      <Navbar
        placeholder="Search movies, series,..."
        searchLink={searchLinks.searchAll}
      />
      { (data || video || recom) ? <>
      <div
        className="detail_wrapper"
        style={
          data && {
            background: `url(https://image.tmdb.org/t/p/w1280${
              data.belongs_to_collection &&
              data.belongs_to_collection.backdrop_path
                ? data.belongs_to_collection.backdrop_path
                : data.backdrop_path
            }) no-repeat center center / cover`,
          }
        }
      >
        <div className="detail">
          <div className="banner-container">
            <img
              className="bannerImg"
              src={
                data && `https://image.tmdb.org/t/p/w1280${data.backdrop_path || data.poster_path}`
              }
            />
            <div className="poster-container">
              <img
                src={
                  data && `https://image.tmdb.org/t/p/w1280${data.poster_path}`
                }
              />
            </div>
          </div>
          <div className="detailheader">
            <div className="detail_title">
              <h3 className="title_name">
                {data && (data.name || data.title)}
              </h3>
            </div>
            <div className="genre">
              {data &&
                data.genres &&
                data.genres.map((item, i) => (
                  <div key={item.id} style={{ display: "flex" }}>
                    <p>{item.name}</p>&nbsp;
                    <span key={i}>
                      {i == data.genres.length - 1 ? null : "|"}{" "}
                    </span>
                    &nbsp;
                  </div>
                ))}
            </div>
            <div className="scontainer">
              <div className="rating">
                <img src={Imdb} className='imdb' alt="" />
                <p>
                  {data && data.imdb && data.imdb.rating != "N/A" && data.imdb.rating} {data && data.imdb.count != "N/A" ? "("+data.imdb.count + ")" : "No Rating Available"} 
                </p>
              </div>
              <div className="year">
                <p>
                  {data &&
                    ((data.release_date && data.release_date.slice(0, 4)) ||
                      (data.last_air_date && data.last_air_date.slice(0, 4)))}
                </p>
              </div>
            </div>
          </div>
          <div className="overview">
            <p>{data && data.overview}</p>
          </div>

          <div className="StreamingServices">
            {service?.flatrate != undefined && 
            <div className='streamContainer'>
              <div className='streamTitle'>STREAM</div>
              <div className="streamLogo">
                {service?.flatrate.map((item, i) => (
                  <div className='box' key={item.logo_path+i}>
                    <img src={`https://image.tmdb.org/t/p/w92${item.logo_path}`} alt="" />
                    {/* <p>{item.provider_name}</p> */}
                  </div>
                ))}
              </div>
            </div>}
            {service?.buy != undefined && 
            <div className='streamContainer'>
              <div className='streamTitle'>BUY</div>
              <div className="streamLogo">
              {service?.buy.map((item, i) => (
                  <div className='box' key={item.logo_path+i}>
                    <img src={`https://image.tmdb.org/t/p/w92${item.logo_path}`} alt="" />
                    {/* <p>{item.provider_name}</p> */}
                  </div>
                ))}
              </div>
            </div>}
            {service?.rent != undefined && 
            <div className='streamContainer'>
              <div className='streamTitle'>RENT</div>
              <div className="streamLogo">
              {service?.rent.map((item, i) => (
                  <div className='box' key={item.logo_path+i}>
                    <img src={`https://image.tmdb.org/t/p/w92${item.logo_path}`} alt="" />
                    {/* <p>{item.provider_name}</p> */}
                  </div>
                ))}
              </div>
            </div>}
          </div>
          
          {data && data.production_companies.length > 0 && (
            <ProCompanies companies={data && data.production_companies} />
          )}
        </div>
      </div> 
      <VideoClip video={video} />
      {recom && (
        <RowItems
          rowId="132"
          link={recom}
          name={`Related ${type == "tv" ? "TV Series" : "Movies"}`}
          type={type}
        />
      )}
      </>: <Loader /> }
      <Footer />
    </div>
  );
}

export default Detail