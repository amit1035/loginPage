import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [color,setColor] = useState('midnightblue')
  
  
  return (
  
    
    <div className='w-full h-screen duration-200'
    style ={{backgroundColor:color}}>
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>

    <div className=' flex flex-wrap justify-center gap-3 shadow -lg bg-white px-3 py-2 rounded-3xl' >
    <button  onClick ={()=>setColor("red")}
    className='outline-none px-4 py-1 rounded-full text-white shadow-lg 'style={{backgroundColor:"red"}}>Red</button>
    <button onClick ={()=>setColor("Green")}
    className='outline-none px-4 py-1 rounded-full text-white shadow-lg 'style={{backgroundColor:"Green"}}>Green</button>
    <button onClick ={()=>setColor("yellow")}
    className='outline-none px-4 py-1 rounded-full text-black shadow-lg 'style={{backgroundColor:"yellow"}}>Yellow</button>
    <button onClick ={()=>setColor("white")}
    className='outline-none px-4 py-1 rounded-full text-black shadow-lg 'style={{backgroundColor:"white"}}>White</button>
    <button onClick ={()=>setColor("black")}
    className='outline-none px-4 py-1 rounded-full text-white shadow-lg 'style={{backgroundColor:"black"}}>black</button>
    <button onClick ={()=>setColor("Maroon")}
    className='outline-none px-4 py-1 rounded-full text-white shadow-lg 'style={{backgroundColor:"Maroon"}}>Maroon</button>
    <button onClick ={()=>setColor("Blue")}
    className='outline-none px-4 py-1 rounded-full text-white shadow-lg 'style={{backgroundColor:"blue"}}>Blue</button>
    <button onClick ={()=>setColor("pink")}
    className='outline-none px-4 py-1 rounded-full text-white shadow-lg 'style={{backgroundColor:"pink"}}>Pink</button>
    <button onClick ={()=>setColor("Grey")}
    className='outline-none px-4 py-1 rounded-full text-white shadow-lg 'style={{backgroundColor:"Grey"}}>Grey</button>
    <button onClick ={()=>setColor("purple")}
    className='outline-none px-4 py-1 rounded-full text-white shadow-lg 'style={{backgroundColor:"purple"}}>Purple</button>
    
    </div>
    </div>
    </div>

     
     
  );
}

export default App;
