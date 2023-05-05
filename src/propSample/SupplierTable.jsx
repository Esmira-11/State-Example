import React from 'react'

function SupplierTable(props) {
    let { products } = props
  return (
    <>
    <table>
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Company Name</td>
                    <td>Contact Name</td>
                    <td>Contact Title</td>
                </tr>
            </thead>
            <tbody>
                {
                    products && products.map(item => {
                        return <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.companyName}</td>
                            <td>{item.contactName}</td>
                            <td>{item.contactTitle}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </>
  )
}

export default SupplierTable