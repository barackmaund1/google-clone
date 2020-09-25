import { useState,useEffect} from 'react'
import API_KEY from './Keys'

 // https://cse.google.com/cse/create/new
const CONTEXT_KEY = "e7bca036859be93d4";
// custom hook
const useGoogleSearch = (term) => {
   const [data,setData] =useState(null);

   useEffect(() => {
    const fetchData=async() =>{
        fetch(`https://www.googleapis.com/customsearch/v17key=${API_KEY}&cx=${CONTEXT_KEY}&=${term}`)
        .then(response=>response.json())
         .then(result=>{
             setData(result)
         })
    }

    fetchData();   
   }, [term])
   return {data}
};

export default useGoogleSearch

