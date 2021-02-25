import * as React from 'react'

import { observer } from 'mobx-react-lite'
import  store  from '../../store/store'



import './Table.sass'

const Table = observer((props) => {
  return (
    <div className="table-container">
      
      <div className="cell header-cell">№</div>
      <div className="cell header-cell">ФИО спортсмена</div>
      <div className="cell header-cell">Вид спорта</div>
      <div className="cell header-cell">Количество медалей</div>  

      {store.dataTable.map( (item, index) => (
        item.map( (itemCell, indexCell) => ( 
          <div className="cell" key={`${index}-${indexCell}`}>{itemCell}</div>
        ))

      ))}
  
    
    </div>
  )
})

export default Table