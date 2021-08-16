import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './SearchDetails.css';
import PonyCard from "../Component/PonyCard";



function SearchDetails({searchText}) {
    const [ponyData, setPonyData] = useState([]);

    async function fetchData() {
        try {
            const result = await axios.get(`http://ponyweb.ml/v1/character/${searchText}`);
            setPonyData(result.data.data);
            console.log(result.data.data)
            console.log(ponyData) /*the problem was that I thought the ponyData was still empty, setState has not worked. because this
            was still []. But with the working version, the data is there, the difference is that I now mapped the ponyData in the
            return section.*/

        } catch (e) {
            console.error(e);
        }
    }

    useEffect(()=>{
        fetchData()
    },[])


    return (
        <div className='search-details-container'>
            <div className='search-details-section'>
                <h2>You Have Searched:</h2>
                <PonyCard ponyData={ponyData}/>
            </div>

        </div>
    );
}

export default SearchDetails;
