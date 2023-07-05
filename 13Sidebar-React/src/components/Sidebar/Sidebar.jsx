import React, { useContext } from 'react';
import styled from "styled-components";
import logoReact from '../../assets/react.svg'
import { v } from '../../styles/Variables';
import { ThemeContext } from '../../App';
import { NavLink, useLocation } from 'react-router-dom';

import { AiOutlineLeft, AiOutlineHome, AiOutlineAppstoreAdd, AiOutlineSetting } from 'react-icons/ai';
import { ImStatsBars2 } from 'react-icons/im';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import { BsDiagram3 } from 'react-icons/bs';
import { IoMdExit } from 'react-icons/io';

const Sidebar = ( {sidebarOpen, setSidebarOpen} ) => {
    const ModSidebarOpen = ()=>{
        setSidebarOpen(!sidebarOpen);
    }

    const {theme, setTheme} = useContext(ThemeContext)
    
    const CambiarTheme = ()=>{
        setTheme( (theme)=>(theme==='light' ? 'dark' : 'light' ))
    }

    return (
        <Container isOpen={sidebarOpen} themeUse={theme} >
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

            <div className='ThemeContent'>
                {
                    sidebarOpen && <span className='titletheme'>Dark mode</span>
                }
                <div className='ToggleContent'>
                    <div className='grid theme-container'>
                        <div className='content'>
                            <div className='demo'>
                                <label className='switch' >
                                    <input type="checkbox" className='theme-swither' onClick={CambiarTheme} />
                                    <span className='slider round'>

                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
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

    .ThemeContent{
        display: flex;
        align-items: center;
        justify-content: space-between;

        .titletheme{
            display: block;
            padding: 10px;
            font-weight: 700;
            opacity: ${({isOpen})=> (isOpen ? `1` : `0`)};
            transition: all 300ms;
            white-space: nowrap;
            overflow: hidden;
        }

        .ToggleContent{
            margin: ${({isOpen})=> (isOpen ? `auto 40px` : `auto 15px`)};
            height: 20px;
            border-radius: 10px;
            transition: all 300ms;
            position: relative;

            .theme-container{
                background-blend-mode: multiply, multiply;
                transition: 400ms;

                .grid{
                    display: grid;
                    justify-items: center;
                    align-items: center;
                    height: 100vh;
                    width: 100vw;
                    font-family: 'Lato', sans-serif;
                }

                .demo{
                    font-size: 32px;

                    .switch{
                        position: relative;
                        display: inline-block;
                        width: 60px;
                        height: 34px;
                        
                        .theme-swither{
                            opacity: 0;
                            width: 0;
                            height: 0;

                            &:checked +.slider:before {
                                left: 4px;
                                content: '🌑';
                                transform: translateX(26px);
                            }
                        }

                        .slider{
                            position: absolute;
                            cursor: pointer;
                            top: 0;
                            left: 0;
                            right: 0;
                            bottom: 0;
                            background: ${({themeUse})=> (themeUse === 'light' ? v.lightcheckbox : v.checkbox)};
                            transition: 400ms;

                            &::before{
                                position: absolute;
                                content: '☀️';
                                width: 0px;
                                height: 0px;
                                left: -10px;
                                top: 16px;
                                line-height: 0px;
                                transition: 400ms;
                            }

                            &.round{
                                border-radius: 34px;

                                &::before{
                                    border-radius: 50%;
                                }
                            }
                        }
                        
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
