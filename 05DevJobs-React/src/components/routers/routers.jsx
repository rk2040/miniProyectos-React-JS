import React from 'react'
import JobDetails from '../JobDetails/JobDetails'
import JobLists from '../JobLists/JobLists'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const MyRouters = () => {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<JobLists/>} />
                <Route path='/jobs' element={<JobLists/>} />
                <Route path='/jobs/:position' element={<JobDetails/>} />
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default MyRouters