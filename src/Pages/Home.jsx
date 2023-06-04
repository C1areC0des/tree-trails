import React from 'react';
import { Link } from 'react-router-dom'


function Home() {

  return (
    <>
      <h1>Victoria Park Tree Trails</h1>
      <p>Use this app to guide you through the trails in Victoria Park!</p>
      <Link to='/heritage-trees'>Heritage Tree Trail</Link>
      <Link to='/world-trees'>World Tree Trail</Link>
    </>
  )
}

export default Home;