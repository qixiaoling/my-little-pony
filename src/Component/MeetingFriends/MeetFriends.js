import React, {useEffect, useState} from 'react';
import axios from "axios";
import PonyCard from "../PonyCard";
import './MeetingFriends.css'

function MeetFriends() {


    const [ponyData, setPonyData] = useState([]);


    async function getData() {
        try {
            const result = await axios.get('http://ponyweb.ml/v1/character/all?limit=6');
            setPonyData(result.data.data);
            console.log(result.data.data)
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        getData();

    }, [])



    return (
        <div className='card-section-container'>
            <div className='card-section-title'>
                <div>
                    <span className='glitter'>Meet the Magical Friends </span>
                </div>
                <br/>
                <div>
                    <button className='glitter-btn' > See All</button>
                </div>
            </div>

            <PonyCard ponyData={ponyData}/>
        </div>
    )
}

export default MeetFriends