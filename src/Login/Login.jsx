import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import icons

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [passwordVisible, setPasswordVisible] = useState(false); // State for password visibility

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Log formData to verify it's correct
    console.log('Form Data:', formData);

    if (formData.username && formData.password) {
      // Simulate a login process (replace with actual login logic)
      console.log('Logging in with:', formData.username, formData.password);

      // Navigate to a different route upon successful login
      navigate('/dashboard'); // Replace with your actual redirect route
    } else {
      // Handle form validation errors
      alert('Please enter both username and password.');
    }
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <div className='w-full max-w-md p-8 bg-indigo-500 shadow-md rounded'>
        <h2 className='text-2xl font-bold mb-6 text-center'>LOGIN</h2>
        <form className='space-y-4' onSubmit={handleSubmit}>
          <div className='flex flex-col'>
            <label htmlFor='username' className='mb-2 text-sm font-bold text-gray-700'>
              Username:
            </label>
            <input
              type='text'
              id='username'
              autoComplete='off'
              placeholder='Enter your username'
              className='px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            />
          </div>

          <div className='flex flex-col relative'>
            <label htmlFor='password' className='mb-2 text-sm font-bold text-gray-700'>
              Password:
            </label>
            <input
              type={passwordVisible ? 'text' : 'password'} // Toggle between text and password
              id='password'
              autoComplete='off'
              placeholder='Enter your password'
              className='px-4 py-2 pr-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            <div
              className='absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer'
              onClick={() => setPasswordVisible(!passwordVisible)} // Toggle password visibility
            >
              {passwordVisible ? <FaEyeSlash /> : <FaEye />} {/* Show eye icon based on visibility */}
            </div>
          </div>

          <button
            type="submit"
            className="px-4 py-2 bg-green-500 rounded-md w-full text-white"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
