import React, { useState } from "react";
import Img from "../src/assets/Img/back6.jpg";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Research from "./components/Research.jsx";
import Navigation from "./components/Navigation";
import Product from "./components/Product.jsx";
import Developers from "./components/Developers.jsx";
import Safety from "./components/Safety.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Navigation />
              <div
                className="
                h-screen bg-cover bg-center flex justify-center  items-center"
                style={{ backgroundImage: `url(${Img})` }}
              >
                <div className="flex flex-col m-0">
                  <h1 className="text-black text-6xl font-extrabold">
                    Medicines Made Easy:
                  </h1>
                  <h2 className="text-black text-6xl mt-4 font-extrabold">
                    Incorporating Health into Your Daily Life
                  </h2>
                </div>
              </div>
            </div>
          }
        />
        <Route path="/research" element={<Research />} />
        <Route path="/product" element={<Product />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="/safety" element={<Safety />} />
      </Routes>
    </Router>
  );
}

export default App;
