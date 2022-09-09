import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import { Home } from './pages/Home'
import { Options } from './pages/Options'
import { Cart } from './pages/Cart'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Home /> } />

        <Route path='/options' element={ <Options /> } />

        <Route path='/cart' element={ <Cart /> } />
      </Routes>
    </Router>
  )
}

export default App
