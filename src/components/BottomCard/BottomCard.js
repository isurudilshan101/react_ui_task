import React from 'react'
import './BottomCard.css';
 


function BottomCard({styles,kilometer}) {
  return (
    <div className={styles}>
        <div className='bottom_card_container'>
            <div className='car_logo'>
            
                <img src="./images/logo.png" alt="logo" class="rounded-full w-16 h-16"/>

            </div>


        <div className='total_run'> 
            <h1 className="text-1xl font-bold text-black">Total Run: </h1>
            <h className="text-1xl font-bold text-red-500">{kilometer}</h>
        </div>
    </div>
    </div>
  )
}

export default BottomCard;