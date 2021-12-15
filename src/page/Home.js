import React from 'react';
import HeroSection from "../Component/HeroSection";
import MeetFriends from "../Component/MeetingFriends/MeetFriends";



function Home() {

    return(
        <div className='home-container'>
            <HeroSection/>
            <MeetFriends />
        </div>
    )
}
export default Home;