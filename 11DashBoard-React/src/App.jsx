
import './App.css'
import MyRoutes from './routers/MyRoutes'
import styled from 'styled-components'

function App() {

  return (
    <>
    <Container>
      <MyRoutes/>
    </Container>;
    </>
  )
}

export default App


const Container = styled.div`
  display: flex;
  height: 97vh;
  background: linear-gradient(to bottom right, #000000 0%, #e6e4ff 70%);
  border-radius: 2rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction:column;
    
  }
`;