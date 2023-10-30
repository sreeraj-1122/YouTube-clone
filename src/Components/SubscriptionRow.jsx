import React from 'react'
import '../Styles/SubscriptionRow.css'
import live1 from "../Images/live1.png"
function SubscriptionRow() {
    let channelInfo=[

        {
            channelImg:"https://yt3.googleusercontent.com/XF3jjEEUxiWUSNM95ydbn8FuhaSZmebPEU8HpjhBdtFRkIPy_F4N3KxD3d-6WtZeYOKwjijswuU=s176-c-k-c0x00ffffff-no-rj",
            channelName:"Aashirvad Cinemas",
            channelLink:"https://www.youtube.com/@AashirvadCinemasOfficial/about"

        },
        {
            channelImg:"https://yt3.googleusercontent.com/ytc/APkrFKbAfC_5NBQ3CM6Lyd2zXUFbC4mym1GCRhmpIwcMXg=s176-c-k-c0x00ffffff-no-rj",
            channelName:"MrBeast",
            channelLink:"https://youtube.com/@MrBeast?si=7h7aEmt4Cq0mR0jD"


        },
        {
            channelImg:"https://yt3.googleusercontent.com/ytc/APkrFKbjhEFJ1gSTjYfBjoWOEfqTX5k_Qcmdo6LM3f74ow=s176-c-k-c0x00ffffff-no-rj",
            channelName:"Manorama News",
            channelLink:"https://youtube.com/@manoramanews?si=PbyJoZtEipKuhP4n"


        },
        {
            channelImg:"https://yt3.googleusercontent.com/dZrWJVS5N3R5R-qkneimoPXYLBC-apFge8e8q94jrMur7bLPc7PaOO1fiwPJrVfsando6fP2=s176-c-k-c0x00ffffff-no-rj",
            channelName:"GreatStack",
            channelLink:"https://youtube.com/@GreatStackDev?si=fD18Pbzms5SqwCYs"
        },
        {
            channelImg:"https://yt3.googleusercontent.com/ytc/APkrFKbrxTcLIOzMRi8TT-qBDDo0uTxfnD1W7EBs5pIVKw=s176-c-k-c0x00ffffff-no-rj",
            channelName:"Karthik Surya",
            channelLink:"https://youtube.com/@KarthikSuryavlogs?si=EyMTzA-guo2t3MTH"
        },
        {
            channelImg:"https://yt3.googleusercontent.com/Ybu5mW939QWZsOAxzsf1sOqHIFKf8QwY00Rt50hBLxJBjP5INAeD2zSnUMHn1uE6vf_rGwf2Wg=s176-c-k-c0x00ffffff-no-rj",
            channelName:"M4 Tech",
            channelLink:"https://www.youtube.com/@AashirvadCinemasOfficial/about"
        },
        {
            channelImg:"https://yt3.googleusercontent.com/DJ6-zEZzm4CZxGaCY4ZszgTyUYgFD9vqe1WsTr2et4LwQ5dlaXuf6Pbcyg8Bif6_n4x2ud5IFw=s176-c-k-c0x00ffffff-no-rj",
            channelName:"Funbroz Gaming",
            channelLink:"https://youtube.com/@M4Techofficial?si=Z82M5i4JHWWhcQPs"
        },

    ]
  return (

  channelInfo.map((channel)=>(
<div  className='subscription-row'>
        
        <div className="subscription-left">
            <img src={channel.channelImg} alt="" className='channel-logo' />
            <a href={channel.channelLink} >
            <p className='channel-name'>{channel.channelName}</p>

            </a>
        </div>
        <div className="subscription-right">
            <img src={live1} alt="" className='live-img' />
        </div>

</div>
  ))
    
  )
}

export default SubscriptionRow

{/* <div  className='subscription-row'>
        
        <div className="subscription-left">
            <img src={props.img} alt="" className='channel-logo' />
            <p className='channel-name'>{props.name}</p>
        </div>
        <div className="subscription-right">
            <img src={live} alt="" className='live-img' />
        </div>

</div> */}