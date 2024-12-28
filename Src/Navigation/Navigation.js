import React, { useEffect, useState } from "react";
import Welcome from "../Screens/Welcome";
import Root from "./Root";
import Auth from "../Screens/Authentication/Auth";

const Navigation = () => {
  const [currentScreen, setCurrentScreen] = useState("WelcomeSplash");

  const navigate = (screen) => {
    setCurrentScreen(screen);
  };
  useEffect(() => {
    setTimeout(() => {
      setCurrentScreen("Auth");
    }, 2000);
  }, []);

  if (currentScreen === "Auth") {
    return <Root navigate={navigate} />;
  } else if (currentScreen === "WelcomeSplash") {
    return <Welcome navigate={navigate} />;
  }
};

export default Navigation;
