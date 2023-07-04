import React, { useState } from "react";
import MyRoutes from "./routers/routes";
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import { Light, Dark } from "./styles/Theme";
import { ThemeProvider } from "styled-components";

export const ThemeContext = React.createContext(null);

function App() {
    const [theme, setTheme] = useState("light");
    const themeStyle = theme === "light" ? Light : Dark;
    const CambiarTheme = ()=>{
      setTheme( (theme)=>(theme==='light' ? 'dark' : 'light' ))
    }

    const [sidebarOpen, setSidebarOpen] = useState(true);

    return (
      <>
        <ThemeContext.Provider value={{ setTheme, theme }}>
          <ThemeProvider theme={themeStyle}>
            <BrowserRouter>
              <Container className={sidebarOpen ? 'sidebarState active' : 'sidebarState'} >
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />  {/* Despues de BrowserRouter y antes de MyRoutes (Routes), para que siempre este en todas las paginas */}
                <MyRoutes />
              </Container>
            </BrowserRouter>
          </ThemeProvider>
        </ThemeContext.Provider>
      </>
    );
}

export default App;

const Container = styled.div`
  display: grid;
  grid-template-columns: 90px auto;
  background: ${({theme})=> theme.bgtotal};
  transition: all 300ms;

  &.active{
    grid-template-columns: 300px auto;
  }
`;
