import React from 'react'
import '../Styles/VideoPlayer.css'
import dummy from '../Images/dummy.jpg'
function VideoPlayer() {

let videosArray=[
  {
    videoImg:"https://i.ytimg.com/vi/ORUX1lHbOa8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCLNXpDV-BEwcvIc63JsGmMlpUCmA",
    videoIcon:"https://yt3.googleusercontent.com/ytc/APkrFKbAfC_5NBQ3CM6Lyd2zXUFbC4mym1GCRhmpIwcMXg=s176-c-k-c0x00ffffff-no-rj",
    videoTitle:"I Opened A FREE BANK",
    chTitle:"MrBeast",
    chViews:"109M views . 3 years ago"
  },
  {
    videoImg:"https://i.ytimg.com/vi/dvaedJhv6Ok/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDdeUJnORJAo9bPZaTOkD84OIm98g",
    videoIcon:"https://yt3.googleusercontent.com/ytc/APkrFKaHAIU8dJKGRXVU0Kipu9lrb6BFKcdSI2XTRA59wA=s176-c-k-c0x00ffffff-no-rj",
    videoTitle:" REWIND MUNDIAL QATAR 2022",
    chTitle:" Sergio Agüero Oficial",
    chViews:"2.5M views. 9 months ago"
  },
  {
    videoImg:"https://i.ytimg.com/vi/ORUX1lHbOa8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCLNXpDV-BEwcvIc63JsGmMlpUCmA",
    videoIcon:"https://yt3.googleusercontent.com/ytc/APkrFKbAfC_5NBQ3CM6Lyd2zXUFbC4mym1GCRhmpIwcMXg=s176-c-k-c0x00ffffff-no-rj",
    videoTitle:"I Opened A FREE BANK",
    chTitle:"MrBeast",
    chViews:"109M views . 3 years ago"
  },
  {
    videoImg:"https://i.ytimg.com/vi/dvaedJhv6Ok/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDdeUJnORJAo9bPZaTOkD84OIm98g",
    videoIcon:"https://yt3.googleusercontent.com/ytc/APkrFKaHAIU8dJKGRXVU0Kipu9lrb6BFKcdSI2XTRA59wA=s176-c-k-c0x00ffffff-no-rj",
    videoTitle:" REWIND MUNDIAL QATAR 2022",
    chTitle:" Sergio Agüero Oficial",
    chViews:"2.5M views. 9 months ago"
  },
  {
    videoImg:"https://i.ytimg.com/vi/ORUX1lHbOa8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCLNXpDV-BEwcvIc63JsGmMlpUCmA",
    videoIcon:"https://yt3.googleusercontent.com/ytc/APkrFKbAfC_5NBQ3CM6Lyd2zXUFbC4mym1GCRhmpIwcMXg=s176-c-k-c0x00ffffff-no-rj",
    videoTitle:"I Opened A FREE BANK",
    chTitle:"MrBeast",
    chViews:"109M views . 3 years ago"
  },
  {
    videoImg:"https://i.ytimg.com/vi/dvaedJhv6Ok/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDdeUJnORJAo9bPZaTOkD84OIm98g",
    videoIcon:"https://yt3.googleusercontent.com/ytc/APkrFKaHAIU8dJKGRXVU0Kipu9lrb6BFKcdSI2XTRA59wA=s176-c-k-c0x00ffffff-no-rj",
    videoTitle:" REWIND MUNDIAL QATAR 2022",
    chTitle:" Sergio Agüero Oficial",
    chViews:"2.5M views. 9 months ago"
  },
  {
    videoImg:"https://i.ytimg.com/vi/ORUX1lHbOa8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCLNXpDV-BEwcvIc63JsGmMlpUCmA",
    videoIcon:"https://yt3.googleusercontent.com/ytc/APkrFKbAfC_5NBQ3CM6Lyd2zXUFbC4mym1GCRhmpIwcMXg=s176-c-k-c0x00ffffff-no-rj",
    videoTitle:"I Opened A FREE BANK",
    chTitle:"MrBeast",
    chViews:"109M views . 3 years ago"
  },
  {
    videoImg:"https://i.ytimg.com/vi/dvaedJhv6Ok/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDdeUJnORJAo9bPZaTOkD84OIm98g",
    videoIcon:"https://yt3.googleusercontent.com/ytc/APkrFKaHAIU8dJKGRXVU0Kipu9lrb6BFKcdSI2XTRA59wA=s176-c-k-c0x00ffffff-no-rj",
    videoTitle:" REWIND MUNDIAL QATAR 2022",
    chTitle:" Sergio Agüero Oficial",
    chViews:"2.5M views. 9 months ago"
  },
  {
    videoImg:"https://i.ytimg.com/vi/ORUX1lHbOa8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCLNXpDV-BEwcvIc63JsGmMlpUCmA",
    videoIcon:"https://yt3.googleusercontent.com/ytc/APkrFKbAfC_5NBQ3CM6Lyd2zXUFbC4mym1GCRhmpIwcMXg=s176-c-k-c0x00ffffff-no-rj",
    videoTitle:"I Opened A FREE BANK",
    chTitle:"MrBeast",
    chViews:"109M views . 3 years ago"
  },
  {
    videoImg:"https://i.ytimg.com/vi/dvaedJhv6Ok/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDdeUJnORJAo9bPZaTOkD84OIm98g",
    videoIcon:"https://yt3.googleusercontent.com/ytc/APkrFKaHAIU8dJKGRXVU0Kipu9lrb6BFKcdSI2XTRA59wA=s176-c-k-c0x00ffffff-no-rj",
    videoTitle:" REWIND MUNDIAL QATAR 2022",
    chTitle:" Sergio Agüero Oficial",
    chViews:"2.5M views. 9 months ago"
  },
  {
    videoImg:"https://i.ytimg.com/vi/ORUX1lHbOa8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCLNXpDV-BEwcvIc63JsGmMlpUCmA",
    videoIcon:"https://yt3.googleusercontent.com/ytc/APkrFKbAfC_5NBQ3CM6Lyd2zXUFbC4mym1GCRhmpIwcMXg=s176-c-k-c0x00ffffff-no-rj",
    videoTitle:"I Opened A FREE BANK",
    chTitle:"MrBeast",
    chViews:"109M views . 3 years ago"
  },
  {
    videoImg:"https://i.ytimg.com/vi/dvaedJhv6Ok/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDdeUJnORJAo9bPZaTOkD84OIm98g",
    videoIcon:"https://yt3.googleusercontent.com/ytc/APkrFKaHAIU8dJKGRXVU0Kipu9lrb6BFKcdSI2XTRA59wA=s176-c-k-c0x00ffffff-no-rj",
    videoTitle:" REWIND MUNDIAL QATAR 2022",
    chTitle:" Sergio Agüero Oficial",
    chViews:"2.5M views. 9 months ago"
  },
]

  return (
<>

{
  videosArray.map((arr)=>(
    <>
    <div className='yt-videos'>
        <div className="video-img">
            <img src={arr.videoImg} alt="" />
        </div>
        <div className="video-body">
            <div className="video-icon">
                    <img src={arr.videoIcon} alt="" />
            </div>
            <div className="video-texts">
                <h3 className='video-title'>{arr.videoTitle}</h3>
                <p className='ch-title'>{arr.chTitle}</p>
                <p className='ch-views'>{arr.chViews}</p>
            </div>
        </div>
    </div>
    </>
  ))
}
</>
   
    
  )
}

export default VideoPlayer