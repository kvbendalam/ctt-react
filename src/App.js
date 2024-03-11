import React from "react";
import "./App.css";
import Home from "./Home";
import DestinationDetails from "./DestinationDetails";
import { HashRouter, Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Tours from "./Tours";
import AboutUsPage from "./AboutUsPage";
import Package from "./Package";

function App() {
  return (
    <div className="App">
      <Header/>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/destination/:place" element={<DestinationDetails />} />
          <Route exact path="/tours" element={<Tours />} />
          <Route exact path="/about" element={<AboutUsPage />} />
          <Route exact path="/package/:place/:type" element={<Package/>} />
        </Routes>
      </HashRouter>
      <Footer/>
    </div>
  );
}

export default App;
