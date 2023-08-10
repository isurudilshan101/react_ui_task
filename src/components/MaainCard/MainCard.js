import CarName from '../CarName/CarName';
import PriceArea from '../PriceArea/PriceArea';
import './MainCard.css';
import CardCC from '../CardCC/CardCC';
import BottomCard from '../BottomCard/BottomCard';

function MainCard() {

  const styleCC1="card_cc_container bg-yellow-500 rounded-3xl w-44 h-40 flex flex-col justify-center items-center";
  const styleSpeed1="card_cc_container bg-yellow-200 rounded-3xl w-44 h-32 flex flex-col justify-center items-center";
  const styleBHP1="card_cc_container bg-yellow-200 rounded-3xl w-44 h-32 flex flex-col justify-center items-center";
  const styleCyl1="card_cc_container bg-blue-300 rounded-3xl w-44 h-40 flex flex-col justify-center items-center";
  const styleBottomCard1="card_cc_container bg-pink-300 rounded-3xl w-80 h-20 flex flex-col justify-center items-center";
  

  const icon_cc="text-black fas fa fa-car";

  return (
    <div class="w-1/2 bg-green-300 h-auto p-5 rounded-2xl border border-black shadow">
        <div className='main_class_container'>

      
        <div className='left_side'>
                <CarName car_name="Range Rover"/>
                <div> 
                <img src="data:image/jpeg;base64,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" alt="logo" class=" pb-16 w-50 h-70 mt-2 object-contain"/>
                </div>

                <PriceArea price="$38,700"/>

        </div>

        <div className='right_side'>

            <div className='four_cards'>
                    <div className="right_left">
                        <CardCC styleCC={styleCC1} icon={icon_cc} title="1997 CC"/><br></br>
                        <CardCC styleCC={styleSpeed1} icon={icon_cc} title="6 Speed"/>

                    </div>

                    <div className="right_right">
                    <CardCC styleCC={styleBHP1} icon={icon_cc} title="246.74 BHP"/><br></br>

                     <CardCC styleCC={styleCyl1} icon={icon_cc} title="4 Cylinder"/>


                    </div>


            </div>
                    <br></br>
                    <BottomCard styles={styleBottomCard1} kilometer=" 12500km"/>

        </div>
    </div>

    </div>


  )
}

export default MainCard;