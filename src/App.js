import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import IntroSection from "./components/IntroSection";
import AboutSection from "./components/AboutSection";
import PhoneContact from "./components/PhoneContact";
import GallerySection from "./components/GallerySection";
import ContactsSection from "./components/ContactsSection";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <IntroSection />
      <AboutSection />
      <PhoneContact />
      <GallerySection />
      <ContactsSection />
    </React.Fragment>
  );
}

export default App;
