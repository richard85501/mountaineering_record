population = [
    {
        "item":"大背包",
        "number":1,
        "weight":950
    },
    {
        "item":"睡袋",
        "number":1,
        "weight":700
    },
    {
        "item":"睡墊",
        "number":1,
        "weight":200
    },
    {
        "item":"登山杖",
        "number":2,
        "weight":150
    }
]


var data = [2, 4, 8, 10];

// var svg = d3.select("svg")
// var width = svg.attr("width")
// var height = svg.attr("height")
// var radius = Math.min(width, height) / 2
// var g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")

// var color = d3.scaleOrdinal(['#4daf4a','#377eb8','#ff7f00','#984ea3','#e41a1c']);

// // Generate the pie
// var pie = d3.pie();
// console.log(pie);

// // Generate the arcs
// var arc = d3.arc()
//             .innerRadius(radius-100)
//             .outerRadius(radius);

// //Generate groups
// var arcs = g.selectAll("arc")
//             .data(pie(data))
//             .enter()
//             .append("g")
//             .attr("class", "arc")
// console.log(arcs);
 
// //Draw arc paths
// arcs.append("path")
//     .attr("fill", function(d, i) {
//         return color(i);
//     })
//     .attr("d", arc);


// arcs.append("text")
//             .attr("transform", function(d) { 
//                     return "translate(" + arc.centroid(d) + ")"; 
//             })
//             .text(function(d) { return d.data; });
// ---自己畫的dount chart---
const equip = d3.json('./population.json')

const equip_svg = d3.select('.canvas_two')
            .append('svg')
            .attr('width',600)
            .attr('height',600)

const width = equip_svg.attr('width')
const height = equip_svg.attr('height')
const equip_radius = Math.min(width, height) / 2

//transform:translate(長度/2,高度/2) 保證svg在圖片正中央
const g = equip_svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")

// var data = [2, 4, 8, 10];
const pie = d3.pie().value(function(d) { 
    console.log(d)
    return d.weight; 
});

// 將角度跟半徑設定好之後，d3.arc會協助我們將繪製path圓形的屬性d生成出來，讓我們不用自己寫那痛苦的d屬性。
const arc = d3.arc()
    .outerRadius(equip_radius - 10)
    .innerRadius(0);
    console.log(arc)

// console.log(equip_svg)

// equip_svg
//     .selectAll('path')
//     .data(arc)
//     .enter()
//     .append('path')
//     .attr('d', data => arc(data))
//     .attr('stroke', 'white')