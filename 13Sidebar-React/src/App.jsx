import { useState } from 'react'
import MyRoutes from './routers/routes'
import styled from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar'

function App() {


  return (
    <>
    <BrowserRouter>
      <Container>
        <Sidebar/>  {/* Despues de BrowserRouter y antes de MyRoutes (Routes), para que siempre este en todas las paginas */}
        <MyRoutes/>
      </Container>
    </BrowserRouter>
    </>
  )
}

export default App


const Container = div`
  
`
