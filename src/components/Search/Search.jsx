import React from "react";
import "./Search.css";

const Search = ({ handleChange, placeholder }) => {
  return (
    <div>
      <input type="search" placeholder={placeholder} onChange={handleChange} />
    </div>
  );
};

export default Search;
