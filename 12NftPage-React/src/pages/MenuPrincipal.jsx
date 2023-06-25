import React from 'react'
import Navigation from '../components/Navigation/Navigation'
import { Light } from '../styles/Themes'
import { GlobalStyles } from '../styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'

const MenuPrincipal = () => {
    return (
        <>
        <main>
            <GlobalStyles/>
            <ThemeProvider theme={Light} >
                <Navigation />
            </ThemeProvider>
        </main>
        </>
    )
}

export default MenuPrincipal