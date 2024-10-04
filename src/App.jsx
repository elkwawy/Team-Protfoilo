import "./App.css";
import Header from "./components/Header/Header";
import { useTranslation } from "react-i18next";
import Footer from "./components/Footer";
function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <Header />
      <h1 className="text-3xl text-blue-500 text-center mt-5 h-[37vh]">{t("test")}</h1>
      <Footer />
    </div>
  );
}

export default App;
