import * as React from 'react'

import Container from '@material-ui/core/Container'

function NewPageComp(props) {
  let procent: number
  props.match.params.procent ? procent = props.match.params.procent : procent = 0
  let title = `Данный кусок занимает ${procent} %`
  return (
    <Container maxWidth="lg">
      <h1 className="title-app">{ title }</h1>
    </Container>
    
  )
}


export default NewPageComp