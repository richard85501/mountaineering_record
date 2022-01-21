import React from 'react'
import { Link } from 'react-router-dom'

function JournalUnit(props) {
    const {indexTitle,upperPicture,middlePicture}= props
    return (
        <>
        <div className="journalUnit">
            <div className='upperContent'>
                <div className="upperContentUnit">
                  <img className='upperContentUnitImg' src = {upperPicture} alt=""></img>
                </div>
            </div>
            <Link to="/about" style={{ textDecoration: 'none' }}>
                <div className='middlebackground'>
                    <div>{indexTitle}</div>
                </div>
            </Link>
            <div className='bottomContent'>
                <div className='bottomContentUnit'>
                    <img className='bottomContentUnitImg' src = {middlePicture}  alt=""></img>
                </div>
            </div>
        </div>
        </>
    )
}

export default JournalUnit
