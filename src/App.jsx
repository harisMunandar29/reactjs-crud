import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AddProvence, EditProv, Home, View } from './pages'

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/view/:id' element={<View/>}/>
      <Route path='/add' element={<AddProvence/>}/>
      <Route path='/edit/:id' element={<EditProv/>}/>
    </Routes>
  )
}
