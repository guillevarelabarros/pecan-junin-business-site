import { Navigate, Route, Routes } from 'react-router';



import { HomePage, AbautPage, PromocionesPage, ContactPage, HowToBuy } from '../nueces';
import { LoginPage } from '../auth';
import { Navbar } from '../ui';


export const AppRouter = () => {
  return (
    <>

      <Navbar/>

      <Routes>
        <Route path="home" element={ <HomePage/> } />
        <Route path="abaut" element={ <AbautPage/> } />
        <Route path="promociones" element={ <PromocionesPage/> } />
        <Route path="howtobuy" element={ <HowToBuy/> } />
        <Route path="contacto" element={ <ContactPage/> } />
        <Route path="login" element={ <LoginPage/> } />


        <Route path="/" element={ <Navigate to="/home" /> } />

      </Routes>

    
    </>
  )
}