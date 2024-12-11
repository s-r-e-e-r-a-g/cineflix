export const API_KEY = import.meta.env.VITE_API_KEY
export const OMDB_KEY = import.meta.env.VITE_OMDB_KEY
export const BASE_URL = "https://api.themoviedb.org/3/"

f (!API_KEY) {
  console.error("TMDB API_KEY is missing");
}
if (!OMDB_KEY) {
  console.error("OMDB API_KEY is missing");
}



export const links = {
  "trending": `${BASE_URL}trending/all/day?api_key=${API_KEY}&language=en-US`,
  "image_base": "https://image.tmdb.org/t/p/w1280",
  "discoverMovie": `${BASE_URL}discover/movie?api_key=${API_KEY}`,
  "discoverTv": `${BASE_URL}discover/tv?api_key=${API_KEY}`,
  "topRatedMovies": `${BASE_URL}movie/top_rated?api_key=${API_KEY}`,
  "topRatedTv": `${BASE_URL}tv/top_rated?api_key=${API_KEY}`,
  "indianMovies": `${BASE_URL}discover/movie?api_key=${API_KEY}&with_origin_country=IN`,
  "indianTv": `${BASE_URL}discover/tv?api_key=${API_KEY}&with_origin_country=IN`,
  "indianLanguage": `${BASE_URL}discover/movie?api_key=${API_KEY}&region=IN&with_original_language=`
}

export const movieGenre = {
  "getGenre": `${BASE_URL}genre/movie/list?api_key=${API_KEY}`,
  "setGenre": `${BASE_URL}discover/movie?api_key=${API_KEY}&with_genres=`
}
export const tvGenre = {
  "getGenre": `${BASE_URL}genre/tv/list?api_key=${API_KEY}`,
  "setGenre": `${BASE_URL}discover/tv?api_key=${API_KEY}&with_genres=`
}
export const searchLinks = {
  "searchAll": `${BASE_URL}search/multi?api_key=${API_KEY}&include_adult=false&query=`,
  "searchMovie": `${BASE_URL}search/movie?api_key=${API_KEY}&include_adult=false&query=`,
  "searchTv": `${BASE_URL}search/tv?api_key=${API_KEY}&include_adult=false&query=`
}

