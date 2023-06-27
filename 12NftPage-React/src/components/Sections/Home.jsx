import React from 'react'
import styled from 'styled-components'

const Home = () => {
    return (
        <Section id='home'>
            Section Home
        </Section>
    )
}

export default Home

const Section = styled.section`
    min-height: ${(props)=> `(calc(100vh - ${props.theme.navHeight}))`}; //Calcula el alto total 100vh menos el alto del nav. asi ocupa todo menos el nav
    width: 100vw;
    position: relative;
    background-color: ${(props)=> props.theme.body};
`