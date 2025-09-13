import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

// Your JSON data inside the file
const servicesData = [
  {
    id: 1,
    title: "Web Development",
    description: "Building responsive and modern websites using HTML, CSS, and JavaScript.",
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
  },
  {
    id: 2,
    title: "Software Development",
    description: "Creating robust software applications tailored to client requirements.",
    image: "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg",
  },
  {
    id: 3,
    title: "Mobile App Development",
    description: "Designing and developing mobile applications for Android and iOS platforms.",
    image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg",
  },
  {
    id: 4,
    title: "UI/UX Design",
    description: "Crafting intuitive and engaging user interfaces and experiences.",
    image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
  },
  {
    id: 5,
    title: "Cloud Computing",
    description: "Implementing scalable and secure cloud solutions for businesses.",
    image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
  },
  {
    id: 6,
    title: "Data Science",
    description: "Analyzing data to extract insights and support data-driven decisions.",
    image: "https://images.pexels.com/photos/590011/pexels-photo-590011.jpeg",
  },
];

const initialState = {
  name: "",
  image: "",
  services: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateHomePage = () => {
    dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "Harsh Sharma",
        image: "/images/hero.svg",
      },
    });
  };

  const udpateAboutPage = () => {
    dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "Harsh Developer",
        image: "/images/about1.svg",
      },
    });
  };

  // No async fetch; directly dispatch the local JSON data
  const getServices = () => {
    dispatch({ type: "GET_SERVICES", payload: servicesData });
  };

  useEffect(() => {
    getServices();
  }, []);

  return (
    <AppContext.Provider value={{ ...state, updateHomePage, udpateAboutPage }}>
      {children}
    </AppContext.Provider>
  );
};

// global custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
