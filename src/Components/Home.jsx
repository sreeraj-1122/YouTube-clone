import React from 'react'
import '../Styles/Home.css'
import Tags from './Tags'
import VideoPlayer from './VideoPlayer'
function Home() {
  return (
    <div className='home'>
        <Tags/>
        <div className="yt-video-body">
        <VideoPlayer/>
       

        </div>
    </div>
  )
}

export default Home