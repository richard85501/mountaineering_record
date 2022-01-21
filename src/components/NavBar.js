import React from 'react'
import '../styles/indexCss.scss'
import { Link } from 'react-router-dom'

import navbarData from '../data/navbarData.json'

function NavBar() {
    return (
        <>
            <div className='aboutNav'>
                <div className='aboutNavTitle'>
                    {navbarData[0].navbarTitle} 
                </div>
                <div className='aboutNavSubtitle'>
                    {navbarData[0].navbarsubtitle}
                </div>
                <div className='aboutNavMenu'>
                    <Link to="/about" className="aboutNavMenuUnit">
                        <div className="aboutNavMenuUnitContent">adipisci(登山日誌)</div>
                        <div className='aboutNavMenuUnitHover'></div>
                    </Link>
                    <Link to="/Altitude" className="aboutNavMenuUnit">
                        <div className="aboutNavMenuUnitContent">adipisci(海拔)</div>
                        <div className='aboutNavMenuUnitHover'></div>
                    </Link>
                    <Link to="/Equipment" className="aboutNavMenuUnit">
                        <div className="aboutNavMenuUnitContent">adipisci(裝備)</div>
                        <div className='aboutNavMenuUnitHover'></div>
                    </Link>
                    <Link to ="/Itinerary" className="aboutNavMenuUnit">
                        <div className="aboutNavMenuUnitContent">adipisci(行程)</div>
                        <div className='aboutNavMenuUnitHover'></div>
                    </Link>
                    <Link to="/landscape" className="aboutNavMenuUnit">
                        <div className="aboutNavMenuUnitContent">landscape(風景)</div>
                        <div className='aboutNavMenuUnitHover'></div>
                    </Link>
                    <Link to="/Ingredients" className="aboutNavMenuUnit">
                        <div className="aboutNavMenuUnitContent">adipisci(食材)</div>
                        <div className='aboutNavMenuUnitHover'></div>
                    </Link>
                </div>
            </div>
            <div className='aboutNavBorder'></div>
        </>
    )
}

export default NavBar
