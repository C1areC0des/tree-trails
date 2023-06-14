import React from 'react'
import { Link } from 'react-router-dom'


function Home() {

  return (
    <>
    <div className="image-div">
      <h1 className='home-h1'>Victoria Park Tree Trails</h1>
      <nav>
        <div className="btn-div">
          <Link to='/heritage-trees' className='trail btn' aria-label="Go to Heritage tree trail">Heritage</Link>
          <Link to='/world-trees' className='trail btn' aria-label="Go to World tree trail">World</Link>
        </div>
      </nav>
    </div>
    <section className="para-div">
      <p>Best viewed on a mobile device from inside Victoria Park, let this app guide you through the tree trails available there!</p>
      <p>Click on whichever trail button above takes your fancy to view the trail map.  You could even do both!</p>
      <p>If you would like to see your location and direction on the trail map, just click the crosshairs icon in the top right corner and allow access on your device.</p>
      <p>Zoom in or or out as required and when you have located a tree point, click on the marker to view tree information and activities!</p>
      <div className="btn-div">
      <a className='btn coffee' href="https://www.buymeacoffee.com/C1areC0des">Buy me a coffee</a>
      </div>
    </section>
    <footer className="credit">
      <p >Original credit goes to <a href="https://www.treesforcities.org/">Trees for Cities</a> in partnership with <a href="https://victoriaparkfriends.london/">Victoria Park Friends</a> and <a href="https://www.towerhamlets.gov.uk/lgnl/leisure_and_culture/parks_and_open_spaces/victoria_park/park_trails.aspx">Tower Hamlets</a> for creating the trail route and tree information.</p>
    </footer>
  </>
  )
}

export default Home