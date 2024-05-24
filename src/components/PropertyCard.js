// PropertyCard.js

import React from 'react';

const PropertyCard = ({ property, onLike }) => {
  return (
    <div className="property-card">
      <h3>{property.title}</h3>
      <p>Location: {property.location}</p>
      <p>Bedrooms: {property.bedrooms}</p>
      <p>Bathrooms: {property.bathrooms}</p>
      <p>Area: {property.area} sq ft</p>
      <p>Likes: {property.likes}</p>
      <button onClick={() => onLike(property.id)}>Like</button>
    </div>
  );
};

export default PropertyCard;
