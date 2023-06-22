import { IconContext } from 'react-icons'
import * as AiIcons from 'react-icons/ai'
import * as FaIcons from 'react-icons/fa'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'


export const data = [
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
        icon: <IoIcons.IoIosPaper/>,
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>
    }
];