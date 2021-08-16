import React, {useState, useEffect} from 'react';
import HeroSection from "../Component/HeroSection";
import CardSection from "../Component/CardSection";
import axios from "axios";

function Home() {

    const[Rarity, setRarity] = useState(null);
    const[twilight, setTwilight] = useState(null);
    const[fluttershy, setFluttershy] = useState(null);
    const[rainbow , setRainbow] = useState(null);
    const[applejack, setApplejack] = useState(null);
    const[pinkie , setPinkie] = useState(null);

    async function getDataRarity () {
        try{
            const result = await axios
        }catch(e){
            console.error(e);
        }
    }

    return(
        <div className='home-container'>
            <HeroSection/>
            <CardSection/>
        </div>
    )
}
export default Home;