import React from 'react';
function PonyCard({ponyData}){
    return(
        <div>
            {ponyData.map((pony)=>{
                return(
                    <article key={pony.id}>
                        <img src={pony.image[0]}/>
                        <p>{pony.name}</p>
            </article>
                )
            })}
        </div>
    )
}
export default PonyCard;