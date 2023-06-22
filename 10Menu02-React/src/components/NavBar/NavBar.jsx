import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import { IconContext } from 'react-icons'
import * as AiIcons from 'react-icons/ai'
import * as FaIcons from 'react-icons/fa'
import { useState } from 'react'
import * as IoIcons from 'react-icons/io'

const data = [
    {
        title: 'Home',
        path: '/',
        cName: 'nav-text',
        icon: <AiIcons.AiFillHome/>
    },
    {
        title: 'Products',
        path: '/products',
        cName: 'nav-text',
        icon: <FaIcons.FaCartPlus/>
    },
    {
        title: 'Reports',
        path: '/reports',
        cName: 'nav-text',
        icon: <IoIcons.IoIosPaper/>
    }
];

const NavBar = () => {
    const [sideBar, setSideBar] = useState(false);
    const showSidebar = ()=> setSideBar(!sideBar)

    return (
        <div>
            <IconContext.Provider value={{color: '#fff'}} >
                <div className='navbar'>
                    <Link to='#' className='menu-bars' >
                        <FaIcons.FaBars onClick={showSidebar}/>
                    </Link>
                </div>

                <nav className={sideBar ? 'nav-menu active' : 'nav-menu'} >
                    <ul className='nav-menu-items' onClick={showSidebar} >
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <AiIcons.AiOutlineClose/>
                            </Link>
                        </li>
                        {
                            data.map((item, index)=>{
                                return(
                                    <li key={index} className={item.cName} >
                                        <Link to={item.path}>
                                            {item.icon}
                                            <span> {item.title} </span>
                                        </Link>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </nav>
            </IconContext.Provider>
            
        </div>
    )
}

export default NavBar