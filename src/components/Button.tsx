import * as React from 'react'
// import { connect } from 'react-redux'
import { observer } from 'mobx-react-lite'
import  store  from '../store/store'

import Button from '@material-ui/core/Button'

//import  { showChartAct }  from '../store/button/actions'


const ButtonComp = observer((props) => {
  return (
    <Button variant="contained" className="button-app" onClick={ () => {
      // let value = '' 
      // props.showChart == 'true' ? value = 'false' : value = 'true'
      // props.showChartAct(value)
      store.switchShow(!store.show)
    }
    }>
      Показать / убрать
    </Button>
  )
})

// const mapStateToProps = (state) => {
//   return {showChart: state.button.showChart}
// }

// const mapDispatchToProps = {
//   showChartAct,
// }


// export default connect(mapStateToProps, mapDispatchToProps)(ButtonComp)
export default ButtonComp