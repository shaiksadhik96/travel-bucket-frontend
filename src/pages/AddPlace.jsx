import { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function AddPlace() {
  const [place, setPlace] = useState({ name: '', notes: '', image: '', visited: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPlace({ ...place, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await axios.post('http://localhost:5000/api/places', place);
      setPlace({ name: '', notes: '', image: '', visited: false });
      alert('Place added successfully!');
    } catch (error) {
      alert('Error adding place. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      style={{
        maxWidth: '600px',
        margin: '40px auto',
        backgroundColor: '#ffffff',
        padding: '32px',
        borderRadius: '20px',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
        fontFamily: 'sans-serif',
      }}
    >
      <h2 style={{
        fontSize: '2rem',
        fontWeight: 'bold',
        color: '#1e3a8a',
        textAlign: 'center',
        marginBottom: '24px'
      }}>
        Add a New Destination
      </h2>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <input
          type="text"
          name="name"
          placeholder="Place Name"
          value={place.name}
          onChange={handleChange}
          required
          style={{ padding: '12px', borderRadius: '10px', border: '1px solid #cbd5e1' }}
        />

        <textarea
          name="notes"
          placeholder="Notes"
          value={place.notes}
          onChange={handleChange}
          rows={4}
          style={{ padding: '12px', borderRadius: '10px', border: '1px solid #cbd5e1' }}
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL (optional)"
          value={place.image}
          onChange={handleChange}
          style={{ padding: '12px', borderRadius: '10px', border: '1px solid #cbd5e1' }}
        />

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="checkbox"
            name="visited"
            checked={place.visited}
            onChange={handleChange}
            style={{ width: '18px', height: '18px', marginRight: '10px' }}
          />
          <label style={{ color: '#475569', fontSize: '1rem' }}>I've already visited this place</label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            padding: '14px 0',
            backgroundColor: isSubmitting ? '#93c5fd' : '#3b82f6',
            color: '#fff',
            borderRadius: '9999px',
            fontWeight: '600',
            border: 'none',
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease'
          }}
          onMouseOver={(e) => {
            if (!isSubmitting) e.target.style.backgroundColor = '#2563eb';
          }}
          onMouseOut={(e) => {
            if (!isSubmitting) e.target.style.backgroundColor = '#3b82f6';
          }}
        >
          {isSubmitting ? 'Saving...' : 'Save Destination'}
        </button>

        {/* Additional Buttons */}
        <button
          type="button"
          onClick={() => navigate('/list')}
          style={{
            padding: '12px 0',
            backgroundColor: '#e0f2fe',
            color: '#1e3a8a',
            borderRadius: '9999px',
            border: '1px solid #93c5fd',
            fontWeight: '500',
            fontSize: '1rem',
            cursor: 'pointer'
          }}
        >
          Show Saved Bucket List
        </button>

        <button
          type="button"
          onClick={() => navigate('/')}
          style={{
            padding: '12px 0',
            backgroundColor: '#f0f9ff',
            color: '#0369a1',
            borderRadius: '9999px',
            border: '1px solid #bae6fd',
            fontWeight: '500',
            fontSize: '1rem',
            cursor: 'pointer'
          }}
        >
          Go to Home Page
        </button>
      </form>
    </motion.div>
  );
}

export default AddPlace;
