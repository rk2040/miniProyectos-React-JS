import React from "react";
import "./NavBar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import { data } from "./Data";
import { keyframes, styled } from "styled-components";
import SubMenu from "./SubMenu";

const NavBar = () => {
    const [sideBar, setSideBar] = useState(false);
    const showSidebar = () => setSideBar(!sideBar);

    return (
        <>
        <div>
            <IconContext.Provider value={{ color: "#fff" }}>
                <Nav>
                    <NavIcon to='#'>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </NavIcon>
                    <SidebarNav sidebar={sideBar} >
                        <SidebarWrap>
                            <NavIcon to='#' >
                            </NavIcon>
                            <AiIcons.AiOutlineClose onClick={showSidebar} >
                            </AiIcons.AiOutlineClose>
                            {
                                data.map( (item, index)=> {
                                    return <SubMenu key={index} />
                                })
                            }
                        </SidebarWrap>
                    </SidebarNav>

                </Nav>
            </IconContext.Provider>
        </div>
        </>
    );
};

export default NavBar;

const Nav = styled.div`
    background: #15171c;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;
const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;
const SidebarNav = styled.nav`
    background: #15171c;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
    transition: 350ms;
    z-index: 10;
`;
const SidebarWrap = styled.div`
    width: 100%;
`;
