import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import './PonyDetails.css'
import axios from "axios";

function PonyDetails() {

    const[ponyData, setPonyData] = useState([])
    const params = useParams();
    console.log(params)
    async function getPonyData() {
        try{
            const result = await axios.get(`http://ponyweb.ml/v1/character/${params.id}?limit=1`);
            setPonyData(result.data.data);
            console.log(result.data.data);
        }catch(e){
            console.error(e);
        }
    }
    useEffect(()=>{
        getPonyData();
    },[])

    return(
        <div className='pony-details-container'>
            {ponyData.map((pony)=>{
                return(
                    <section className='pony-details-section' key={pony.id}>
                        <div className='pony-left-wrapper'>
                            <button>

                            </button>
                            {pony.images.map((item)=>{
                                const{index} = item;
                                return(
                                    <img key={index} />
                                )
                            })}
                            <button>

                            </button>
                        </div>
                    </section>
                )
            })}
        </div>
    )

}
export default PonyDetails;