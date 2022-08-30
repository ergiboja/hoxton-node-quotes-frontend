import { useState , useEffect } from 'react'
import { BrowserRouter } from "react-router-dom";
import {Routes , Route} from "react-router-dom"
import { Link } from "react-router-dom";

import logo from './logo.svg'
import './App.css'
import RandomQPage from './random';
import Home from './home';
function App() {
  

 
  return (
    <Routes>
      <Route path='/random' element={<RandomQPage/>}/>
      <Route path='/' element={<Home/>}/>
      
      </Routes>
      
  )
}

export default App
