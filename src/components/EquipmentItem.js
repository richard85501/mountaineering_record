import React from 'react'

function EquipmentItem(props) {
    const {detail} = props
    return (
        <>
        <div className='formDataItemContent_row'>
            <div className='formDataItemContent_name'>{detail.item}</div>
            <div className='formDataItemContent_remark'>{detail.remark}</div>
            <div className='formDataItemContent_count'>{detail.number}</div>
            <div className='formDataItemContent_weight'>{detail.weight}g</div>
        </div>
        </>
    )
}

export default EquipmentItem
