import React from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect'

const TypeWriterText = () => {
    return (
        <Title>
            Aprende react creando proyectos
            <Typewriter
                options={
                    {
                        // strings:['Aprende', 'react', 'creando', 'proyectos'],
                        autoStart: true,
                        loop: true,
                    }
                }
                onInit ={(typewriter)=>{
                    typewriter.typeString(`<span class='text-1'>Divertidos<span/>`)
                    .pauseFor(500)
                    .deleteAll()

                    typewriter.typeString(`<span class='text-2'>Increibles<span/>`)
                    .pauseFor(500)
                    .deleteAll()

                    typewriter.typeString(`<span class='text-3'>Reutilizables<span/>`)
                    .pauseFor(500)
                    .deleteAll()
                    .start()
                }
            }
            />
        </Title>
    )
}

export default TypeWriterText


const Title = styled.h2`
    font-size: ${(props)=> props.theme.fontxxl};
    text-transform: capitalize; // Esto hace que la primer letra de cada palabra se cambie a mayuscula automaticamente
    width: 80%;
    color: ${(props)=> props.theme.text};
    align-self: flex-start;
    transition: all 500ms ease-in-out;

    .text-1{
        color: blue;
    }
    .text-2{
        color: orange;
    }
    .text-3{
        color: green;
    }

    @media (max-width: 70em){
        font-size: ${(props)=> props.theme.fontxl}
    }
    @media (max-width: 48em){
        align-self: center;
        text-align: center;
    }
    @media (max-width: 40em){
        width:90%;
    }
`