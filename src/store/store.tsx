//import { createStore } from 'redux'
//import reducer from './reducers'
import * as React from 'react'
import { observable, action } from 'mobx'

const store =  observable({
    dataTable: [],
    dataTableOrigin: [],
    dataForShow: [],
    dict: [
      ["Яхов Леонид Петрович","Рахимов Станислав Валерьевич","Ляхтич Вероника Ивановна", "Фролова Людмила Игнатьевна", "Ляпин Антон Юрьевич"],
      ["Биатлон","Баскетбол","Тенис", "Шахматы", "Бокс"],
      [15,4,25,13,21],
    ],
    filterArrow: [
      [false,false],
      [false,false],
      [false,false],
      [false,false],
    ],
    pages: 0,
    currentPage: 0,
    show: false,
    name: 'Kitty',
    action: "Hello",
    get credentinal () {
      return `${this.action} + ${this.name} = ${this.action+' '+this.name}`
    },
    get curPages () {
      return this.pages
    },
    get curFilterArrow() {
      return (i: number,index: number) =>  this.filterArrow[i][index]
    },
    prepareTable: action( function() {
      for (let i=1; i<71; i++) {
        this.dataTableOrigin.push([i,this.dict[0][this.random()],this.dict[1][this.random()],this.dict[2][this.random()]])  // we need one array of full date 
      }
       this.dataTable = this.dataTableOrigin.slice()  // and another one which we may cut, filter and etc
      
       this.onePageData()
        
        this.pages = Math.ceil(this.dataTableOrigin.length/50)
    }),
    onePageData: action ( function() {

      if (this.dataTable.length > 50) {
        let min= 50*this.currentPage
        let max = min + 50
        this.dataForShow = this.dataTable.filter( (item: any,index: number) => {
          return index >= min && index < max
        })
      } 
    }),
    switchPage: action ( function(direction: string) {
      let current = 0
      if (direction == 'forward') {
        current = this.currentPage + 1
        current > this.pages-1 ? this.currentPage = this.pages-1 : this.currentPage = current
      } else {
        current = this.currentPage - 1
        current < 0 ? this.currentPage = 0 : this.currentPage = current
      }
      this.onePageData()
    }),
    selectPage: action (function(index: number) {
      this.currentPage = index-1
      this.onePageData()
    }),
    filterData: action (function(index: number) {
      
      if (!this.filterArrow[index][0]) {
        this.filterArrow[index][0] = true
        this.filterArrow[index][1] = false
      }  else {
        this.filterArrow[index][0] = false
        this.filterArrow[index][1] = true
      }
      this.filterArrow.forEach( (item:boolean[], indexFilterArrow: number) => {
        item.forEach( (itemFilter: boolean, indexFilter:number) => {
          if (indexFilterArrow != index) {
            item[indexFilter] = false
          } 
        })
      })

      if ( typeof this.dataTable[0][index] == "number" ) {
        
        if (this.filterArrow[index][0]) {
          this.dataTable = this.dataTable.sort(function(a:[],b:[]) {  return a[index]-b[index] })
        } else {
          this.dataTable = this.dataTable.sort(function(a:[],b:[]) { console.log(a[index], b[index]); return b[index]-a[index] })
        }
        
      } else {

        if (this.filterArrow[index][0]) {
          this.dataTable = this.dataTable.sort(function(a:[], b:[]) { 
            if ( b[index] > a[index] ) return -1;
            if ( a[index] > b[index] ) return 1; 
          })
        } else {
          this.dataTable = this.dataTable.sort(function(a:[], b:[]) { 
            if ( a[index] > b[index] ) return -1;
            if ( b[index] > a[index] ) return 1; 
          })
        }

      }

      this.onePageData()


      
     // this.dataTable.sort(function(a, b) { console.log(a[0], b[0]); return a[0] > b[0] })
      


    }),
    random: action( function() {
      return Math.floor(Math.random() * (5 - 0)) + 0;
    }),
    changeCredential: action( function(action:string,name:string) {
      this.action = action
      this.name = name
    }),
    switchShow: action( async function(show:boolean) {
      let status = false
      let prom = new Promise( (resolve) => {
        setTimeout( () => {
          status = show
          resolve(status)
        },3000)
      })
      
      this.show = await prom
    })
  })





export default store