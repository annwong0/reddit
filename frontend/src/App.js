import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import User from './pages/User'
import Submit from './pages/Submit'
import NotFound from './pages/NotFound'

import Navbar from './components/Navbar'

function App() {

  return (
    <div className='base'>
      
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar/>
            <Home/>
          </Route>
          <Route exact path="/user/:username">
            <Navbar/>
            <User/>
          </Route>
          <Route exact path="/submit">
            <Navbar/>
            <Submit/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
