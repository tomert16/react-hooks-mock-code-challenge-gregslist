import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");

  const fetchListings= async () => {
    const req= await fetch("http://localhost:6001/listings")
    const resp = await req.json();
    setListings(resp);
  }
  useEffect(() => {
    fetchListings();
  },[])
  return (
    <div className="app">
      <Header searchFilter={searchFilter} setSearchFilter={setSearchFilter}/>
      <ListingsContainer 
        listings={listings} 
        setListings={setListings} 
        searchFilter={searchFilter}
      />
    </div>
  );
}

export default App;
