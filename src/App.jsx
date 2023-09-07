import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes, NavLink } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Support from './components/Support'
import NotFound from './components/NotFound'

function App() {

  return (
    <div>
      <ul className='flex gap-5 m-2'>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/support">Support</NavLink></li>
      </ul>

      <Routes>
        <Route path='/' element={<Home/>} >
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/support' element={<Support/>} />
          <Route path='*' element={<NotFound/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
