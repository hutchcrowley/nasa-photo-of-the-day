import React from 'react'
import './App.css'
import ImageCard1 from './Components/ImageComponents/ImageCard1'
import ImageCard2 from './Components/ImageComponents/ImageCard2'
import ImageCard3 from './Components/ImageComponents/ImageCard3'

function App() {
  return (
    <div className="home-base">
      <div className="image-card-1">
        <ImageCard1 />
      </div>
      <div className="image-card-2">
        <ImageCard2 />
      </div>
      <div className="image-card-3">
        <ImageCard3 />
      </div>
    </div>
  )
}

export default App
