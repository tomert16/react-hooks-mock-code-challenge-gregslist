import React from "react";
import Search from "./Search";

function Header({ searchFilter, setSearchFilter }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search setSearchFilter={setSearchFilter} searchFilter={searchFilter}/>
    </header>
  );
}

export default Header;
