import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contacto from "./componentes/Contacto/Contacto";
import Home from "./componentes/home/home";
import Navbar from "./componentes/Navbar/Navbar";
import Header from "./componentes/Header/Header";
import Items from "./componentes/Items/Items";
import Footer from "./componentes/Footer/Footer";




function App() {
  return (
    <>
      <div className="AppContainer">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path="productos" element={<Items />} />
              <Route path="contacto" element={<Contacto />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </>
  );
}

export default App;
