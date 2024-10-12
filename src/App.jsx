import "./App.css";
import Header from "./components/Header/Header";
import { useTranslation } from "react-i18next";
import Footer from "./components/Footer";
import DailyOffer from "./components/DailyOffer";
import TeamD from "./components/TeamDC";
function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <Header />
      <TeamD />
      <DailyOffer />
      <Footer />
    </div>
  );
}

export default App;
