import React, { useState } from 'react';
import { myContext } from '../../Context/Context';
import { useContext } from 'react';

function Login() {
  const { setUsername, setPassword, token} = useContext(myContext);
  

  const [inputUsername, setInputUsername] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [error,setError]=useState('')

  const handleLoginSubmit = () => {
    setUsername(inputUsername);
    setPassword(inputPassword);
    token ? setError('') :setTimeout(()=>{
      setError("error")
    },2000)
  };
   setTimeout(() => {
    setError('')
   }, 9000);
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <h3 className=' text-red-600 '>{error && "Username or Password is Incorrect"}</h3>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username: atuny0
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            value={inputUsername}
            onChange={(e) => setInputUsername(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password: 9uQFF1Lh
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={handleLoginSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Login;

