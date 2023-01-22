import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Shop } from "./components/Shop";
import { NotFound } from "./components/NotFound";
import { Footer } from "./components/Footer";
import { Cart } from "./components/Cart";
import "./App.css";
// import "./App2.css";
import { createContext, useState } from "react";

export const GlobalContext = createContext();
const App = () => {
  const [globalState, setGlobalState] = useState([]);
  return (
    <GlobalContext.Provider value={{ globalState, setGlobalState }}>
      <BrowserRouter basename="/shopping-cart">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </GlobalContext.Provider>
  );
};
export default App;
