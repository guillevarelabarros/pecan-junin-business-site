
import { Navigate, Route, Routes } from 'react-router';
import { FacebookButton, HomePage, InstagramButton, WhatsAppButton } from '../pecanjunin';
import { Navbar } from '../ui';


export const AppRouter = () => {
  return (
    <>

          <Navbar/>      
          <Routes>
            <Route path="home" element={<HomePage />} />
            {/* <Route path="promotions" element={<PromotionsPage/>} /> */}
            {/* <Route path="contact" element={<ContactPage />} /> */}
            <Route path="/*" element={<Navigate to="/home"/>} />
          </Routes>
          <WhatsAppButton/>
          <InstagramButton/>
          <FacebookButton/>
          

    </>
  )
}