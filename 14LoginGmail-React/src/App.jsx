import { useState } from 'react'
import './App.css'
import styled from 'styled-components'
import { AuthContextProvider } from './context/AuthContext'
import { UserAuth } from './context/AuthContext'
import MyRoutes from './routers/routes'

function App() {
  // const [user, logOut] = UserAuth()

  return (
    <>
    <AuthContextProvider>
      <Container>
        <MyRoutes/>
      </Container>
    </AuthContextProvider>
    </>
  )
}

export default App


const Container = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
`

