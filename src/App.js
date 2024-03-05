import React from "react";
import "./App.css";
import Home from "./Home";
import DestinationDetails from "./DestinationDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/destination/:place" element={<DestinationDetails />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
