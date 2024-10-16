import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
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
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<div className="w-full h-[calc(100vh-72px)] flex items-center justify-center"><LoadingSpinner /></div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<About />} />
          <Route path="/steps" element={<Steps />} />
          <Route path="/ourWork" element={<Ourwork />} />
          <Route path="/contactUs" element={<ContactUs />} />
        </Routes>
        <TeamD />
        <DailyOffer />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
