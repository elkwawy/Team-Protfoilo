import React, { Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import LoadingSpinner from "@/utils/LoadingSpinner";
import ScrollTopBtn from "@/utils/ScrollTopBtn";
import Header from "@/layouts/header/Header";
const Home = React.lazy(() => import("@/pages/Home"));
const UiUx = React.lazy(() => import("@/pages/Services/UiUx"));
const Web = React.lazy(() => import("@/pages/Services/Web"));
const Application = React.lazy(() => import("@/pages/Services/Application"));
const Steps = React.lazy(() => import("@/pages/Steps"));
const Ourwork = React.lazy(() => import("@/pages/Ourwork"));
const AboutUs = React.lazy(() => import("@/pages/AboutUs/AboutUs"));
const ContactUs = React.lazy(() => import("@/pages/ContactUs"));
const DailyOffer = React.lazy(() => import("@/components/DailyOffer"));
const Footer = React.lazy(() => import("@/layouts/Footer"));

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
          <div className="w-full  h-[calc(100vh-72px)] flex items-center justify-center">
            <LoadingSpinner />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="uiux_services" element={<UiUx />}></Route>
          <Route path="web_services" element={<Web />}></Route>
          <Route path="mobile_app_services" element={<Application />}></Route>
          <Route path="/steps" element={<Steps />} />
          <Route path="/ourWork" element={<Ourwork />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
        </Routes>
      </Suspense>
      <DailyOffer />
      <ScrollTopBtn />
      <Footer />
    </div>
  );
}

export default App;
