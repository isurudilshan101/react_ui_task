import SearchBar from '../SearchBar/SearchBar';
import './Heading.css';

import React from 'react'

function Heading() {
  return (
    <div className='heading_container'>

        <div className='left_side'>
        <h class="font-bold text-red-500 text-lg">Good Morning,</h>
 <br></br>
 <h class="font-bold text-black-500 text-2xl">Jeff Reeves</h>
        </div>

        <SearchBar/>
    </div>
  )
}

export default Heading;
