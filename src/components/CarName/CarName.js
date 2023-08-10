import React from 'react'
import './CarName.css';

function CarName({car_name}) {
  return (
    <div className='car_name_container'>
        <div className='car_logo'>
            {/* <img src" alt="Car Logo" className="w-20 h-20 object-contain" /> */}
            <img src="./images/logo.png" alt="logo" class="rounded-full w-20 h-20 object-contain"/>

        </div>


        <div className='_car_name'> 
            <h1 class="text-xl font-bold text-black">{car_name} </h1>

            
            <h3 class="text-pink-500">Evaque</h3>

        </div>
    </div>
  )
}

export default CarName;