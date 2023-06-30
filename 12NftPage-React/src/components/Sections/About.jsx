import React from 'react'
import { styled, ThemeProvider } from 'styled-components'
import Carousel from '../Carousel/Carousel'
import Button from '../Button/Button'
import { Dark } from '../../styles/Themes'

const About = () => {
    return (
        <Section id={'about'}>
            <Container>
                <Box>
                    <Carousel></Carousel>
                </Box>

                <Box>
                    <Title>
                        Bienvenido al Club <br/> de los bichos Raros
                    </Title>
                    <SubText>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam sint sit quidem, ab praesentium odit unde, dignissimos modi doloribus laborum architecto molestias ducimus vitae atque cumque! Doloremque obcaecati omnis beatae.
                    </SubText>
                    <SubTextLight>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam ut consequuntur vitae fugiat, quos ad debitis ea cupiditate explicabo consequatur sunt voluptatem excepturi nulla autem quia quaerat, rem totam esse.
                    </SubTextLight>

                    <ButtonContainer>
                        <ThemeProvider theme={Dark}>
                            <Button text='Unirse a Discord' link='#' >Theme</Button>
                        </ThemeProvider>
                    </ButtonContainer>
                </Box>
            </Container>
        </Section>
    )
}

export default About

const Section = styled.section`
    min-height: 100vh;
    width: 100%;
    background-color: ${(props)=> props.theme.text};
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
`

const Container = styled.div`
    width: 75%;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 64em){
        width: 100%;
        flex-direction: column;

        & > *:last-child{
            width: 80%;
        }
    }

    @media (max-wodth: 40em){
        & > *:last-child{
            width: 90%;
        }
    }
`

const Box = styled.div`
    width: 50%;
    height: 100%;
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 40em){
        min-height: 50vh;
    }
`

const Title = styled.h2`
    font-size: ${(props)=> props.theme.fontxxl};
    text-transform: capitalize;
    color: ${(props)=> props.theme.body};
    align-self: flex-start;
    width: 80%;
    margin: 0 auto;

    @media (max-width: 64em){
        width: 100%;
        text-align: center;
    }

    @media (max-width: 40em){
        font-size: ${(props)=> props.theme.fontxl};
    }

    @media (max-width: 30em){
        font-size: ${(props)=> props.theme.fontlg};
    }
`

const SubText = styled.p`
    font-size: ${(props)=> props.theme.fontlg};
    color: ${(props)=> props.theme.body};
    align-self: flex-start;
    width: 80%;
    margin: 1 auto;
    font-weight:400;

    @media (max-width: 64em){
        width: 100%;
        text-align: center;
        font-size: ${(props)=> props.theme.fontmd};
    }

    @media (max-width: 40em){
        font-size: ${(props)=> props.theme.fontmd};
    }

    @media (max-width: 30em){
        font-size: ${(props)=> props.theme.fontsm};
    }
`

const SubTextLight = styled.p`
font-size: ${(props)=> props.theme.fontmd};
color: ${(props)=> `rgba(${props.theme.bodyRgba}, 0.6)`};
align-self: flex-start;
width: 80%;
margin: 1 auto;
font-weight:400;

@media (max-width: 64em){
    width: 100%;
    text-align: center;
    font-size: ${(props)=> props.theme.fontsm};
}

@media (max-width: 40em){
    font-size: ${(props)=> props.theme.fontsm};
}

@media (max-width: 30em){
    font-size: ${(props)=> props.theme.fontxs};
}
`

const ButtonContainer = styled.div`
    width: 80%;
    margin: 1rem auto;
    display: flex;
    align-items: flex-start;

    @media (max-width: 64em){
    width: 100%;
    a{
        margin: 0 auto;
    }
}
`