import React from 'react';
import { Link } from 'react-router-dom'


function Home() {

  return (
    <>
    <div className="image-div">
      <h1 className='home-h1'>Victoria Park Tree Trails</h1>
      <div className="btn-div">
        <Link to='/heritage-trees' className='trail btn'>Heritage</Link>
        <Link to='/world-trees' className='trail btn'>World</Link>
      </div>
    </div>
    <div className="para-div">
      <p>Best viewed on a mobile device from inside Victoria Park, let this app to guide you through the tree trails available there!</p>
      <p>Click on whichever trail button above takes your fancy to view the trail map.  You could even do both!</p>
      <p>If you would like to see your location and direction on the trail map, just click the icon in the top right corner and allow access on your device.</p>
      <div className="btn-div">
      <a className='btn coffee' href="https://www.buymeacoffee.com/C1areC0des">Buy me a coffee</a>
      </div>
    </div>
    <p className='credit'>Original trail and tree information created by <a href="https://www.treesforcities.org/">Trees for Cities</a> in partnership with <a href="https://victoriaparkfriends.london/">Victoria Park Friends</a> and <a href="https://www.towerhamlets.gov.uk/lgnl/leisure_and_culture/parks_and_open_spaces/victoria_park/park_trails.aspx">Tower Hamlets</a></p>
  </>
  )
}

export default Home;