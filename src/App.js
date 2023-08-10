import './App.css';
import Home from './Pages/Home';
import BottomCard from './components/BottomCard/BottomCard';
import CarName from './components/CarName/CarName';
import CardCC from './components/CardCC/CardCC';
import FirstHeading from './components/FirstHeading/FirstHeading';
import Heading from './components/Heading/Heading';
import HotCollection from './components/HotCollection/HotCollection';
import MainCard from './components/MaainCard/MainCard';
import MainCard2 from './components/MainCard2/MainCard2';
import Notification from './components/Notification/Notification';
import PriceArea from './components/PriceArea/PriceArea';
import RegularCollection from './components/RegularCollection/RegularCollection';
import SearchBar from './components/SearchBar/SearchBar';
import { RegularCollectionTable } from './components/SeeDetail/RegularCollectionTable/RegularCollectionTable';
import { Sidebar } from './components/SideBar/SideBar';
// import SeeDetailButton from './components/SeeDetail/SeeDetailButton';

function App() {
  
  // const styleCC1="card_cc_container bg-yellow-500 rounded-3xl w-44 h-40 flex flex-col justify-center items-center";
  // const styleCC2="card_cc_container bg-yellow-300 rounded-3xl w-44 h-40 flex flex-col justify-center items-center";
  // const styleCyl1="card_cc_container bg-blue-300 rounded-3xl w-44 h-40 flex flex-col justify-center items-center";
  // const styleCyl2="card_cc_container bg-blue-500 rounded-3xl w-44 h-40 flex flex-col justify-center items-center";
  
  
  // const styleBHP1="card_cc_container bg-yellow-200 rounded-3xl w-44 h-32 flex flex-col justify-center items-center";
  // const styleBHP2="card_cc_container bg-blue-200 rounded-3xl w-44 h-32 flex flex-col justify-center items-center";

  // const styleSpeed1="card_cc_container bg-yellow-200 rounded-3xl w-44 h-32 flex flex-col justify-center items-center";
  // const styleSpeed2="card_cc_container bg-orange-200 rounded-3xl w-44 h-32 flex flex-col justify-center items-center";

  // const styleBottomCard1="card_cc_container bg-pink-300 rounded-3xl w-80 h-20 flex flex-col justify-center items-center";
  // const styleBottomCard2="card_cc_container bg-green-300 rounded-3xl w-80 h-20 flex flex-col justify-center items-center";


  // const icon_cc="text-black fas fa fa-car";

  return (
    <div >
       



    {/* <SeeDetailButton/>
    <FirstHeading/>

    <Heading/> <br></br>

    <HotCollection/> <br></br>

    <div style={{ display: 'flex', gap:'10px' }}>
        <MainCard/>
        
        <MainCard2/>
    </div>
    <br></br>
    <RegularCollection/>
    <br></br>
    <RegularCollectionTable/>

    <Sidebar/> */}

    <Home/>


    </div>
  );
}

export default App;
