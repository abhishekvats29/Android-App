import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// Landing page
import Home from "./pages/Home";

// Personal section
import Personal from "./pages/Personal";
import NavbarPersonal from "./pages/NavbarPersonal";
import FooterPersonal from "./pages/FooterPersonal";

// Professional section
import Professional from "./components/Professional";
import NavbarProfessional from "./components/NavbarProfessional";
import FooterProfessional from "./components/FooterProfessional";

// Splash screen
import SplashScreen from "./components/SplashScreen";

// ScrollToTop component (internal helper)
function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 8000); // 8 seconds
    return () => clearTimeout(timer);
  }, []);

  return showSplash ? (
    <SplashScreen />
  ) : (
    <div className="min-h-screen bg-black text-white">
      <ScrollToTop />
      <Routes>
        {/* Home - No navbars or footers */}
        <Route path="/" element={<Home />} />

        {/* Personal Page - With Personal navbar/footer */}
        <Route
          path="/personal"
          element={
            <>
              <NavbarPersonal />
              <Personal />
              <FooterPersonal />
            </>
          }
        />

        {/* Professional Page - With Professional navbar/footer */}
        <Route
          path="/professional"
          element={
            <>
              <NavbarProfessional />
              <Professional />
              <FooterProfessional />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
