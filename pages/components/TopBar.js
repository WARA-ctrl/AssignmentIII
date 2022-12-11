import React, { useContext } from "react";
// import { BiSearchAlt } from "react-icons/bi";
// import { useState, useEffect } from "react";
import { AppContext } from "..";

const TopBar = () => {
  // const [word, setWord] = useState("");
  // console.log(word);
  const { word, setWord } = useContext(AppContext);

  return (
    <div className="nav">
      <h1>Website Name</h1>
      <div className="nav-search">
        <h3>Search</h3>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setWord(e.target.value)}
          value={word}
        />
      </div>
    </div>
  );
};

export default TopBar;
