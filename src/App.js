import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./component/header/header";
import SideBar from "./component/sideBar/sideBar";
import Home from "./component/Home/Home";
import Login from "./component/Pages/Login/Login";
import Signup from "./component/Pages/Signup/Signup";
import Dashboard from "./component/Pages/Dashboard/Dashboard";
import Footer from "./component/Footer/Footer";

const App = () => {

  return (
    <div className="mainDiv">
   
      <BrowserRouter>
        <Header />
        <SideBar />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          {/* <Route path="/labeldashboard/*" element={<ArtistDashboard />} /> */}
        </Routes>
        <Footer />
        {/* <MobileView /> */}
      </BrowserRouter>
     
    </div>
  );
};

export default App;
