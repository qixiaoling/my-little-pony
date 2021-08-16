import React, {useEffect, useState} from 'react';
import axios from "axios";
import PonyCard from "./PonyCard";
import './CardSection.css'

function CardSection() {


    const[ponyData, setPonyData] = useState([]);


    async function getDataRarity () {
        try{
            const result = await axios.get('http://ponyweb.ml/v1/character/all?limit=6');
            setPonyData(result.data.data);
            console.log(result.data.data)
        }catch(e){
            console.error(e);
        }
    }

    useEffect(()=>{
        getDataRarity();

    },[])

    return(
        <div className='card-section-container'>
            <h2>Meet the Magical Friends</h2>
            <PonyCard ponyData={ponyData}/>
        </div>
    )
}
export default CardSection