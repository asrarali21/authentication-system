import { productstate } from '../store/atoms/ProductState'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'

function Products() {
   
    const[productData , setproductData] = useRecoilState(productstate)
       
     useEffect(() => {
        const fetchproduct =  async () => {
            try {
              const response = await axios.get("http://localhost:8000/api/v1/products/productlist")
              console.log(response.data.data);
              setproductData(response.data.data)
            } catch (error) {
              console.log("error fetching product",error);
            }
         }
         fetchproduct()
     }, [])
     


  return (
    <div>
       {productData.map((item  )=>(
        <div key={item._id}>
        <p >{item.name}</p>
        </div>
  
       ))}
    </div>
  )
}

export default Products
