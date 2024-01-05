import React, { useContext, useEffect, useState } from 'react';
import { myContext } from '../../Context/Context';

function Cart() {
  const { cartData } = useContext(myContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let newTotal = 0;
    cartData.forEach((element) => {
      newTotal += element.price;
    });
    setTotal(newTotal);
  }, [cartData]);

  return (
    <div className="bg-gray-100 p-4 rounded-md shadow-md">
      <div className="flex flex-col md:flex-row items-center justify-between mb-4">
        <h3 className="text-xl font-bold mb-2 md:mb-0">Your total is: {total}</h3>
       
      </div>

      {cartData?.length ? (
        <>
          {cartData.map((item) => (
            <div key={item.id} className="flex items-center mb-4">
              <img src={item.images[0]} alt={item.title} className="mr-4 w-16 h-16" />
              <div>
                <h2 className="text-xl">{item.title}</h2>
                <h5 className="text-gray-600">{item.price}</h5>
              </div>
            </div>
          ))}
        </>
      ) : (
        <h3 className="text-xl font-bold">There is nothing in the Cart...</h3>
      )}
    </div>
  );
}

export default Cart;
