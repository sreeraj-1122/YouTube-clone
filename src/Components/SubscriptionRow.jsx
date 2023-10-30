import React from 'react'
import '../Styles/SubscriptionRow.css'
import live from "../Images/live.png"
function SubscriptionRow(props) {
    let channelInfo=[

        {
            channelImg:"https://yt3.googleusercontent.com/XF3jjEEUxiWUSNM95ydbn8FuhaSZmebPEU8HpjhBdtFRkIPy_F4N3KxD3d-6WtZeYOKwjijswuU=s176-c-k-c0x00ffffff-no-rj",
            channelName:"Aashirvad Cinemas",

        },
        {
            channelImg:"https://yt3.googleusercontent.com/ytc/APkrFKbAfC_5NBQ3CM6Lyd2zXUFbC4mym1GCRhmpIwcMXg=s176-c-k-c0x00ffffff-no-rj",
            channelName:"MrBeast",

        },
        {
            channelImg:"https://yt3.googleusercontent.com/ytc/APkrFKbjhEFJ1gSTjYfBjoWOEfqTX5k_Qcmdo6LM3f74ow=s176-c-k-c0x00ffffff-no-rj",
            channelName:"Manorama News",

        },
        {
            channelImg:"https://yt3.googleusercontent.com/dZrWJVS5N3R5R-qkneimoPXYLBC-apFge8e8q94jrMur7bLPc7PaOO1fiwPJrVfsando6fP2=s176-c-k-c0x00ffffff-no-rj",
            channelName:"GreatStack",

        },
        {
            channelImg:"https://yt3.googleusercontent.com/DJ6-zEZzm4CZxGaCY4ZszgTyUYgFD9vqe1WsTr2et4LwQ5dlaXuf6Pbcyg8Bif6_n4x2ud5IFw=s176-c-k-c0x00ffffff-no-rj",
            channelName:"Brototype Malayalam",

        },

    ]
  return (
    <div  className='subscription-row'>
        
            <div className="subscription-left">
                <img src={props.img} alt="" className='channel-logo' />
                <p className='channel-name'>{props.name}</p>
            </div>
            <div className="subscription-right">
                <img src={live} alt="" className='live-img' />
            </div>

    </div>
  )
}

export default SubscriptionRow