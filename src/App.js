import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "layouts/Admin";
import Products from "layouts/Products";
import Auth from "layouts/Auth";
import Profile from "views/Profile";
import Index from "views/Index.js";
import Services from "views/Services";
import FourOhFour from "views/404";
import About from "views/About";
import Contact from "views/Contact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";

const App = () => {
  

  return (
    <Router>
      <div className="font-sans dark:bg-gray-900 dark:text-gray-300">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="admin//*" element={<Admin />} />
          <Route path="auth//*" element={<Auth />} />
          <Route path="products//*" element={<Products />} />
          <Route path="profile" element={<Profile />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="404" element={<FourOhFour />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
