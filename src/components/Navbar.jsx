// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import React from 'react';
function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-white text-lg font-bold">Travel Bucket List</Link>
        <div>
          <Link to="/" className="text-gray-300 hover:text-white mx-2">Home</Link>
          <Link to="/add" className="text-gray-300 hover:text-white mx-2">Add Place</Link>
          <Link to="/list" className="text-gray-300 hover:text-white mx-2">Bucket List</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
