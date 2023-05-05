import axios from 'axios'
import React, { useEffect, useState } from 'react'

function CategoryPage() {

    const [data, setdata] = useState([])
    const [name, setname] = useState('')
    const [description, setdescription] = useState('')



    useEffect(() => {
      axios.get('https://northwind.vercel.app/api/categories')
      .then(res=>{
        setdata(res.data)
      })
    
      
    }, [])

    
    
    const add = () =>{

      let newData = {
        name: name,
        description: description
      }
      axios.post('https://northwind.vercel.app/api/categories',newData)
      .then(res=>{
        axios.get('https://northwind.vercel.app/api/categories')
      .then(res=>{
        setdata(res.data)
      })
      })
    }

  return (
    <>
    <div className="form">
      <input type="text" placeholder='name' onChange={(e)=>setname(e.target.value)}/>
      <input type="text" placeholder='description' onChange={(e)=>setdescription(e.target.value)}/>
      <button onClick={add}>Add</button>
    </div>

    <ul>
      {
        data && data.map( item => <li>{item.name} ----- {item.description}</li> )
      }
    </ul>


    {/* {
                    orders && orders.map(item => {
                        return <tr>
                            <td>{item.id}</td>
                            <td>{item.shipName}</td>
                            <td>{item.orderDate}</td>
                            <td><button onClick={() => deleteProduct(item.id)}>Delete</button></td>

                        </tr>
                    })
                } */}
    </>
  )
}

export default CategoryPage