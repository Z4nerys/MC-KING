
import { Route, Routes, BrowserRouter } from 'react-router-dom'
////tengo que usar el BrowserRouter envolviendo el routes si quiero que funcione
import { LoginScreen } from '../components/login/LoginScreen'
import { DashboardRoutes } from './DashboardRoutes'

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<LoginScreen/>} />
                
                <Route path='/*' element={<DashboardRoutes />}/>
            </Routes>
        </BrowserRouter>
    )
}
