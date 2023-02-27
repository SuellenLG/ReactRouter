import React from 'react'
import './assets/css/base/base.css'
import Home from './paginas/Home'
import Sobre from './paginas/Sobre'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {


  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/sobre'>
            <Sobre />
          </Route>
        </Switch>


      </Router>


    </>
  )
}

export default App


/*

caminhar por varias rotas dependendo da URL:
function App() {
  const Render = () => {
    const location = window.location.pathname
    if(location === '/sobre'){
      return <Sobre/>
    }else{
      return <Home/>
    }
  }

  return (
    <>
      { Render() }
    </>
  )
}
*/