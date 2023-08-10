import CarName from '../CarName/CarName';
import PriceArea from '../PriceArea/PriceArea';
 
import CardCC from '../CardCC/CardCC';
import BottomCard from '../BottomCard/BottomCard';

function MainCard2() {

   
   
  const styleSpeed2="card_cc_container bg-orange-200 rounded-3xl w-44 h-32 flex flex-col justify-center items-center";
  
  // const styleCyl1="card_cc_container bg-blue-300 rounded-3xl w-44 h-40 flex flex-col justify-center items-center";
  const styleCyl2="card_cc_container bg-blue-500 rounded-3xl w-44 h-40 flex flex-col justify-center items-center";
  const styleCC2="card_cc_container bg-yellow-300 rounded-3xl w-44 h-40 flex flex-col justify-center items-center";
  const styleBHP2="card_cc_container bg-blue-200 rounded-3xl w-44 h-32 flex flex-col justify-center items-center";
  
  const styleBottomCard2="card_cc_container bg-green-300 rounded-3xl w-80 h-20 flex flex-col justify-center items-center";
   
  

  const icon_cc="text-black fas fa fa-car";

  return (
    <div class="w-1/2 bg-white-300 h-auto p-5 rounded-2xl border border-black shadow">
        <div className='main_class_container'>

      
        <div className='left_side'>
                <CarName car_name="Nizan GTR"/>
                <div> 
                <img className='pb-20 pt-8' alt ="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8uXw6eDbBGZZ6ek3Ta3SWXULTlDAGEdEJgg&usqp=CAU"/>
                </div>

                <PriceArea price="$187,900"/>

        </div>

        <div className='right_side'>

            <div className='four_cards'>
                    <div className="right_left">
                    <CardCC styleCC={styleCC2} icon={icon_cc} title="3799 CC"/> <br></br>
                    <CardCC styleCC={styleSpeed2} icon={icon_cc} title="6 Speed"/>

                    </div>

                    <div className="right_right">
                    <CardCC styleCC={styleBHP2} icon={icon_cc} title="591.4 BHP"/><br></br>

                    <CardCC styleCC={styleCyl2} icon={icon_cc} title="6 Cylinder"/>

                    </div>


            </div>
                    <br></br>
                    <BottomCard styles={styleBottomCard2} kilometer=" 9,254km"/>

        </div>
    </div>

    </div>


  )
}

export default MainCard2;