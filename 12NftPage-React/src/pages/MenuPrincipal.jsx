import React from 'react'
import Navigation from '../components/Navigation/Navigation'
import { Light } from '../styles/Themes'
import { GlobalStyles } from '../styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import Home from '../components/Sections/Home'
import About from '../components/Sections/About'
import Roadmap from '../components/Sections/Roadmap'

const MenuPrincipal = () => {
    return (
        <>
        <main>
            <GlobalStyles/>
            <ThemeProvider theme={Light} >
                <Navigation />
                <Home/>
                <About/>
                <Roadmap/>
            </ThemeProvider>
        </main>
        </>
    )
}

export default MenuPrincipal