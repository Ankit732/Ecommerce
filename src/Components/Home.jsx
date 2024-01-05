import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Card';
import { useContext } from 'react';
import { myContext } from '../../Context/Context';
function Home() {
    const {product,setProduct}=useContext(myContext)
   
   useEffect(()=>{
    const fetchData=  async ()=>{
        const data=await axios.get('https://dummyjson.com/products?limit=100');
        setProduct(data.data.products)
        console.log(data.data.products)
        
    } 
    fetchData()
   },[])
 

  return (
    <div>
       <Card data={product}/>
    </div>

  )
}

export default Home