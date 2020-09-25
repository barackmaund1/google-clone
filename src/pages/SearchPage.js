import React from 'react'
import './SearchPage'
import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';

const SearchPage = () => {
    const [{term}, dispatch] = useStateValue();
    const {data}=useGoogleSearch()

    //get the api_keys>> https://developers.google.com/custom-search/v1/using_rest

   
    return (
        <div className='searchPage'>
            <div className='searchPage__header'>
                <h1>{term}</h1>
            </div>
            <div className='searchPage__results'>

            </div>
        </div>
    )
}

export default SearchPage
