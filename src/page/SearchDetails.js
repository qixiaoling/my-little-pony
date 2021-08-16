import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './SearchDetails.css'
import PonyCard from "../Component/PonyCard";


function SearchDetails({searchText}) {
    const [ponyData, setPonyData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    async function fetchData() {
        setLoading(true);
        setError(false);
        try {
            const result = await axios.get(`http://ponyweb.ml/v1/character/${searchText}?limit=25`);
            setPonyData(result.data.data);
            console.log(result.data.data)
            console.log(ponyData) /*the problem was that I thought the ponyData was still empty, setState has not worked. because this
            was still []. But with the working version, the data is there, the difference is that I now mapped the ponyData in the
            return section.*/

        } catch (e) {
            console.error(e);
            setError(true);
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [searchText])


    return (
        <>
            {error && <span>Oops! Did you get the name right?</span>}
            {loading && <span>Loading</span>}
            <div className='search-details-container'>
                <div className='search-details-section'>
                    <h2>You Have Searched:</h2>
                    <PonyCard ponyData={ponyData}/>
                </div>
            </div>
        </>

    );
}

export default SearchDetails;
