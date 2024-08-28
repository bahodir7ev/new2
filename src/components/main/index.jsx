import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { router } from '../../constants/router'

function Main() {
  return (
    <main className='main'>
      {
        <Routes>
          {router.map(({ id, path, component }) => (
            <Route key={id} path={path} element={component} />
          ))}
        </Routes>
      }
    </main>
  )
}

export default Main
