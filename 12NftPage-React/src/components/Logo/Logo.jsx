import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

const Logo = () => {
    return (
        <LogoText>
            <Link to='/' >
                R.
            </Link>
        </LogoText>
    )
}

export default Logo

const LogoText = styled.h1`
    font-family: 'Akaya Telivigala', cursive;
    font-size: ${(props)=> props.theme.fontxxxl};
    color: ${(props)=> props.theme.text};
    transition: all 200ms ease;

    &:hover{
        transform: scale(1.1);
    }

    /* 64em * 16px = 1024px */
    @media (max-width: 64em){
        font-size: ${(props)=> props.theme.fontxxl};
    }
`