import React from "react";
import Search from "./Search";

const Header = ({ title, onSearch }) => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#e95327" }}
    >
      <div className="container">
        <a className="navbar-brand fw-bold text-white fs-3" href="">{title}</a>
        <div className="ms-auto">
          <Search onSearch={onSearch} />
        </div>
      </div>
    </nav>
  );
};

export default Header;
