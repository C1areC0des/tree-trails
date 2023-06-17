
import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ReactGA from 'react-ga'
import 'mapbox-gl/dist/mapbox-gl.css'
import Home from './Pages/Home';
import Heritage from './Pages/Heritage';
import World from './Pages/World'



function App() {

  useEffect(() => {
    ReactGA.initialize('G-XDSL2DESBC');
    ReactGA.pageview(window.location.pathname);
  }, [])

  return (
    <React.StrictMode>
      <BrowserRouter basename={process.env.PUBLIC_URL}> 
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/heritage-trees" element={<Heritage />} />
          <Route path="/world-trees" element={<World />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>

  )
}

export default App;
