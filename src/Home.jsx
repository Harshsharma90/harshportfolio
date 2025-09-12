import React from 'react'
import { useEffect } from "react";
import Herosection from './components/Herosection'
import { useGlobalContext } from "./context";
import Services from './Services';
import Contact from './Contact';
const Home = () => {
   const { updateHomePage } = useGlobalContext();

  useEffect(() => updateHomePage(), []);

  return (
    <>
     <Herosection />
     <Services />
     <Contact />
    </>
   
  )
}

export default Home
