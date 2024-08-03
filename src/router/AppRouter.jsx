import { Navigate, Route, Routes } from 'react-router';



import { HomePage, AbautPage } from '../nueces';
import { LoginPage } from '../auth';
import { Navbar } from '../ui';


export const AppRouter = () => {
  return (
    <>

      <Navbar/>

      <Routes>
        <Route path="home" element={ <HomePage/> } />
        <Route path="abaut" element={ <AbautPage/> } />
        <Route path="login" element={ <LoginPage/> } />

        <Route path="/" element={ <Navigate to="/home" /> } />

      </Routes>

    
    </>
  )
}