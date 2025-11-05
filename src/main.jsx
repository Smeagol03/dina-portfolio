import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Hero from "./Hero.jsx";
import About from "./About.jsx";
import Degree from "./Degree.jsx";
import Exp from "./Exp.jsx"; // Impor komponen Exp
import Skills from "./Skills.jsx";
import Contact from "./Contact.jsx";
import Footer from "./footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Hero />
    <About />
    <Degree />
    <Exp />
    <Skills />
    <Contact />
    <Footer />
  </StrictMode>
);
