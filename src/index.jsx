import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals.js';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Layout from './components/Layout.jsx';
import Contact from './components/Contact/Contact.jsx';
import Github from './components/Github/Github.jsx';


const router = createHashRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
    {
        path: "",
        element: <Home />
      },
      {
        path:"About",
        element:<About/>
      },
      {
        path:"Contact",
        element:<Contact/>
      },
      {
        path:"Github",
        element:<Github/>
      }
      ]
    }
    
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router }/>
  </React.StrictMode>
);
reportWebVitals();
