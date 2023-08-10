import './PriceArea.css';

import React from 'react'

function PriceArea({price}) {
  return (
    <div className='price_area_container'>
         <h3 class="text-pink-500">Asking Price</h3>

         <div className='price_value items-end gap-2 flex'>
             <h1 className="text-4xl font-bold text-black">{price}</h1>
            <h3 className="text-pink-500">USD</h3>
        </div>
        
         

    </div>
  )
}

export default PriceArea;