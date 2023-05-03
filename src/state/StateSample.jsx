import React, { useState } from 'react'

function StateSample() {

    const [number, setfirst] = useState(0)

    const random = () =>{
        setfirst(Math.floor(Math.random() * 100))
    }

  return (
  <>
  <h1>Number : {number}</h1>
  <button onClick={random}>Change</button>
  </>
  )
}

export default StateSample