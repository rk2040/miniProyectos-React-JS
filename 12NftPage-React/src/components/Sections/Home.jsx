import React from 'react'
import styled from 'styled-components'
import TypeWriterText from '../TypeWriterText/TypeWriterText'

const Home = () => {
    return (
        <Section id='home'>
            <Container>
                <Box>
                    <TypeWriterText></TypeWriterText>
                </Box>
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
`

const Box = styled.div`
    width:50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`