import React, { useState } from 'react'

function StateSample2() {

    let cityList = ['Baki','Lenkeran','Gence','Sumqayit','Quba']
    const [numbers, setnumbers] = useState(cityList)

    const deleteRandom =() =>{
        let index = getRndInteger(0,cityList.length);
        numbers.splice(index,1)
        console.log(numbers)
        setnumbers([...numbers])
    }
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
      }

  return (
   <>
        <ul>
            {
                numbers.map(item => <li>{item}</li>)
            }
        </ul>
   
    <button onClick={deleteRandom}>Remove</button>
   </>
  )
}

export default StateSample2