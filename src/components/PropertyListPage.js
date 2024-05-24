// PropertyListPage.js

import React, { useState, useEffect } from 'react';
import sampleProperties from './sampleProperties'; // Replace with actual API call in a real app
import PropertyCard from './PropertyCard';
import Pagination from './Pagination';

const PropertyListPage = ({ user }) => {
  const [properties, setProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [propertiesPerPage] = useState(5);

  useEffect(() => {
    // Replace with an actual API call
    setProperties(sampleProperties);
  }, []);

  const handleLike = (id) => {
    setProperties(properties.map((property) => 
      property.id === id ? { ...property, likes: property.likes + 1 } : property
    ));
  };

  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = properties.slice(indexOfFirstProperty, indexOfLastProperty);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h2>Property List</h2>
      <div className="property-list">
        {currentProperties.map((property) => (
          <PropertyCard key={property.id} property={property} onLike={handleLike} />
        ))}
      </div>
      <Pagination
        propertiesPerPage={propertiesPerPage}
        totalProperties={properties.length}
        paginate={paginate}
      />
    </div>
  );
};

export default PropertyListPage;
