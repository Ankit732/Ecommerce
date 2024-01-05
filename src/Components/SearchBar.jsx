import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { myContext } from '../../Context/Context'
function SearchBar() {
  const [value,setValue] =useState('')
  const {product,setProduct}= useContext(myContext)


  useEffect(()=>{
  const fetchData= async ()=>{
    const data= await axios.get(`https://dummyjson.com/products/search?q=${value}`)
   
      setProduct(data.data.products)
   
  }
  fetchData()
   
  },[value])

console.log(product)

  
  return     <div className="relative">
  <input
    type="text"
    placeholder="Search..."
    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-black w-full"
    value={value}
    onChange={(e) => setValue(e.target.value)}
  />
  <span className="absolute inset-y-0 right-0 flex items-center pr-3">
    <svg
      className="h-5 w-5 text-gray-500 cursor-pointer"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M22 22l-6-6"></path>
      <circle cx="10.5" cy="10.5" r="7.5"></circle>
    </svg>
  </span>
</div>
  

  
}

export default SearchBar