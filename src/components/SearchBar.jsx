import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../context/StoreContext';
import { IoIosSearch } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { useLocation } from 'react-router-dom';

const SearchBar = () => {

    const {search,setSearch,showSearchBar,setShowSearchBar} = useContext(StoreContext);
    const [searchBarVisible, setSearchBarVisible] = useState(false);
    const location = useLocation();

    useEffect( ()=>{
        if(location.pathname.includes('collection')){
            setSearchBarVisible(true);
        }
        else {
            setSearchBarVisible(false); 
        }
    }, [location])

  return showSearchBar && searchBarVisible ? (
    <div className='bg-[#fff] text-center poppins-regular'>
        <div className='inline-flex items-center justify-center border border-[#1f818c]
                        px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
           <input className='flex-1 outline-none bg-inherit text-sm' 
                  type='text' placeholder='Search'
                  value={search} onChange={(e)=> setSearch(e.target.value)}/>
            <IoIosSearch className='w-8 h-8 cursor-pointer text-[#0D0D0D]'/>            
        </div>
        <IoCloseOutline onClick={()=> setShowSearchBar(false)}
        className='inline w-8 h-8 cursor-pointer text-[#0D0D0D]'/>
    </div>
  ) 
  : null
}

export default SearchBar