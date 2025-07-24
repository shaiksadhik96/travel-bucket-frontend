// src/pages/PlaceList.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';

function PlaceList() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchPlaces = async () => {
      const response = await axios.get('https://travel-bucket-backend-1.onrender.com/api/places');
      setPlaces(response.data);
    };
    fetchPlaces();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`https://travel-bucket-backend-1.onrender.com/api/places/${id}`);
    setPlaces(places.filter(place => place._id !== id));
  };

  const toggleVisited = async (id, visited) => {
    await axios.put(`https://travel-bucket-backend-1.onrender.com/api/places/${id}`, { visited: !visited });
    setPlaces(places.map(p => (p._id === id ? { ...p, visited: !visited } : p)));
  };

  return (
    <motion.div 
      className="max-w-6xl mx-auto px-4 py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-700 font-sans">Your Travel Bucket List</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {places.map(place => (
          <div key={place._id} className="bg-white border rounded-xl shadow-md p-4 flex flex-col">
            {place.image && (
              <img 
                src={place.image} 
                alt={place.name} 
                className="h-48 w-full object-cover rounded-md mb-4"
              />
            )}
            <h3 className="text-xl font-semibold text-blue-800 mb-2">{place.name}</h3>
            <p className="text-gray-700 text-sm mb-3">{place.notes}</p>
            <div className="flex items-center justify-between mt-auto">
              <button 
                onClick={() => toggleVisited(place._id, place.visited)}
                className={`px-4 py-2 text-sm rounded-lg font-medium transition-all duration-300 ${place.visited ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800 hover:bg-blue-100 hover:text-blue-800'}`}
              >
                {place.visited ? 'Visited' : 'Mark Visited'}
              </button>
              <button 
                onClick={() => handleDelete(place._id)}
                className="ml-2 px-3 py-2 text-sm text-white bg-red-500 hover:bg-red-600 rounded-lg"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default PlaceList;
