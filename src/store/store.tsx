//import { createStore } from 'redux'
//import reducer from './reducers'
import * as React from 'react'
import { observable, action } from 'mobx'

const store =  observable({
    dataTable : [],
    dataTableOrigin : [],
    dict: [
      ["Яхов Леонид Петрович","Рахимов Станислав Валерьевич","Ляхтич Вероника Ивановна", "Фролова Людмила Игнатьевна", "Ляпин Антон Юрьевич"],
      ["Биатлон","Баскетбол","Тенис", "Шахматы", "Бокс"],
      ['15','4','25','13','21'],
    ],
    pages : 0,
    show: false,
    name: 'Kitty',
    action: "Hello",
    get credentinal () {
      return `${this.action} + ${this.name} = ${this.action+' '+this.name}`
    },
    get curPages () {
      return this.pages
    },
    prepareTable: action( function() {
      for (let i=1; i<71; i++) {
        this.dataTableOrigin.push([i,this.dict[0][this.random()],this.dict[1][this.random()],this.dict[2][this.random()]])  // we need one array of full date 
      }
       if (this.dataTableOrigin.length > 50) {
         let i = 0
         while (i < 50) {
          this.dataTable.push(this.dataTableOrigin[i])                                        // and another one which we may cut, filter and etc
          i++
         }
       } else {
         this.dataTable = JSON.parse(JSON.stringify(this.dataTableOrigin))                   // and another one which we may cut, filter and etc
       }
        
        this.pages = Math.ceil(this.dataTableOrigin.length/50)
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