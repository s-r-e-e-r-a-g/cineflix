import {API_KEY,BASE_URL} from '../../tmdb/tmdbConfig'

export const fetchMediaVideos = (type, id, setVideo) =>{
  fetch(`${BASE_URL}${type}/${id}/videos?api_key=${API_KEY}`).then(res=>res.json())
  .then(data=> {
    setVideo(data);
    console.log(data)
    })
  .catch(err=>console.log(err.message))
}