import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer( { listings, setListings, searchFilter }) {
  const deleteListing = async (id) => {
    await fetch(`http://localhost:6001/listings/${id}`,{
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    setListings(listings.filter((listing) => {
      return listing.id !== id;
    }))
  }
   const searchListings = listings.filter((listing) => {
     return listing.description.toLowerCase().includes(searchFilter.toLowerCase())
   })
    return (
    <main>
      <ul className="cards">
        {searchListings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} deleteListing={deleteListing}/>
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
