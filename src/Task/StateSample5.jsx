import React, { useState } from 'react'


function StateSample5() {

  const [input, setinput] = useState()
  const [animalList, setAnimalList] =useState([])

  const add = () => {
    setAnimalList([...animalList,input])
}
const clear =() => {
    setAnimalList([])
}

  return (
    <>
    <div className="main" style={{padding:50}}>
        <div className="main-top" style={{paddingBottom:15}}>
            <input type="text" onChange={(e)=>setinput(e.target.value)}/>
        </div>

        <div className="main-bottom">
            <button onClick={clear}>Clear</button>
            <button onClick={add}>Add</button>
        </div>
        
    </div>

<ul>
    {
      animalList && animalList.map((item,index) => <li key={index} style={{ fontSize: 20}}>{item}</li>)
    }
</ul>

    
    
    </>
  )
}

export default StateSample5