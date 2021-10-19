import React from "react";
import Contact from "../../Contact/Contact";
import LoginRegister from "../../LoginRegister/LoginRegister";
import Doctors from "../Doctors/Doctors";
import Hero from "../Hero/Hero";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Services></Services>
      <Doctors></Doctors>
      <Contact></Contact>
    </div>
  );
};

export default Home;
