import React, { useState, useEffect } from 'react';
import axios from 'axios';


function App (props)
{
  const [data, setData] = useState([])


  useEffect(() =>
  {
    axios
      .get(
        'https://api.nasa.gov/planetary/apod?api_key=zgbzTnPJh7YJt0VsZMynxjp3fx6qW15PZhlJ3aob'
      )
      .then((res) =>
      {
        setData(res.data)
        console.log(res)
      })
      .catch((err) =>
      {
        console.log(err)
      })
  }, [])

  return (

    <div id="App">
      <div className='wrapper-main'>
        <img src={data.url} alt="NASA apod" />
        <button>
          <a href='https://wwww.nasa.com'>
            Click me!
            </a>
        </button>
        <h2>
          {data.title}
        </h2>
        <h5>
          {data.date}
        </h5>
        <p>
          {data.explanation}
        </p>
      </div>
    </div>

  )
}

export default App
