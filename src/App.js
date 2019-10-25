import React, { useState, useEffect } from 'react'
import '../public/favicon.ico'

import axios from 'axios'
import './App.css'

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios
      .get(
        'https://api.nasa.gov/planetary/apod?api_key=zgbzTnPJh7YJt0VsZMynxjp3fx6qW15PZhlJ3aob'
      )
      .then((res) => {
        setData(res.data)
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div className="card-wrapper">
      <img src={data.url} alt="NASA apod" />
      <h5>{data.date}</h5>
      <h1>{data.title}</h1>
      <p>{data.explanation}</p>
    </div>
  )
}

export default App
