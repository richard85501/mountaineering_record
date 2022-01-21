import React from 'react'
import NavBar from '../components/NavBar'
import '../styles/Ingredients.scss'


function Ingredients() {
    return (
        <>
          <div className='aboutcontainer'>
          <NavBar/>
            <div className='aboutNavBorder'></div>
            <div className='IngredientsContainer'>
                <div className='IngredientsTitle'>食材清單</div>
                我是食材~開發中
            </div>
          </div>
        </>
    )
}

export default Ingredients
