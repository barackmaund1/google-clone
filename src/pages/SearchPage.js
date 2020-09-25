import React from 'react'
import './SearchPage.css'
import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';
import Response from '../response'
import SearchIcon from "@material-ui/icons/Search";
import { Link } from 'react-router-dom';
import Search from '../components/Search';
const SearchPage = () => {
    const [{term}, dispatch] = useStateValue();
    // Live API
    //const {data}=useGoogleSearch(term);
     const data=Response;
    //get the api_keys>> https://developers.google.com/custom-search/v1/using_rest

   console.log(data)
    return (
        <div className='searchPage'>
            <div className='searchPage__header'>
                <Link to='/'>
                   <img className='searchPage__logo' src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' alt=''/>
                   
                </Link>
                <div className='search__headerBody'>
                  <Search hideButtons/>
                  <div className='searchPage__option'>
                       <SearchIcon/>
                       <Link to='/all'>All</Link>
                  </div>
                </div> 
            </div>
            <div className='searchPage__results'>

            </div>
        </div>
    )
}

export default SearchPage

