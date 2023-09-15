import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Datapush from './components/datapush'
import Searchpage from './components/searchpage'
import { Home } from './components/home'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/search" element={<Searchpage />}></Route>
    </Routes>
  )
}

export default App
