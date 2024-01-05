import React, { useContext } from 'react';
import { myContext } from '../../Context/Context';

function Filter() {
  const { product, setProduct } = useContext(myContext);
  const ascending = [...product].sort((a, b) => a.price - b.price);
  const descending = [...product].sort((a, b) => b.price - a.price);

  const handleChange = (e) => {
    console.log(e);
    if (e.target.value === 'asc') {
      setProduct(ascending);
    } else if (e.target.value === 'desc') {
      setProduct(descending);
    }
  };

  return (
    <select
      className="appearance-none bg-slate-50 border border-gray-300 text-black py-2 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:border-blue-500 md:w-1/2 lg:w-1/3 xl:w-1/4"
      onChange={handleChange}
    >
      <option className="text-black" value="" disabled selected>
        Sort
      </option>
      <option className="text-black" value="desc">
        Price High to Low
      </option>
      <option className="text-black" value="asc">
        Price Low to High
      </option>
    </select>
  );
}

export default Filter;
