import React from 'react';
import { useContext } from 'react';
import { myContext } from '../../Context/Context';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import Filter from './Filter';
import Token from './Token';

function Header() {
  const { cartData } = useContext(myContext);

  return (
    <div className='flex flex-col md:flex-row items-center justify-between p-4 bg-gray-800 text-white'>
      <div className='flex items-center'>
        <Link to='/' className='text-xl font-bold'>
          Home
        </Link>
      </div>

      <div className='flex items-center mt-4 md:mt-0 gap-4'>
        <Link to='/Cart' className='relative'>
          <button className='bg-blue-500 text-white px-4 py-2 rounded-full'>
            Cart ({cartData.length})
          </button>
        </Link>

        <SearchBar />
        <Filter />
        <Token />
      </div>
    </div>
  );
}

export default Header;
