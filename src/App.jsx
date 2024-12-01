import { useState } from 'react'
import './App.css'
import Inicio from './views/Inicio'
import Carta from './views/Carta';

import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <>
      <div className="bg-red-500 min-h-[100vh] flex flex-col">
        <div className="bg-accent py-6">
          <p className="text-4xl text-center font-marker text-white">Menú Digital</p>
        </div>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Inicio />} />
            <Route path="/" element={<Inicio />} />
            <Route path="/carta" element={<Carta />} />
          </Routes>
        </BrowserRouter>

      </div>

    </>
  )
}

export default App
