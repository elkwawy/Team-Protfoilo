import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from './components/Header/Header';
import Ourwork from './pages/ourwork/Ourwork';
import LoadingSpinner from "./utils/LoadingSpinner";
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import("./pages/about/About"));
const Steps = React.lazy(() => import("./pages/steps/Steps"));
// const Ourwork = React.lazy(() => import("./pages/ourwork/Ourwork"));
const ContactUs = React.lazy(() => import("./pages/contactUs/ContactUs"));
const TeamD = React.lazy(() => import("./components/TeamDC"));
const DailyOffer = React.lazy(() => import("./components/DailyOffer"));
const Footer = React.lazy(() => import("./components/Footer"));
const UiUxService = React.lazy(() => import('./pages/UiUxService'));
const WebService = React.lazy(() => import('./pages/WebService'));
const MobileService = React.lazy(() => import('./pages/MobileService'));

import Application from "./Pages/Services/Application";
import Services from "./Pages/Services/UiUx";
import Web from "./Pages/Services/Web";

function App() {
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
        <TeamD />
      </Suspense>
      <DailyOffer />
      <Footer />
    </div>
  );
}

export default App;
