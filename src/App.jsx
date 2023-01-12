import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Shop } from "./components/Shop";
import { NotFound } from "./components/NotFound";
import { Footer } from "./components/Footer";
import { Cart } from "./components/Cart";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <Cart /> */}
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      {/* footer */}
      <Footer />
    </BrowserRouter>
  );
};
export default App;
