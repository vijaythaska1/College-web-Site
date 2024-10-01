import { useState } from 'react'
import Layout from './page/comman/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Layout />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
