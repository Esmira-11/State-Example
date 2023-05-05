import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Todos() {
    const [data, setdata] = useState([])
    
    

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res=>{
          setdata(res.data)
        })
    
    }, [])
    
    const completed =(data)=>{
        let comp = 0;
        data.forEach(element => {
            if( element.completed === true){
                comp+=1
            }
        });
        return comp
    }

    const uncompleted =(data)=>{
        let uncomp = 0;
        data.forEach(element => {
            if( element.completed === false){
                uncomp+=1
            }
        });
        return uncomp
    }

  return (
    <>
    <h1>Total Todos: {data.length}</h1>
    <h1>Completed Todos: {completed(data)} </h1>
    <h1>Uncompleted: {uncompleted(data)} </h1>
    </>
  )
}

export default Todos