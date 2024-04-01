import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import Product from "./components/Product";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/footer";
function App() {
  return (
    <Router>
      <>
      <Header />
        <Routes>
          <Route path="/product/:id" element={<Product />} />
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </>
    </Router>
  );
}

export default App;
