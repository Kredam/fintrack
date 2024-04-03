import React from 'react'
import { Route, Routes } from 'react-router-dom'
import modules from './App.module'
import { Sidebar } from './components'

function App () {
  return (
    <div>
      <Sidebar />
      <Routes>
        {modules.map((module) => {
          return <Route key={module.id} path={module.path} element={module.component} />
        })}
      </Routes>
    </div>
  )
}

export default App
