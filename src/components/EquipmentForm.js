import React,{useEffect, useState} from 'react'
import EquipmentItem from './EquipmentItem';

function EquipmentForm(props) {
    const {subheadLabels,details,amountofEquipmentWeight,setamountOfEquipmentWeight} = props
    const [EquipmentWeightTotalNumber,setEquipmentWeightTotalNumber] = useState(0)
    const [EquipmentQuantity,setEquipmentQuantity] = useState(0)

    let a = 0//未完成 用來做總重量加總
    useEffect(() => {
        let EquipmentWeightTotalNumberCount=0;//裝備重量總和
        let EquipmentQuantityCount=0;//裝備數量總和

        console.log("form")
        for(let i in details){
            EquipmentWeightTotalNumberCount += details[i].weight
            EquipmentQuantityCount += details[i].number
        }

        setEquipmentWeightTotalNumber(EquipmentWeightTotalNumberCount)
        setEquipmentQuantity(EquipmentQuantityCount)
        a = amountofEquipmentWeight+EquipmentWeightTotalNumberCount
        console.log('a---------',a)
        setamountOfEquipmentWeight(a);
    }, [])

    return (
        <>
            <div className='formDataContainer'>
                <div className='equipmentSubtitle'>{subheadLabels}</div>
                <div className='formDataItemContainer'>
                    <div className='formDataItem_name'>品項</div>
                    <div className='formDataItem_remark'>備註</div>
                    <div className='formDataItem_count'>數量</div>
                    <div className='formDataItem_weight'>重量</div>
                </div>
                <div className='formDataItemContentContainer'>
                {console.log('gg')}
                {details.map((detailsEl,i)=>(
                <EquipmentItem
                    key ={i}
                    detail = {details[i]}
                />
                ))}
                </div>
                <div className='partOfEquipmentTotal'>
                    <div className='partOfEquipmentTotal_number'>{EquipmentQuantity}</div>
                    <div className='partOfEquipmentTotal_weight'>{EquipmentWeightTotalNumber}g</div>
                </div>
            </div>
        </>
    )
}

export default EquipmentForm
