import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import sampleProperties from './sampleProperties'; // Replace with actual API call in a real app

const PropertyDetailPage = ({ user }) => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    // Replace with an actual API call
    const fetchedProperty = sampleProperties.find((property) => property.id === parseInt(id));
    setProperty(fetchedProperty);
  }, [id]);

  const handleInterested = () => {
    if (!user) {
      alert('Please log in to express interest in this property.');
      return;
    }

    // Implement interested logic here
    // Example: Call API to notify seller and send email to buyer
    alert(`Interest registered for property: ${property.title}`);
  };

  if (!property) return <p>Loading...</p>;

  return (
    <div>
      <h2>{property.title}</h2>
      <p>Location: {property.location}</p>
      <p>Bedrooms: {property.bedrooms}</p>
      <p>Bathrooms: {property.bathrooms}</p>
      <p>Area: {property.area} sq ft</p>
      <p>Likes: {property.likes}</p>
      <button onClick={handleInterested}>I'm Interested</button>
    </div>
  );
};

export default PropertyDetailPage;
