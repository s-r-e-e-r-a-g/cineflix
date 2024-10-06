import React from "react"
import {Routes, Route} from "react-router-dom"
import Home from "./Pages/Home/Home"
import Movies from "./Pages/Movies/Movies"
import Tv from "./Pages/Tv/Tv"
import Sports from "./Pages/Sports/Sports"
import Detail from "./Pages/Detail/Detail"
import Search from "./Pages/Search/Search"

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/movie" element={<Movies />} />
      <Route path="/tv" element={<Tv />} />
      <Route path="/sports" element={<Sports />} />
      <Route path="/search/:query" element={<Search />} />
      <Route path="/:type/:id" element={<Detail />} />
      <Route path="*" element={<h2>Page Not Found</h2>} />
    </Routes>
  )
}

export default App
