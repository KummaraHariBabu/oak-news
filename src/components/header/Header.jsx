import React, { useState } from "react";
import "./Header.scss";
import Navbar from "../navbar/Navbar";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const [search, setSearch] = useState("");

  //navigate
  const navigate = useNavigate();
  //function for submit
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/search", { state: search });
    setSearch("");
  };
  return (
    <div className="header-container">
      <div className="header-top">
        <h1>OAK News</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="search"
            type="text"
            value={search}
            placeholder="search your news"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button>Search</button>
        </form>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
