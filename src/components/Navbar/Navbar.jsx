import React from 'react'
import {useRef, useState, useEffect} from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import './Navbar.css'
import logo from '../../Assets/logo/logo.png'
import SearchSuggestion from '../SearchSuggestion/SearchSuggestion'


const Navbar = ({placeholder,searchLink, media_type}) => {
  const [open, setOpen] = useState(false);
  const [searchKey, setSearchKey] = useState("")
  const [searchData, setSearchData] = useState([])
  const [click, setClick] = useState(false)

  
  const [activeIndex, setActiveIndex] = useState(-1)

  const listRef = useRef();
  const navigate = useNavigate();
  useEffect(()=>{
    let menuHandle = (e)=>{
      if(open){
        if(!listRef.current.contains(e.target)){
            setOpen(false);
        }
      }
    }
    document.addEventListener("mousedown",menuHandle);
  },[open])
  useEffect(() => {
    if (searchKey && !click) {
     const timer = setTimeout(() => {
      fetch(`${searchLink}${searchKey}`)
        .then(res => res.json())
        .then(data => {
          setSearchData(data.results.splice(0, 6));
        })
        .catch(err => console.log(err.message));
    }, 500);
    return () => clearTimeout(timer);
  }else{
    setSearchData([])
  }
}, [searchKey]);

  const searchFn = (e) =>{
      setSearchKey(e.target.value)
      setClick(false)
  }
  let root = document.querySelector("#root");
  const searchSubmit = (e) => {
    e.preventDefault();
    if(searchKey.trim() == "") return;
    navigate(`/search/${searchKey}`);
    root.scrollTop = 0;
    const timer = setTimeout(()=>{
      setSearchData([])
    },510)
    return () => clearTimeout(timer); 
  }


  const showDetails = (type, id, name) => {
    navigate(`/${type}/${id}`)
    setSearchKey(name)
    setSearchData([])
    setClick(true)
  }


  const handleKeyDown = (e) => {
    if (!searchData || searchData.length === 0) return

    if (e.key === 'ArrowDown') {
      setActiveIndex((prevIndex) => (prevIndex + 1) % searchData.length)
    } else if (e.key === 'ArrowUp') {
      setActiveIndex((prevIndex) => (prevIndex - 1 + searchData.length) % searchData.length)
    } else if (e.key === 'Enter') {
      const selectedItem = searchData[activeIndex];
      if (selectedItem) {
        showDetails(
          media_type ? media_type : selectedItem.media_type,
          selectedItem.id,
          selectedItem.title ? selectedItem.title : selectedItem.name
        )
      }
    }
  }

  return (
    <>
    <nav>
        <NavLink to="/" className='logo-container'>
            <img src={logo} className='logo' alt='logo' />
        </NavLink>
        <span onClick={()=>setOpen(true)} className="material-symbols-outlined menu">menu</span>
        <div className="list-container">
            <ul ref={listRef} className={open ? "opened" : ""}>
            <span onClick={()=>setOpen(false)} className="material-symbols-outlined close">close</span>
                <li className='list-items'>
                    <NavLink className='list-item' to='/'>Home</NavLink>
                </li>
                <li className='list-items'>
                    <NavLink className='list-item' to='/movie'>Movies</NavLink>
                </li>
                <li className='list-items'>
                    <NavLink className='list-item' to='/tv'>TV series</NavLink>
                </li>
                <li className='list-items'>
                    <NavLink className='list-item' to='/sports'>Sports</NavLink>
                </li>
            </ul>
        </div>
        <div className="search-container-wrapper">
        <form className='search-container' onSubmit={searchSubmit}>
            <input type="text" value={searchKey} onChange={searchFn} placeholder={placeholder} onKeyDown={handleKeyDown} />
            <button type="submit">
               <span className="material-symbols-outlined">search</span>
            </button>
        </form>
        {searchData && searchKey && <SearchSuggestion data={searchData} setSearchData={setSearchData} setSearchKey={setSearchKey} media_type={media_type} setClick={setClick} activeIndex={activeIndex} />}
      </div>
    </nav>
    </>
  );
}

export default Navbar