import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import LoadingSpinner from "./utils/LoadingSpinner";
const UiUxService = React.lazy(() => import("./pages/UiUxService"));
const WebService = React.lazy(() => import("./pages/WebService"));
const MobileService = React.lazy(() => import("./pages/MobileService"));

import About from "./pages/about/About";
import Steps from "./pages/steps/Steps";
import Ourwork from "./pages/ourwork/Ourwork";
import ContactUs from "./pages/contactUs/ContactUs";
import Home from "./pages/Home";

import DailyOffer from "./components/DailyOffer";
import Services from "./pages/Services/UiUx";
import Web from "./pages/Services/Web";
import Application from "./pages/Services/Application";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function App() {
  
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="App">
      <Header />
      <Suspense
        fallback={
          <div className="w-full h-[calc(100vh-72px)] flex items-center justify-center">
            <LoadingSpinner />
          </div>
        }
      >
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
      <Footer />
    </div>
  );
}

export default App;
