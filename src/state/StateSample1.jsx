import React, { useState } from 'react'

function StateSample1() {
    const [size,setSize] = useState(10)

    
    const changeSize = () =>{
        let s = Math.floor(Math.random() * 100)
        if(s<20){
            s = Math.floor(Math.random() * 100)
        }
        console.log(s)
        setSize(s)
    }

  return (
    <>
    <h1 style={{fontSize:size }}>Code Academy</h1>

    <button onClick={changeSize}>Change Font Size</button>
    </>
  )
}

export default StateSample1