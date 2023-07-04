import React from 'react';
import styled from "styled-components";
import logoReact from '../../assets/react.svg'
import { v } from '../../styles/Variables';
import { AiOutlineLeft, AiOutlineHome, AiOutlineAppstoreAdd, AiOutlineSetting } from 'react-icons/ai';
import { ImStatsBars2 } from 'react-icons/im';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import { BsDiagram3 } from 'react-icons/bs';
import { IoMdExit } from 'react-icons/io';
import { NavLink, useLocation } from 'react-router-dom';

const Sidebar = ( {sidebarOpen, setSidebarOpen} ) => {
    const ModSidebarOpen = ()=>{
        setSidebarOpen(!sidebarOpen);
    }

    return (
        <Container isOpen={sidebarOpen} >
            <button className='Sidebarbutton' onClick={ModSidebarOpen} >
                <AiOutlineLeft/>
            </button>
            <div className='Logocontent' >
                <div className='imgcontent'>
                    <img src={logoReact} alt="" />
                </div>
                <h2>Rk2040</h2>
            </div>
            
            {
                linksArray.map( ({icon, label, to})=> (
                    <div className='LinkContainer' key={label} >
                        <NavLink to={to} className={({isActive})=> `Links${isActive ? ` active` : ``}`} >
                            <div className='Linkicon'> {icon} </div>
                            {
                                sidebarOpen &&( <span>{label}</span> )
                            }
                        </NavLink>
                    </div>
                ))
            }
            <Divider/>
            {
                secondaryLinksArray.map( ({icon, label, to})=> (
                    <div className='LinkContainer' key={label} >
                        <NavLink to={to} className={({isActive})=> `Links${isActive ? ` active` : ``}`} >
                            <div className='Linkicon'> {icon} </div>
                            {
                                sidebarOpen &&( <span>{label}</span> )
                            }
                        </NavLink>
                    </div>
                ))
            }
            <Divider/>
            
        </Container>
    )
}

export default Sidebar

//#region Data links
const linksArray = [
    {
        label: 'Home',
        icon: <AiOutlineHome/>,
        to: '/',
    },
    {
        label: 'Estadisticas',
        icon: <ImStatsBars2/>,
        to: '/estadisticas',
    },
    {
        label: 'Productos',
        icon: <AiOutlineAppstoreAdd/>,
        to: '/productos',
    },
    {
        label: 'Diagramas',
        icon: <BsDiagram3/>,
        to: '/diagramas',
    },
    {
        label: 'Reportes',
        icon: <HiOutlineDocumentReport/>,
        to: '/reportes',
    },
];

const secondaryLinksArray = [
    {
        label: 'Configuración',
        icon: <AiOutlineSetting/>,
        to: '/configuracion',
    },
    {
        label: 'Salir',
        icon: <IoMdExit/>,
        to: '/salir',
    },
];
//#endregion Data links


//#region Styled component
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
            }
            height: auto;
            cursor: pointer;
            transition: all 300ms;
            transform: ${ ({isOpen})=> (isOpen ? `scale(0.8)` : `scale(1.5)`) };
        }

        h2{
            display: ${ ({isOpen})=> (isOpen ? `block` : `none`) }
        }
    }

    .LinkContainer{
        margin: 8px 0;
        padding: 0 15%;

        :hover{
            background: ${(props)=> props.theme.bg3};
            
        }

        .Links{
            display: flex;
            align-items: center;
            text-decoration: none;
            padding: calc(${v.smSpacing} - 2px) 0;
            color: ${(props)=> props.theme.text};

            .Linkicon{
                display: flex;
                padding: ${v.smSpacing} ${v.mdSpacing};

                svg{
                    font-size: 25px;
                }
            }

            &.active{
                span{
                    color: ${(props)=> props.theme.bg4};
                }

                .Linkicon{
                    svg{
                        color: ${(props)=> props.theme.bg4};
                    }
                }
            }
        }

        
    }
    
`

const Divider = styled.div`
    height: 1px;
    width: 100%;
    background: ${(props)=> props.theme.bg3};
    margin: ${v.lgSpacing} 0;
`
//#endregion Styled component 
