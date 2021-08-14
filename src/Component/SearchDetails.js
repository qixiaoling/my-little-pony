import React, {useState} from 'react';
import axios from 'axios';
import './SearchDetails.css'



function SearchDetails({searchText}) {
    const [ponyData, setPonyData] = useState([]);

    async function fetchData() {
        try {
            const result = await axios.get('http://ponyweb.ml/v1/character/Applejack');
            setPonyData(result.data.data);

        } catch (e) {
            console.error(e);
        }
    }

    return (
        <>
            <div className='search-details-container'>
                <div className="weather-header">
                    <span className="location-details">
            {ponyData.map((pony)=>{
                return(
                    <p key={pony.name}>{pony.name}</p>
                )
            })}
                        <button
                            type="button"
                            onClick={fetchData}
                        >
              Haal data op!
            </button>
                    </span>
                </div>


            </div>
        </>
    );
}

export default SearchDetails;
