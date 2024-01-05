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
      className="appearance-none bg-slate-50 border border-gray-300 text-black py-1 px-2 pr-4 rounded-md leading-tight focus:outline-none focus:border-blue-500"
      onChange={handleChange}
    >
      <option className="text-black" value="" disabled selected>
        Sort
      </option>
      <option className="text-black" value="desc">
        High to Low
      </option>
      <option className="text-black" value="asc">
        Low to High
      </option>
    </select>
  );
}

export default Filter;
