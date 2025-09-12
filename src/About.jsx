import React, { useEffect } from "react";
import Herosection from "./components/Herosection";
import { useGlobalContext } from "./context";

const About = () => {
  const { udpateAboutPage } = useGlobalContext();

  useEffect(() => udpateAboutPage(), []);

  return <Herosection />;
};

export default About;