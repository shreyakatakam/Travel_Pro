import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import AddPlaceForm from './components/AddPlaceForm';
import PlacesList from './components/PlacesList';
import Login from './components/Login';
import Register from './components/Register';
import ContactUs from './components/ContactUs';
import Home from './components/Home';

const App = () => {
  const [places, setPlaces] = useState([]);
  const [user, setUser] = useState(null);

  const addPlace = (place) => {
    setPlaces([...places, place]);
  };

  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add-place">Add Place</Link>
            </li>
            <li>
              <Link to="/places">Places List</Link>
            </li>
            <li>
              <Link to="/place-details">Place Details</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            {user ? (
              <li>
                <button onClick={() => setUser(null)}>Logout</button>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/add-place" element={user ? <AddPlaceForm addPlace={addPlace} /> : <Navigate to="/login" />} />
          <Route path="/places" element={user ? <PlacesList places={places} /> : <Navigate to="/login" />} />
          <Route path="/place-details" element={<h1>Place Details Page</h1>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
