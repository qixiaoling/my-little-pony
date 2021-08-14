import React, {useEffect, useState} from 'react';
import './SearchDetails.css';
import axios from "axios";

function SearchDetails({searchText}) {

    const[searchResult, setSearchResult] = useState([]);

    useEffect(() => {

        async function fetchData() {
            try {
                const result = await axios.get(`http://ponyweb.ml/v1/character/${searchText}`);
                setSearchResult(result.data);
                console.log(result.data)
                console.log(searchResult)
            } catch (e) {
                console.error(e)

            }
        }
        if(searchText){
            fetchData();
        }


    }, [searchText])


    return (
        <div className='search-details-container'>
            {searchText}
        </div>

    )
}

export default SearchDetails;