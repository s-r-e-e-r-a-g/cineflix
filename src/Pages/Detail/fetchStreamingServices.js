import {API_KEY,BASE_URL} from '../../tmdb/tmdbConfig'

export const fetchStreamingServices = (type, id, setService) =>{
  fetch(`${BASE_URL}${type}/${id}/watch/providers?api_key=${API_KEY}&with_watch_providers=8&watch_region=IN`).then(res=>res.json())
  .then(data=> {
    setService(data.results.IN);
    // console.log(data)
    })
  .catch(err=>console.log(err.message))
}