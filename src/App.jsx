// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Components/Home';
import Cart from './Components/Cart';

import { myContext } from '../Context/Context';
import { useContext } from 'react';
import Login from './Components/Login';

function App() {
  const {token}= useContext(myContext)
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={token ?<Home />:<Login/>} />
          <Route path="Cart" element={<Cart />} />
          {/* Add more nested routes as needed */}
        </Route>

      </Routes>
      
    </Router>
  );
}

export default App;
