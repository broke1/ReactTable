import * as React from 'react'
import { useEffect }  from 'react'

import { observer } from 'mobx-react-lite'
import  store  from '../../store/store'

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';


import './Table.sass'

const Table = observer((props) => {

  useEffect(() => {    // Обновляем заголовок документа с помощью API браузера    
    store.prepareTable() 
  },[]);
  
  const getPaginationContent = () => {
    let content = [];
    for (let i = 1; i < store.curPages+1; i++) {
      content.push(
        <div key={i} onClick={() => store.selectPage(i)} className="number-pagination">{i}</div>
      )
    }
    return content
  };

  return (
    <div className="container">
      <div className="filter-block">
        <TextField className="text-block" label="Поиск" onChange={() => store.filterData(event)} />
        <SearchIcon className="search-icon"/>
      </div>
      <div className="table-container">
        <div className="header-cell">
          <div className="cell" onClick={() => store.sortData(0)}>
            № 
            {store.curFilterArrow(0,0) && <ExpandLessIcon className="arrow-filter" /> }
            {store.curFilterArrow(0,1) && <ExpandMoreIcon className="arrow-filter" /> }
          </div>
          <div className="cell" onClick={() => store.sortData(1)}>
            ФИО спортсмена
            {store.curFilterArrow(1,0) && <ExpandLessIcon className="arrow-filter" /> }
            {store.curFilterArrow(1,1) && <ExpandMoreIcon className="arrow-filter" /> }
          </div>
          <div className="cell" onClick={() => store.sortData(2)}>
            Вид спорта
            {store.curFilterArrow(2,0) && <ExpandLessIcon className="arrow-filter" /> }
            {store.curFilterArrow(2,1) && <ExpandMoreIcon className="arrow-filter" /> }
          </div>
          <div className="cell" onClick={() => store.sortData(3)}>
            Количество медалей
            {store.curFilterArrow(3,0) && <ExpandLessIcon className="arrow-filter" /> }
            {store.curFilterArrow(3,1) && <ExpandMoreIcon className="arrow-filter" /> }
          </div>
        </div>
        
        <div className="table-block">

          {store.dataForShow.map( (item, index) => (
            item.map( (itemCell, indexCell) => ( 
              <div className="cell"  key={`${index}-${indexCell}`}>{itemCell}</div>
            ))

          ))}

        </div>
      </div>
      <div className="pagination-block">
        <ChevronLeftIcon className="arrow" onClick={() => store.switchPage('back')}/>
       
        {getPaginationContent()}
 
        <ChevronRightIcon className="arrow" onClick={() => store.switchPage('forward')}/>
      </div>
    </div>
  )
})

export default Table