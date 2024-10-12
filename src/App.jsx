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
const Home = React.lazy(() => import('./pages/Home'));

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <Header />
      {/* <h1 className="text-3xl text-blue-500 text-center mt-5 h-[37vh]">{t("test")}</h1> */}
      <Suspense fallback={<div className="w-full h-[calc(100vh-72px)] flex items-center justify-center"><LoadingSpinner /></div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/uiux_services" element={<UiUxService />} />
          <Route path="/services/web_services" element={<WebService />} />
          <Route path="/services/mobile_app_services" element={<MobileService />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
