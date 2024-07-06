import React from 'react';

const PlacesList = ({ places }) => {
  return (
    <div className="places-list">
      <h1>List of Places</h1>
      {places.length === 0 ? (
        <p>No places added yet.</p>
      ) : (
        places.map((place, index) => (
          <div key={index} className="place">
            <h2>{place.placeName}</h2>
            <h3>Top 5 Visiting Places:</h3>
            <ul>
              {place.topPlaces.map((topPlace, idx) => (
                <li key={idx}>{topPlace}</li>
              ))}
            </ul>
            <h3>Links:</h3>
            <ul>
              {place.links.map((link, idx) => (
                <li key={idx}>
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default PlacesList;
