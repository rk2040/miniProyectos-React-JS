import React from 'react'
import styled from 'styled-components'
import Logo from '../Logo/Logo'

const Navigation = () => {
    return (
        <Section>
            <NavBar>
                <Logo/>
            </NavBar>
        </Section>
    )
}

export default Navigation


const Section = styled.section`
    width: 100vw;
    background-color: ${(props)=> props.theme.body};
`

const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 85%;
    height: ${(props)=> props.theme.navHeight};
    margin: 0 auto;

`
