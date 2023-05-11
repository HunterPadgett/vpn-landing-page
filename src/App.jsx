// import React from "react";
import Hero from "./components/hero/Hero";
import Nav from "./components/nav/Nav";
import Main from "./components/main/Main";
import Reviews from "./components/reviews/Reviews";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Main />
      <Reviews />
      <Contact />
      <Footer />
    </>
  );
}
