import Body from "./components/Body";
import Footer from "./components/Footer";
import TopBar from "./components/TopBar";
import React, { useState, createContext } from "react";

export const AppContext = createContext(null);

export default function Home() {
  const [word, setWord] = useState("");

  return (
    <AppContext.Provider value={{ word, setWord }}>
      <div>
        <TopBar />
        <Body />
        <Footer />
      </div>
    </AppContext.Provider>
  );
}
