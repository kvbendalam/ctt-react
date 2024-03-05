import React from "react";
import "./App.css";
import Home from "./Home";
import DestinationDetails from "./DestinationDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Tours from "./Tours";
import AboutUsPage from "./AboutUsPage";

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/destination/:place" element={<DestinationDetails />} />
          <Route exact path="/tours" element={<Tours />} />
          <Route exact path="/about" element={<AboutUsPage />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
