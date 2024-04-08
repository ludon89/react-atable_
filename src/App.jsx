import React from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages importation
import Accueil from "./pages/accueil";
import Recettes from "./pages/recettes";
import Contact from "./pages/contact";

// Components importation
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="wrapper">
      <Header />

      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route exact path="/" element={<Accueil />} />
            <Route path="/accueil" element={<Accueil />} />
            <Route path="/recettes" element={<Recettes />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
