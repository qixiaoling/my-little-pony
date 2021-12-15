import React from 'react';
import './HeroSection.css'
import ReactPlayer from 'react-player';
function HeroSection() {
    return(
        <div className='heroSection-container'>
           <ReactPlayer  className='video-section' width='100%' height='85vh' controls url='https://www.youtube.com/watch?v=Pa_PRDVpjSk&t=60s'/>
        </div>
    )
}
export default HeroSection;