import React from 'react'
import { Sidebar } from '../components/SideBar/SideBar';
import Heading from '../components/Heading/Heading';
import MainCard from '../components/MaainCard/MainCard';
import MainCard2 from '../components/MainCard2/MainCard2';
import RegularCollection from '../components/RegularCollection/RegularCollection';
import { RegularCollectionTable } from '../components/SeeDetail/RegularCollectionTable/RegularCollectionTable';
import './Home.css';
import FirstHeading from '../components/FirstHeading/FirstHeading';

function Home() {
  return (
    <div style={{ padding:"10px" }}>
        <FirstHeading/>
        <div className='home_page_container'>
        <div classNme="left_side">
            <Sidebar/>
        </div>

        <div classNme="right_side">
            <hr></hr>
            <Heading/> <br></br>
            <div style={{ display: 'flex', gap:'10px' }}>
        <MainCard/>
        
        <MainCard2/>
        </div>
        <br></br>
        <RegularCollection/>
        <br></br>
        <RegularCollectionTable/>

        </div>

    </div>
    </div>

    
  )
}

export default Home;