// ----------lesson1----------
// const canvas =d3.select(".canvas");

// const svg = canvas.append("svg")
//     .attr('height',600)
//     .attr('width',600);

// const group = svg.append('g')
//     .attr('transform','translate(50,100)');

// //append shapes to svg container
// group.append('rect')
//     .attr('width',200)
//     .attr('height',100)
//     .attr('fill','blue')
//     .attr('x',20)
//     .attr('y',20);

// group.append('circle')
//     .attr('r',50)
//     .attr('cx',300)
//     .attr('cy',70)
//     .attr('fill','pink');

// group.append('line')
//     .attr('x1',370)
//     .attr('x2',400)
//     .attr('y1',20)
//     .attr('y2',120)
//     .attr('stroke','red');

// group.append('text')
//     .attr('x',20)
//     .attr('y',200)
//     .attr('fill','grey')
//     .text('hell,ningas')
//     .style('font-family','arial');

// ----------lesson2----------
// const data = [
//     {width:600,height:100,fill:'purple'},
//     {width:100,height:60,fill:'green'},
//     {width:50,height:30,fill:'red'}
// ];

// const svg = d3.select('svg');

// // const rect =svg.select('rect')
// //     .data(data)
// //     .attr('width',(d,i,n) => {
// //         console.log(n[i])
// //         return d.width
// //     })
// //     //傳入參數d就是data
// //     .attr('height',d=> d.height)//如果只有一行可以寫成這樣,與下方註解同個意思,如果只有一個參數也可以省略括號
// //     // .attr('height',(d)=>{return d.height})
// //     .attr('fill',(d)=>{return d.fill})

// //Join data to the rects
// const rects =svg.selectAll('rect')
//     .data(data)

// //add attrs to rects already in the DOM
// rects
// .attr('width',(d,i,n) => d.width)
// .attr('height',d=> d.height)
// .attr('fill',d=> d.fill)

// //append the enter selection to the DOM
// rects.enter()
//     .append('rect')
//     .attr('width',(d,i,n) => d.width)
//     .attr('height',d=> d.height)
//     .attr('fill',d=> d.fill);    

// ----------lesson3----------
//select svg container
const svg =d3.select('svg')

d3.json('planets.json').then(data=>{

    const circs = svg.selectAll('circle')
    .data(data);

    // /add attrs to circurs already in  Dom
    circs
        .attr('cy',200)
        .attr('cx',d=>d.distance)
        .attr('r',d=>d.radius)
        .attr('fill',d=>d.fill);

    // append the enter selection to the DOM
    circs.enter()
    .append('circle')
    .attr('cy',200)
    .attr('cx',d=>d.distance)
    .attr('r',d=>d.radius)
    .attr('fill',d=>d.fill);

})