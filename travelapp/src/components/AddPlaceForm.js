import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddPlaceForm = ({ addPlace }) => {
  const [formData, setFormData] = useState({
    placeName: '',
    topPlaces: ['', '', '', '', ''],
    links: ['', '', '', '', '']
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const [key, index] = name.split('-');
    if (key === 'topPlace' || key === 'link') {
      const updatedArray = [...formData[key === 'topPlace' ? 'topPlaces' : 'links']];
      updatedArray[Number(index)] = value;
      setFormData({
        ...formData,
        [key === 'topPlace' ? 'topPlaces' : 'links']: updatedArray
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPlace(formData);
    navigate('/places');
  };

  return (
    <div className="form-container">
      <h1>Add a New Place</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="placeName">Place Name:</label>
          <input
            type="text"
            id="placeName"
            name="placeName"
            placeholder="Enter Place Name"
            value={formData.placeName}
            onChange={handleChange}
            required
          />
        </div>
        {formData.topPlaces.map((place, index) => (
          <div key={index}>
            <label htmlFor={`topPlace-${index}`}>Top Place {index + 1}:</label>
            <input
              type="text"
              id={`topPlace-${index}`}
              name={`topPlace-${index}`}
              placeholder={`Enter Top Place ${index + 1}`}
              value={place}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        {formData.links.map((link, index) => (
          <div key={index}>
            <label htmlFor={`link-${index}`}>Link {index + 1}:</label>
            <input
              type="url"
              id={`link-${index}`}
              name={`link-${index}`}
              placeholder={`Enter Link ${index + 1}`}
              value={link}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <button type="submit">Add Place</button>
      </form>
    </div>
  );
};

export default AddPlaceForm;
