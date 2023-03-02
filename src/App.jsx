import React from 'react'
import './assets/css/base/base.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './paginas/Home'
import Sobre from './paginas/Sobre'
import Pagina404 from './paginas/Paginas404'
import Cabecalho from './components/Cabecalho'
import Post from './paginas/Post'

function App() {


  return (
    <>
      <Router>
        <Cabecalho />
        <Switch>

          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/sobre'>
            <Sobre />
          </Route>

          <Route path='/posts/:id'>
            <Post />
          </Route>

          <Route >
            <Pagina404 />
          </Route>

        </Switch>


      </Router>


    </>
  )
}

export default App


/*

exibir varias rotas (dependendo da URL):
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