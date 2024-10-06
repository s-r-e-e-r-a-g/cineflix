import {API_KEY,BASE_URL} from '../../tmdb/tmdbConfig'

export const fetchMediaDetails = (type, id, setData) =>{
  fetch(`${BASE_URL}${type}/${id}?api_key=${API_KEY}`).then(res=>res.json())
  .then(data=> {
    setData(data);
    console.log(data)
    })
  .catch(err=>console.log(err.message))
}