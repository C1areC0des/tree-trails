import React from 'react';
import { Link } from 'react-router-dom'


function Home() {

  return (
    <>
    <div className="image-div">
      <h1 className='home-h1'>Victoria Park Tree Trails</h1>
      <div className="btn-div">
        <Link to='/heritage-trees' className='trail-btn'>Heritage Trees</Link>
        <Link to='/world-trees' className='trail-btn'>World Trees</Link>
      </div>
    </div>
    <div className="para-div">
      <p>Best viewed on a mobile device from inside Victoria Park, let this app to guide you through the tree trails available there!</p>
      <p>Click on whichever trail button above takes you fancy, or even do both!</p>
      <p>If you would like to see your location on the trail map, just click the icon in the top right and allow access on your device.</p>
      <p></p>
    </div>
  </>
  )
}

export default Home;