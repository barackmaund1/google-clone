import React from 'react';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic'
import { Button } from '@material-ui/core';

const Search = () => {
    const search = e =>{
      e.preventDefault()
    }

    return (
        <div className='search'>
             <div className='search__input'>
                <SearchIcon className='search__inputIcon'/>
                <input placeholder='Search Google or type a URL'/>
                <MicIcon/>
            </div>
            <div className='search__button'>
               <Button onClick={search} variant='outlined'>Google Search</Button>
               <Button variant='outlined'>i'm feeling lucky</Button>
            </div>
        </div>
    )
}

export default Search
