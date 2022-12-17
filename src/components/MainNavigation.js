import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import HomePage from "./HomePage";
import AddContact from "./AddContact";
import EditContact from "./EditContact";
import DeleteContact from "./DeleteContact";
import Success from "./Success";
import NotFound from "./NotFound";

const MainNavigation = () => {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add" element={<AddContact />} />
            <Route path="/edit" element={<EditContact />} />
            <Route path="/delete" element={<DeleteContact />} />
            <Route path="/success" element={<Success />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
};

export default MainNavigation;
