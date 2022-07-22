import React from 'react'
import '../static/Home.css'
import BackgroundImg from '/Users/cnestel-admin/Documents/Carrie/cmiskin-website/src/images/Background-01.png'

const Home = () => {




  return (
    <div>
      <div className="overlay"></div>
    
          <h1>Hi! I'm Carrie, <br/>
          Designer turned Software Developer.</h1>

          <img src={BackgroundImg} alt='background_img' />
    </div>
  )
}

export default Home