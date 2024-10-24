
import { Navigate, Route, Routes } from 'react-router';
import { AboutPage, ContactPage, FacebookButton, HomePage, InstagramButton, PromotionsPage, WhatsAppButton } from '../pecanjunin';
import { Navbar } from '../ui';


export const AppRouter = () => {
  return (
    <>

          <Navbar/>      
          <Routes>
            <Route path="home" element={<HomePage />} />
            {/* <Route path="about" element={<AboutPage />} /> */}
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