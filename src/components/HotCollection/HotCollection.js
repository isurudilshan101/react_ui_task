import React from 'react';
import './HotCollection.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function HotCollection() {
  return (
    <div className='hot_collection_container'>
        <div >
       
             <i class="fa-solid fa-fire text-yellow-500 text-4xl"></i>

        </div>

        <div>
            <h className="font-bold text-xl"> Hot Collections
        </h>

        </div>

    </div>
  )
}

export default HotCollection;