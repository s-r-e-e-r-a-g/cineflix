import {API_KEY, BASE_URL, OMDB_KEY} from '../../tmdb/tmdbConfig'


export const fetchMediaDetails = (type, id, setData) =>{
  fetch(`${BASE_URL}${type}/${id}?api_key=${API_KEY}`).then(res=>res.json())
  .then(data=> {
    fetchImdbRating(data.imdb_id).then(imdb => {
      setData({...data, imdb});
    })
    
    
    })
  .catch(err=>console.log(err.message))
}



const fetchImdbRating = async (id) => {
  if(id == undefined)
    return null;
  return fetch(`https://www.omdbapi.com/?apikey=${OMDB_KEY}&i=${id}`)
  .then(data => data.json())
  .then(res =>  {
    let newCount = formatNumber(res.imdbVotes)
    return {
      rating: res.imdbRating,
      count: newCount,
    }
  })
  .catch(err=>{
    console.log(err.message);
    return null;
  });
}

function formatNumber(n) {
  let num = n.split(",").join('');
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}