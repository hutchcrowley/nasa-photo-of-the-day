import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Button = styled.button`
    height: 100px;
    width: 100px;
    border-radius: 50px;
    color: #ffff;
    background: black;
  &:hover {
    background: #0000;
    color: black;
}
`

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
      <img src={data.url} alt="NASA apod" />
      <Button>
        <a href='https://wwww.nasa.com'>
          Click me!
            </a>
      </Button>
      <h2>
        {data.title}
      </h2>
      <h5>
        {data.date}
      </h5>

      <p>
        {data.description}
      </p>
    </div>

  )
}

export default App
