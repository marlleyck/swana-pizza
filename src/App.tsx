import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import { Home } from './pages/Home'
import { Option } from './pages/Option'
import { Options } from './pages/Options'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Home /> } />

        <Route path='/options' element={ <Options /> } />

        <Route path='/option/:id' element={ <Option /> } />

        <Route path='/cart' />
      </Routes>
    </Router>
  )
}

export default App
