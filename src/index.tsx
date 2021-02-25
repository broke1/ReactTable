import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import store from './store/store'
//import { Provider } from 'react-redux'

import App from "./components/App"
//import NewPage from "./components/Newpage"

ReactDOM.render( 
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      {/* <Route exact path="/newpage/" component={NewPage} />
      <Route path="/newpage/:procent" component={NewPage} /> */}
    </Switch>
  </BrowserRouter>, 
  document.getElementById("app")
)

 
