import React, { useState } from "react";

function ListingCard( { listing, deleteListing }) {
  const {image, description, location, id} = listing;
  const [favorite, setFavorite] = useState(false);

  const handleFavoriteToggle = () => {
    setFavorite(!favorite);
  }
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button className="emoji-button favorite active" onClick={handleFavoriteToggle}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFavoriteToggle}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={() => deleteListing(id)}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
