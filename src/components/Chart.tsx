import * as React from 'react'
import { useEffect } from 'react'
//import { connect } from 'react-redux'
import { useHistory } from "react-router-dom"
import  store  from '../store/store'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import * as d3 from 'd3'

import { observer } from 'mobx-react-lite'


function createPieChart(history) {

  let graphics = d3.select('.pie-chart').selectAll('svg').nodes(); // получаем область в которой будем рисовтаь график 
  if(graphics.length != 0){  // если график уже есть
    graphics[0].remove(); // удаляем его
  }


  let width = 600, height = 500, margin = 20 // размеры и отступы контейнера


  let radius = Math.min(width, height) / 2 - margin  // радиус графика на основе размеров контейнера


  let svg = d3.select(".pie-chart")  // добовляем наш график в блок
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", `translate(${width / 2} , ${height / 2})`);


  let data = [20, 40, 60] // массив с данными


  let color = d3.scaleOrdinal()  // передаем цветовую схему для графика
    .range(["#98abc5", "#8a89a6", "#7b6888"])


  let pie = d3.pie()  // рассчитываем позицию для каждого куска графика
    .sort(null)
    .value(function(d) {return d })


  
  svg   // строим собственно круговую диаграмму используя функцию arc для отрисовки частей
    .selectAll('pies')
    .data(pie(data))
    .enter()
    .append('path')
    .attr('d', d3.arc()
      .innerRadius(0)
      .outerRadius(radius)
    )
    .attr('fill', function(d){ return(color(d.data)) })
    .attr("stroke", "black")
    .style("stroke-width", "2px")
    .style("opacity", 0.7)
    .on("click", function(d,data){ history.push(`/newpage/${data.data}`) })
    


}


const Chart = observer((props) => {
  let history = useHistory()

  useEffect(() => {   // замена componentDidMount в данном случае
    createPieChart(history)
  });

  
  return (
    <Card className={`${store.show ? 'showCard' : ''} chart`}>
      <CardContent>
        <div className="pie-chart"></div>
      </CardContent>
    </Card>
  )
})

// const mapStateToProps = (state) => {
//   return {showChart: state.button.showChart}
// }


//export default connect(mapStateToProps)(Chart)
export default Chart