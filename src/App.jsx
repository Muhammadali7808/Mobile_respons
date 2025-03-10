import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import Home from './Pages/Home/home'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
            <Route path='home' element={<Home/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
