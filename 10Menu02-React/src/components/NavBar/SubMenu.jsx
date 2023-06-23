import React from "react";
import { useState } from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

const SubMenu = ({ item, close }) => {
    const [subNav, setSubNav] = useState(false);

    const showSubNav = () => setSubNav(!subNav);

    return (
    <>
    <div onClick={!item.subnav && close}>
        <SidebarLink to={item.path} onclick={item.subnav && showSubNav } >
            <div>
                {item.icon}
                <SidebarLabel> {item.title} </SidebarLabel>
            </div>
            <div>
            {item.subnav && subNav
            ? item.iconOpened
            : item.subnav 
            ? item.iconClosed
            : null}
            </div>
        </SidebarLink>
        {subNav && item.subnav.map( (item, index)=>{
            return (
            <DropdownLink to={item.path} key={index} onclick={close} >
                {item.icon}
                <SidebarLabel> {item.title} </SidebarLabel>
            </DropdownLink> )
        })
        }
    </div>
    </>
    )
};

export default SubMenu;

const SidebarLink = styled(Link)`
    display: flex;
    color: #e1e9fc;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    height: 60px;
    text-decoration: none;
    font-size: 18px;

    &:hover {
        background: #252831;
        border-left: 4px solid #2ce445;
        cursor: pointer;
    }
`;
const SidebarLabel = styled.span`
    margin-left: 16px;
`;

const DropdownLink = styled(Link)`
    background: #414757;
    height: 60px;
    padding-left: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;

    &:hover {
        background: #632ce4;
        cursor: pointer;
    }
`;
