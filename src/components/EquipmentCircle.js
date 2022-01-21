import React,{useEffect,useRef,useState} from 'react'
// import * as d3 from 'd3' 
import 'chart.js/auto';
import {Pie, Doughnut, charts} from 'react-chartjs-2';
import equipmentData from '../data/equipmentData.json'

function EquipmentCircle() {
    console.log('EquipmentCircle')

    const [piechartLabels,setpiechartLabels] = useState([])
    const [piechartData,setpiechartData] = useState([])

    //送array資料進去轉給usestate
    let LabelsArray = [] //所有大分類
    let DataArray = [] //所有大分類的重量

    useEffect(() => {
        let catagoryTotal;
        console.log('effect')
        for(let i in equipmentData[0].equipment){
            catagoryTotal = 0;
            for(let y in equipmentData[0].equipment[i].details){
                catagoryTotal += equipmentData[0].equipment[i].details[y].weight
            }
            DataArray[i]=catagoryTotal
        }


        for(let i in equipmentData[0].equipment){
            LabelsArray[i] = equipmentData[0].equipment[i].title
        }
        setpiechartLabels(LabelsArray)
        setpiechartData(DataArray)
    }, [])

    console.log('effect後面')

    return (
        <>
            {console.log('circleDOM')}
            <div className='piechartContainer'>
            <Doughnut
                data={{
                    labels:piechartLabels,
                    datasets:[
                        {
                            label:'# of votes',
                            data:piechartData,
                            backgroundColor: [
                                '#80c4a5',
                                '#809fc4',
                                '#a580c4',
                                '#c4809f',
                                '#c4a580',
                                '#ccb573',
                                '#8acc73',
                                '#73ccb5',
                                '#738acc',
                                '#7373cc',
                            ],
                            hoverBackgroundColor: [
                                '#4c354c',
                                '#4c3535',
                                '#4c4c35',
                                '#354c35',
                                '#354c4c',
                                '#477b6f',
                                '#47537b',
                                '#6f477b',
                                '#7b4753',
                                '#7b6f47'
                            ],
                            hoverOffset: 20,
                        }
                        
                    ]
                }}
                options={{ maintainAspectRatio: false }}
                width={"70%"}
            />
            </div>
        </>
    )
}

export default EquipmentCircle
