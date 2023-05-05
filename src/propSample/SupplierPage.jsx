import React, { useState } from 'react'

import { ProductData } from './ProductData'
import SupplierTable from './SupplierTable'

function SupplierPage() {

  const [products, setProducts] = useState(ProductData)
  return (

   <>
    <SupplierTable products={products} />
   </>
      
  )
}

export default SupplierPage