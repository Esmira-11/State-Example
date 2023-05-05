import React, { useEffect, useState } from 'react'
import {Table,Spinner} from "reactstrap"
import axios from 'axios'

function EffectTask() {

    const [data, setdata] = useState([])
    const [isLoading,setisLoading] = useState(false)
    // let [id,name,username,email,companyName] = [data.id]

    
    useEffect(() => {
        
        
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
          setdata(res.data)
          setisLoading(false)
        })
        .catch (err => {
            console.log("Data gelmedi!!!")
        })
    }, [])
    
  return (
    <>

{/* <Spinner
  className="m-5"
  color="primary"
>
  Loading...
</Spinner> */}

<Table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Username</th>
      <th>Email</th>
      <th>Company Name</th>
    </tr>
  </thead>
  <tbody>
  

    
        {  
            data && data.map( item => {
                return <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.username}</td> 
                    <td>{item.email}</td>  
                    <td>{item.company.name}</td> 
                </tr>
            }
              
            )
        }
   

    
    
  </tbody>
</Table>


    </>
  )
}

export default EffectTask