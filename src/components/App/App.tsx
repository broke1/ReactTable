import * as React from 'react'
//import { Provider } from 'react-redux'
//import store from '../store/store'



import Container from '@material-ui/core/Container'

import Table from '../Table'
// import Chart from './Chart'
// import CredentinalComp from './Credentinal'


import './App.sass'

function App() {
  let title = "Таблица"
  return (
    <div className="our-app">
      <Container maxWidth="lg">
        <h1 className="title-app">{ title }</h1>
        <div className="container-app">
          <Table />
        </div>
      </Container>
    </div>
  )
}

export default App