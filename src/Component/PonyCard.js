import React from 'react';
import'./PonyCard.css'
import {useHistory} from 'react-router-dom';


function PonyCard({ponyData}){
    const history = useHistory();
    const viewPonyDetails=(id)=>{
        history.push (`./pony/${id}`)
    }

    return(
        <div className='pony-card-container' id='pony-card'>
            {ponyData.map((pony)=>{
                return(
                    <article className='pony-article' key={pony.id} onClick={()=>viewPonyDetails(pony.id)}>
                        <img className='pony-image' src={pony.image[0]}/>
                        <p>{pony.name}</p>
            </article>
                )
            })}
        </div>
    )
}
export default PonyCard;