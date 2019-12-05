import React from "react";
import "./26.1 search-box.styles.css.css";
export const SearchBox = ({ placeholder, handelChange }) => (
  <input
    type="search"
    className="search"
    placeholder={placeholder}
    onChange={handelChange}
  />
);
