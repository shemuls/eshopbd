import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-loading-skeleton/dist/skeleton.css";
import Footer from "./Components/Footer/Footer.js";
import Header from "./Components/Header/Header.js";
import Home from "./Components/Pages/Frontend/Home/Home.js";
import NotFound from "./Components/Pages/NotFound/NotFound.js";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
