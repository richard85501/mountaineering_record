import React,{useState,useRef,useEffect} from 'react'

import NavBar from '../components/NavBar';
import EquipmentItem from '../components/EquipmentItem';
import EquipmentCircle from '../components/EquipmentCircle';
import EquipmentForm from '../components/EquipmentForm';

import equipmentData from '../data/equipmentData.json'

import '../styles/equipment.scss';

function Equipment() {
    
    const [subheadLabels,setsubheadLabels] = useState([])
    const [amountofEquipmentWeight,setamountOfEquipmentWeight]=useState(0)
    
    //送array資料進去轉給usestate
    let LabelsArray = [] //所有大分類


    console.log('Equipment')

    useEffect(() => {
        console.log('effect')

        //分類標題
        for(let i in equipmentData[0].equipment){
            LabelsArray[i] = equipmentData[0].equipment[i].title
        }

        setsubheadLabels(LabelsArray)
    }, [])

    return (
        <>
          <div className='aboutcontainer'>
          <NavBar/>
            <div className='aboutNavBorder'></div>
            <div className='equipmentContainer'>
                <div className='equipmentTitle'>{equipmentData[0].majar} </div>
                <div className='equipmentContentContainer'>
                    <div className='equipmentContainer_Left'>
                        <div className='scroll-box'>  
                            {subheadLabels.map((itemEl,i)=>(
                            <EquipmentForm
                                key ={i}
                                subheadLabels={subheadLabels[i]}
                                details = {equipmentData[0].equipment[i].details}
                                amountofEquipmentWeight={amountofEquipmentWeight}
                                setamountOfEquipmentWeight={setamountOfEquipmentWeight}
                            />
                            ))}
                        </div>
                    </div>
                    <div className='equipmentContainer_Right'>
                        {console.log('EquipmentCircle--們口')}
                        <EquipmentCircle/>
                        <div className='totalOfEquipmentWeight'>
                            {/* 總重量:{amountofEquipmentWeight}g */}
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </>
    )
}

export default Equipment
