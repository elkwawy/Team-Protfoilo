import "./App.css";
import Header from "./components/Header/Header";
import { useTranslation } from "react-i18next";
// import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import LoadingSpinner from "./utils/LoadingSpinner";
import ScrollTopBtn from "./utils/ScrollTopBtn";
const UiUxService = React.lazy(() => import('./pages/UiUxService'));
const WebService = React.lazy(() => import('./pages/WebService'));
const MobileService = React.lazy(() => import('./pages/MobileService'));
const About = React.lazy(() => import('./pages/about/About'));
const Steps = React.lazy(() => import('./pages/steps/Steps'));
const Ourwork = React.lazy(() => import('./pages/ourwork/Ourwork'));
const ContactUs = React.lazy(() => import('./pages/contactUs/ContactUs'));
const Home = React.lazy(() => import('./pages/Home'));
const DailyOffer = React.lazy(() => import('./components/DailyOffer'));
const Services = React.lazy(() => import('./pages/Services/UiUx'));
const Web = React.lazy(() => import('./pages/Services/Web'));
const Application = React.lazy(() => import('./pages/Services/Application'));
const Footer = React.lazy(() => import("./components/Footer"));


function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<div className="w-full h-[calc(100vh-72px)] flex items-center justify-center"><LoadingSpinner /></div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="uiux_services" element={<UiUxService />} />
          <Route path="web_services" element={<WebService />} />
          <Route path="mobile_app_services" element={<MobileService />} />
          <Route path="/aboutUs" element={<About />} />
          <Route path="/steps" element={<Steps />} />
          <Route path="/ourWork" element={<Ourwork />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/services/uiux_services" element={<Services />}></Route>
          <Route path="/services/web_services" element={<Web />}></Route>
          <Route
            path="/services/mobile_app_services"
            element={<Application />}
          ></Route>
        </Routes>
      </Suspense>
      <DailyOffer />
      <ScrollTopBtn />
      <Footer />
    </div>
  );
}

export default App;
