import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import JobDetails from './components/JobDetails/JobDetails'
import MyRouters from './components/routers/routers'

function App() {

  return (
    <>
      <div className='App'>
        <Header/>
        <MyRouters/>
      </div>
    </>
  )
}

export default App
