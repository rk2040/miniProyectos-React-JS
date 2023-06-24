import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MenuPrincipal from '../pages/MenuPrincipal'

const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MenuPrincipal/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes