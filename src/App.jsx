import "./App.css";
import Header from "./components/Header/Header";
import { useTranslation } from "react-i18next";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import LoadingSpinner from "./utils/LoadingSpinner";
const UiUxService = React.lazy(() => import('./pages/UiUxService'));
const WebService = React.lazy(() => import('./pages/WebService'));
const MobileService = React.lazy(() => import('./pages/MobileService'));
import Layout from "./components/layout/Layout";
import About from "./pages/about/about";
import Steps from "./pages/steps/Steps";
import Ourwork from "./pages/ourwork/Ourwork";
import ContactUs from "./pages/contactUs/ContactUs";

import DailyOffer from "./components/DailyOffer";
import TeamD from "./components/TeamDC";
function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<div className="w-full h-[calc(100vh-72px)] flex items-center justify-center"><LoadingSpinner /></div>}>
        <Routes>
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
