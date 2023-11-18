import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Notify from './Components/notify';
import windows from './assets/windows11.png';
function App() {
  return (
    <>
        <div className="home-content flex flex-col-reverse items-center justify-between">
          <div className="p-1 h-[600px] w-[1000px] bg-black rounded-3xl flex flex-col items-center justify-center">
            <div className="main h-[580px] w-[970px] bg-white rounded-3xl">
              <BrowserRouter>
                <Routes>
                  <Route path='/' element={<Home />} />
                </Routes>
              </BrowserRouter>
            </div>
          </div>
          <div className='row2'>
            <img src={windows} alt="" className='p-3 h-[60px]' />
          </div>
        </div>
    </>
  )
}

export default App
