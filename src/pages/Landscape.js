import React,{useState,useEffect} from 'react'

import NavBar from '../components/NavBar';
import '../styles/landscape.scss'

import carousal_1 from '../images/Holy_ridgeline_images/carousal_1.jpg'
import carousal_2 from '../images/Holy_ridgeline_images/carousal_2.jpg'
import carousal_3 from '../images/Holy_ridgeline_images/carousal_3.jpg'
import carousal_4 from '../images/Holy_ridgeline_images/carousal_4.jpg'
import carousal_5 from '../images/Holy_ridgeline_images/carousal_5.jpg'
import carousal_6 from '../images/Holy_ridgeline_images/carousal_6.jpg'
import carousal_7 from '../images/Holy_ridgeline_images/carousal_7.jpg'
import carousal_8 from '../images/Holy_ridgeline_images/carousal_8.jpg'
import carousal_9 from '../images/Holy_ridgeline_images/carousal_9.jpg'
import carousal_10 from '../images/Holy_ridgeline_images/carousal_10.jpg'



function Landscape() {

    const carousalArr = [carousal_1,carousal_2,carousal_3,carousal_4,carousal_5,carousal_6,carousal_7,carousal_8,carousal_9,carousal_10]
    const wordArr = [
      '腳踏聖稜線,後面掛著一包垃圾,有點難以令人直視',
      '池有名樹很美,後面的雲海更美',
      '定緯:雖然我走得慢,但是我都不會喘',
      '中央尖威武霸氣,下次就走死亡稜線好了',
      '試睡強者愷裕晚上的家...好冷...',
      '速密達斷崖輕輕鬆鬆',
      '愷裕:劉暢可以再多練練,走得有點慢',
      '原來我的背包套這麼早就快要飛走了,應該好好打包',
      '雪山主峰仙氣飄飄,不過路程遙遠,腿有點軟了',
      '安全抵達369山屋,回家嚕~'

    ]
    const [numOfcarousal,setNumOfcarousal] = useState(0)
    // const [t,sett] = useState('')

    // useEffect(async() => {
    //   let test = await fetch('http://localhost:3000/test',{
    //     method : 'GET',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       Accept: 'application/json',
    //       }
    //     }
    //   ).then(res => res.json())
    //   sett(t)
    // }, [])
    

    const constonchangeCarousal = () =>{
      console.log('con')
      if(numOfcarousal<carousalArr.length-1){
        setNumOfcarousal(numOfcarousal+1)
      }else{
        setNumOfcarousal(0)
      }
    }

    return (
        <>
          <div className='aboutcontainer'>
          <NavBar/>
            <div className='aboutNavBorder'></div>
            <div className='LandscapeContainer'>
                <div className='LandscapeTitle'>路上遇到的點點滴滴</div>
                <div className='LandscapeContentContainer'>
                  <div className='LandscapeCarousal'>
                    <div className='LandscapeCarousalSingleContainer'>
                        <img className='LandscapeCarousalImg' src={carousalArr[numOfcarousal]} onClick={constonchangeCarousal}/>
                    </div>
                  </div>
                  <div className='LandscapeIntroduce'>
                      {wordArr[numOfcarousal]}
                  </div>
                </div>
            </div>
          </div>
        </>
    )
}

export default Landscape
