import React from 'react'
import styled from 'styled-components'

const Navigation = () => {
    return (
        <Section>
            Hola
        </Section>
    )
}

export default Navigation


const Section = styled.section`
    width: 100vw;
    background-color: ${(props)=> props.theme.body}
`