import React from 'react'
import styled,{ keyframes } from 'styled-components'
import TypeWriterText from '../TypeWriterText/TypeWriterText'
import CoverVideo from '../CoverVideo/CoverVideo'
import imgReact from '../../assets/react.png'

const Home = () => {
    return (
        <Section id='home'>
            <Container>
                <Box>
                    <TypeWriterText/>
                </Box>
                <Box>
                    <CoverVideo/>
                </Box>
                <Round>
                    <img src={imgReact} alt="Logo React" width={500} height={400} />
                </Round>
            </Container>
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

const Container = styled.div`
    width: 75%;
    height: 80vh;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 64em){
        width: 85%;
    }

    @media (max-width: 48em){
        flex-direction: column-reverse;
        width: 100%;

        & > *:first-child{
            width:100%;
            margin-top: 2rem;
        }
    }
`

const Box = styled.div`
    width:50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`


const rotate = keyframes`
    100%{
        transform: rotate(1turn);
    }
`
const Round = styled.div`
    position: absolute;
    bottom: 2rem;
    right: 90%;
    width: 7rem;
    
    img{
        width: 100%;
        height: auto;
        animation: ${rotate} 6000ms linear infinite reverse;
    }

    @media (max-width: 64em){
        width: 4rem;
        height: 4rem;
        left: none;
        right: 2rem;
        bottom: 100%;
    }

    @media (max-width: 48em){
        right: 1.5rem;
    }
`