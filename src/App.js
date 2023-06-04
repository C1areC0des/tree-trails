
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import Heritage from './Pages/Heritage';
import World from './Pages/World'



function App() {
  return (
    <BrowserRouter> 
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/heritage-trees" element={<Heritage />} />
          <Route path='/world-trees' element={<World />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App;
