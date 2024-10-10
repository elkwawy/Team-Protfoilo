import "./App.css";
import Header from "./components/Header/Header";
import { useTranslation } from "react-i18next";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import About from "./pages/about/about";
import Steps from "./pages/steps/Steps";
import Ourwork from "./pages/ourwork/Ourwork";
import ContactUs from "./pages/contactUs/ContactUs";
function App() {
  const { t } = useTranslation();
  const routes = createBrowserRouter([
    {path: '', element:<Layout/>,children:[
      {path: 'aboutUs',element:<About/>},
      {path: 'steps',element:<Steps/>},
      {path: 'ourwork',element:<Ourwork/>},
      {path: 'contactus',element:<ContactUs/>},
    ]}
  ])
  return <>
  <RouterProvider router={routes}></RouterProvider>
  
  
  </>
}

export default App;
