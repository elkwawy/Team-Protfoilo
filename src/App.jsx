import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import About from "./pages/about/about";
import ContactUs from "./pages/contactUs/ContactUs";
import Ourwork from "./pages/ourwork/Ourwork";
import Steps from "./pages/steps/Steps";
import LoadingSpinner from "./utils/LoadingSpinner";
const Home = React.lazy(() => import('./pages/Home'));

import DailyOffer from "./components/DailyOffer";
import TeamD from "./components/TeamDC";
function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<div className="w-full h-[calc(100vh-72px)] flex items-center justify-center"><LoadingSpinner /></div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/uiux_services" element={<UiUxService />} />
          <Route path="/services/web_services" element={<WebService />} />
          <Route path="/services/mobile_app_services" element={<MobileService />} />
          <Route path="/aboutUs" element={<About />} />
          <Route path="/steps" element={<Steps />} />
          <Route path="/ourWork" element={<Ourwork />} />
          <Route path="/contactUs" element={<ContactUs />} />
        </Routes>
      </Suspense>
      <TeamD />
      <DailyOffer />
      <Footer />
    </div>
  );
}

export default App;
