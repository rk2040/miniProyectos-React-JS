import React from 'react'
import styled from "styled-components";
import logoReact from '../../assets/react.svg'
import { v } from '../../styles/Variables';
import { IoIosArrowBack } from 'react-icons/io'

const Sidebar = ( {sidebarOpen, setSidebarOpen} ) => {
    const ModSidebarOpen = ()=>{
        setSidebarOpen(!sidebarOpen);
    }

    return (
        <Container isOpen={sidebarOpen} >
            <button className='Sidebarbutton' onClick={ModSidebarOpen} >
                <IoIosArrowBack/>
            </button>
            <div className='Logocontent' >
                <div className='imgcontent'>
                    <img src={logoReact} alt="" />
                </div>
                <h2>Rk2040</h2>
            </div>
        </Container>
    )
}

export default Sidebar


const Container = styled.div`
    background: ${(props)=> props.theme.bg};
    color: ${(props)=> props.theme.text};
    position: sticky;
    padding-top: 20px;

    .Sidebarbutton{
        position: absolute;
        top: ${v.xxlSpacing};
        right: -18px;
        width: 32px;
        height:32px;
        border-radius: 50%;
        background: ${(props)=> props.theme.bgtgderecha};
        box-shadow: 0 0 4px ${(props)=> props.theme.bg3}, 0 0 7px ${(props)=> props.theme.bg};
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: 500ms;
        transform: ${({isOpen})=> isOpen ? `initial` : `rotate(180deg)`};
        border: none;
        letter-spacing: inherit;
        font-size: inherit;
        padding: 0;
        font-family: inherit;
        outline: inherit;
    }

    .Logocontent{
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: ${v.lgSpacing};

        .imgcontent{
            img{
                display: flex;
                max-width: 100%;
                height: auto;
                cursor: pointer;
                transition: all 300ms;
                transform: ${ ({isOpen})=> (isOpen ? `scale(0.8)` : `scale(1.5)`) };
            }
        }

        h2{
            display: ${ ({isOpen})=> (isOpen ? `block` : `none`) }
        }
    }
    
`