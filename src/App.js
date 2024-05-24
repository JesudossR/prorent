import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
// import AboutUsPage from "./components/AboutUsPage";
// import ContactUsPage from "./components/ContactUsPage";
import PropertyListPage from "./components/PropertyListPage";
import PropertyDetailPage from "./components/PropertyDetailPage";
import RegisterPage from "./components/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            {/* <Route path="/about" element={<AboutUsPage />} />
            <Route path="/contact" element={<ContactUsPage />} /> */}
            <Route path="/properties" element={<PropertyListPage />} />
            <Route path="/properties/:id" element={<PropertyDetailPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
