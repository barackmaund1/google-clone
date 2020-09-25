import React, { useState } from 'react';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic'
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

const Search = ({hideButtons =false}) => {
    const [input,setInput]=useState('');
    const history =useHistory();
    const [{},dispatch]=useStateValue();

    const search = e =>{
      e.preventDefault()

      console.log('You hit the search button >>>',input)
      // do something with input...come back and fix
       dispatch({
        type:actionTypes.SET_SEARCH_TERM,
        term:input
       })
      history.push('/search')
    }

    return (
      <form className="search">
        <div className="search__input">
          <SearchIcon className="search__inputIcon" />
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search Google or type a URL"
          />
          <MicIcon />
        </div>

        {!hideButtons ? (
          <div className="search__button">
            <Button
              
              type="submit"
              onClick={search}
              variant="outlined"
            >
              Google Search
            </Button>
            <Button variant="outlined">
              i'm feeling lucky
            </Button>
          </div>
        ) : (
          <div className="search__button">
            <Button
              className="search__buttonHiddden"
              type="submit"
              onClick={search}
              variant="outlined"
            >
              Google Search
            </Button>
            <Button className="search__buttonHiddden" variant="outlined">
              i'm feeling lucky
            </Button>
          </div>
        )}
      </form>
    );
}

export default Search
