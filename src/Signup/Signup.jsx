import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate signup process (replace with actual signup logic)
    console.log('Signup Data:', formData);

    // On successful signup, navigate to the login page
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <div className='w-full max-w-md p-8 bg-lime-500 shadow-md rounded'>
        <h2 className='text-2xl font-bold mb-6 text-center'>SIGN UP</h2>
        <form className='space-y-4' onSubmit={handleSubmit}>
          <div className='flex flex-col'>
            <label htmlFor='name' className='mb-2 text-sm font-bold text-gray-700'>
              Name:
            </label>
            <input
              type='text'
              id='name'
              autoComplete='off'
              placeholder='Enter your name'
              className='px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />

            <label htmlFor='email' className='mb-2 text-sm font-bold text-gray-700'>
              Email:
            </label>
            <input
              type='email'
              id='email'
              autoComplete='off'
              placeholder='Enter your email'
              className='px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />

            <label htmlFor='password' className='mb-2 text-sm font-bold text-gray-700'>
              Password:
            </label>
            <input
              type='password'
              id='password'
              autoComplete='off'
              placeholder='Enter your password'
              className='px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>

          <button
            type="submit"
            className='px-4 py-2 bg-emerald-900 rounded-md w-full text-white'
          >
            Signup
          </button>
        </form>
        
        <div className='mt-4'>
          <p className='text-center p-2'>Already have an account?</p>
          <button
            onClick={() => navigate('/login')}
            className='m-2 px-4 py-2 bg-blue-600 rounded-full w-2/4 text-white'
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
