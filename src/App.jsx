import React from 'react'
// import { Link, Route, Switch } from 'react-router-dom'
import { BrowserRouter as Router, Link, Route, Switch, useRouteMatch } from 'react-router-dom'
import Beer from './pages/Beer'
import CaptiansLog from './pages/CaptiansLog'
import Rum from './pages/Rum'
import NotFound from './pages/NotFound'
function App() {
  return (
    <>
      <header className="test">
        <h1></h1>
        <nav className="navbar">
          <ul>
            <li>
              <Link className="link" to="/"><p><strong>Captain's Log</strong></p></Link>
            </li>
            <li>
              <Link className="link" to="/1"><p><strong>Beer</strong></p></Link>
            </li>
            <li>
              <Link className="link" to="/2"><p><strong>Rum Bible</strong></p></Link>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
      <Route exact path="/" component={CaptiansLog}></Route>
        <Route exact path="/1" component={Beer}></Route>
        <Route exact path="/2" component={Rum}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </>
  )
}

export default App
