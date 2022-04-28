import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import useLocalStorage from "use-local-storage";
import "./App.css";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

import Icon from "@mdi/react";
import { mdiWhiteBalanceSunny } from "@mdi/js";
import { mdiWeatherNight } from "@mdi/js";

function App() {
  // check to see if user has a theme preference
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  // create stateful theme variable
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  // create function to switch theme
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="App" data-theme={theme}>
      <Router>
        <div className="app-container">
          <button onClick={switchTheme} className="theme-btn">
            switch to{" "}
            {theme === "light" ? (
              <Icon path={mdiWeatherNight} className="dark-icon" />
            ) : (
              <Icon path={mdiWhiteBalanceSunny} className="light-icon" />
            )}{" "}
            mode
          </button>
          <Header />
          <div className="main-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
