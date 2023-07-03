import React from 'react'
import styled from "styled-components";

const Sidebar = ( {sidebarOpen, setSidebarOpen} ) => {
    return (
        <Container>
            <div className='Logocontent' >

            </div>
        </Container>
    )
}

export default Sidebar


const Container = styled.div`
    background: ${(props)=> props.theme.bg};
    color: ${(props)=> props.theme.text};
    position: sticky;

    .Logocontext{
        
    }
`