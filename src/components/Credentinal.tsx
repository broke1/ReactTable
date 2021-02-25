import * as React from 'react'
// import { connect } from 'react-redux'
import { observer } from 'mobx-react-lite'
import  store  from '../store/store'

import Button from '@material-ui/core/Button'

const CredentinalComp = observer((props) => {
  let credentinal = store.credentinal
  return (
    <div className="credentinal-container">
      <h2 className="credentinal-title">{ credentinal }</h2>
      <Button variant="contained" className="button-credentinal" onClick={ () => {
        store.changeCredential('Bye', 'Bob')
      }
      }>
      Поменять
      </Button>
    </div>
    
  )
})


export default CredentinalComp