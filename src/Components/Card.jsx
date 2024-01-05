import React, { useState } from 'react';
import { useContext } from 'react';
import { myContext } from '../../Context/Context';

function Card(props) {
    
    const {setCartdata,cartData} = useContext(myContext)
    const handleClick = (item) => {
        setCartdata([...cartData, item]);
    }
   
    return (
        <>
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
            {props.data.map((item) => (
                <div key={item.id} className='flex flex-col p-4 border rounded'>
                    <img src={item.thumbnail} alt="" className="w-full h-40 object-cover rounded mb-2" />
                    <div className="flex-grow">
                        <h2 className='text-xl font-semibold'>{item.title}</h2>
                        <p className='text-gray-600'>{item.price}</p>
                    </div>
                    <button
                        className='bg-blue-500 rounded-md text-white p-2 mt-2 hover:bg-blue-600'
                        onClick={() => { handleClick(item) }}
                    >
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
            
        </>
    );
}

export default Card;
