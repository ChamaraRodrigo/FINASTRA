import React from "react";
import Header from "./components/Header";
import EventOverview from "./components/EventOverview";
import ConferenceBanner from "./components/ConferenceBanner";
import Speakers from "./components/Speakers";
import Agenda from "./components/Agenda";
import About from "./components/About";
import RegisterForm from "./components/RegisterForm";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <EventOverview />
      <ConferenceBanner />
      <Speakers />
      <Agenda />
      <About />
      <RegisterForm />
      <Footer />
    </>
  );
};

export default App;
