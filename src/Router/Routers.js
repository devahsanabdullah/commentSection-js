import React from 'react'
import Login from '../pages/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CommentSection from '../pages/CommentSection';


const Routers = () => {
  return (
    <BrowserRouter>
    <Routes>
   
    <Route path="/" element={<Login />} />
    <Route path="/commentSection" element={<div className='bg-[#dddef4] max-w-full h-screen'><CommentSection /></div>} />
    

    </Routes>
    
    </BrowserRouter>
  )
}

export default Routers