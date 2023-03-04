import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "layouts/Admin";
import Products from "layouts/Products";
import Auth from "layouts/Auth";
import Profile from "views/Profile";
import Index from "views/Index.js";
import { useStateContext } from "./contexts/ContextProvider";
import "assets/styles/tailwind.css";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";
import Services from "views/Services";
import Contact from "views/Contact";
import FourOhFour from "views/404";
import About from "views/About";

const App = () => {
  const { setCurrentColor, setCurrentMode} = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <Router>
      <div className="dark:bg-gray-900 dark:text-gray-300">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="admin//*" element={<Admin />} />
          <Route path="auth//*" element={<Auth />} />
          <Route path="products//*" element={<Products />} />
          <Route path="profile" element={<Profile />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Index />} />
          <Route path="about" element={<About />} />
          <Route path="404" element={<FourOhFour />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
