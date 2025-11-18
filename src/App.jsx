
import React from 'react'
import Web from './Project/Web'
import Home from './Project/Nav_Sec/Home'
import About from './Project/Nav_Sec/About'
import Contact from './Project/Nav_Sec/Contact'
import {Routes, Route, BrowserRouter} from 'react-router-dom'

const App = () => {
  return (
  <BrowserRouter>
    <div>
     <Web/>
      <Routes>
        <Route path ="/"  element ={<Home/>} />
        <Route path ="/Login" element ={<Home/>} />
        <Route path ="/Cart" element ={<About/>} />
        <Route path ="/Seller" element ={<Contact/>} />
      </Routes>
    </div>
  </BrowserRouter>
  )
}

export default App