import * as React from 'react'
import { useEffect }  from 'react'

import { observer } from 'mobx-react-lite'
import  store  from '../../store/store'

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'



import './Table.sass'

const Table = observer((props) => {

  useEffect(() => {    // Обновляем заголовок документа с помощью API браузера    
    store.prepareTable() 
  },[]);
  
  const getPaginationContent = () => {
    let content = [];
    for (let i = 1; i < store.curPages+1; i++) {
      content.push(
        <div key={i} className="number-pagination">{i}</div>
      )
    }
    return content
  };

  return (
    <div className="container">
      <div className="table-container">
        <div className="header-cell">
          <div className="cell">№</div>
          <div className="cell">ФИО спортсмена</div>
          <div className="cell">Вид спорта</div>
          <div className="cell">Количество медалей</div>
        </div>
        
        <div className="table-block">

          {store.dataTable.map( (item, index) => (
            item.map( (itemCell, indexCell) => ( 
              <div className="cell" key={`${index}-${indexCell}`}>{itemCell}</div>
            ))

          ))}

        </div>
      </div>
      <div className="pagination-block">
        <ChevronLeftIcon className="arrow"/>
       
        {getPaginationContent()}
 
        <ChevronRightIcon className="arrow"/>
      </div>
    </div>
  )
})

export default Table