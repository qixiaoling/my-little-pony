import React from 'react';
import'./PonyCard.css'


function PonyCard({ponyData}){
    return(
        <div className='pony-card-container'>
            {ponyData.map((pony)=>{
                return(
                    <article className='pony-article' key={pony.id}>
                        <img className='pony-image' src={pony.image[0]}/>
                        <p>{pony.name}</p>
            </article>
                )
            })}
        </div>
    )
}
export default PonyCard;