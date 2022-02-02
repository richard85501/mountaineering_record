import React from 'react'
import NavBar from '../components/NavBar'
import '../styles/Itinerary.scss'

function Itinerary () {
    return (
        <>
          <div className='aboutcontainer'>
          <NavBar/>
            <div className='aboutNavBorder'></div>
            <div className='ItineraryContainer'>
            <div className='Itinerarytitle'>行程</div>
              <div className='ItineraryContentContainer'>
                <ul>
                  <li>D1</li>
                  <li>0535起床 全家旁住宿</li>
                  <li>0730武陵農場</li>
                  <li>0845武陵吊橋</li>
                  <li>0950 池有登山口</li>
                  <li>1050 1k</li>
                  <li>1110 1.2k平台</li>
                  <li>1200 1.7k 午餐</li>
                  <li>1230 續行</li>
                  <li>1340 2.9k</li>
                  <li>1430 三叉</li>
                  <li>1533 池有山</li>
                  <li>1540 回第二登山口</li>
                  <li>1602 池有樹</li>
                  <li>1700 新達山屋</li>
                </ul>
                <ul>
                  <li>D2</li>
                  <li>0630出發</li>
                  <li>0845 品田山</li>
                  <li>1120過斷崖</li>
                  <li>1220 布秀蘭山</li>
                  <li>1230休午餐</li>
                  <li>1250續行</li>
                  <li>1535 素密達山</li>
                  <li>1550 素密達斷崖</li>
                  <li>1700 過完素密達斷崖</li>
                  <li>1730 素密達山屋</li>
                </ul>
                <ul>
                  <li>D3</li>
                  <li>0520 起床</li>
                  <li>0720 出發</li>
                  <li>0823 5.8k 過完地形</li>
                  <li>0900 5.5K</li>
                  <li>0950 5.1 k</li>
                  <li>1000 5K</li>
                  <li>1130 北峰</li>
                  <li>1245離開雪北山屋</li>
                  <li>1300 3.8k</li>
                  <li>1435 2.4K</li>
                  <li>1440 2.3K</li>
                  <li>1515 北峰</li>
                  <li>1555 進樹林前兵分二路</li>
                  <li>1730 1k</li>
                  <li>1830 369山屋</li>
                </ul>
                <ul>
                  <li>D4</li>
                  <li>0640 起床</li>
                  <li>0810 離開369</li>
                  <li>0850 東峰</li>
                  <li>0910 續行</li>
                  <li>0925 哭破上緣</li>
                  <li>0935 平台</li>
                  <li>1015 3k</li>
                  <li>1036 七卡</li>
                  <li>1128 登山口</li>
                </ul>
              </div>
            </div>
          </div>
        </>
    )
}

export default Itinerary 
