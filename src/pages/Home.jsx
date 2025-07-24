// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home() {
  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f8fafc' }}>
      
      {/* Navbar */}
      <nav style={{
        backgroundColor: '#1e3a8a',
        padding: '16px 32px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#fff',
      }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Travel Bucket</h1>
        <div style={{ display: 'flex', gap: '20px' }}>
          <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
          <Link to="/add" style={{ color: '#fff', textDecoration: 'none' }}>Add Place</Link>
          <Link to="/list" style={{ color: '#fff', textDecoration: 'none' }}>View Places</Link>
        </div>
      </nav>

      {/* Hero Section with Blur Background */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          position: 'relative',
          minHeight: '80vh',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Background Image (Blurred) */}
        <div style={{
          backgroundImage: "url('https://cdn.pixabay.com/photo/2016/02/18/18/52/buildings-1207824_1280.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(8px)',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }} />

        {/* Foreground Content */}
        <div style={{
          position: 'relative',
          zIndex: 1,
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          padding: '40px',
          borderRadius: '16px',
          maxWidth: '600px',
          textAlign: 'center',
          boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
        }}>
          <h2 style={{ fontSize: '2.5rem', color: '#1e3a8a', marginBottom: '16px' }}>
            Explore The World With Us
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#334155', marginBottom: '24px' }}>
            Discover new places, track your travels, and collect memories forever.
          </p>
          <Link to="/add">
            <button style={{
              backgroundColor: '#f97316',
              color: '#fff',
              padding: '12px 24px',
              border: 'none',
              borderRadius: '9999px',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '1rem',
            }}>
              Start Your Journey
            </button>
          </Link>
        </div>
      </motion.section>

      {/* Travel Gallery Section */}
      <section style={{ padding: '50px 20px', backgroundColor: '#f1f5f9', textAlign: 'center' }}>
        <h3 style={{ fontSize: '2rem', color: '#1e3a8a', marginBottom: '20px' }}>Featured Travel Inspiration</h3>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <img
            src="https://cdn.pixabay.com/photo/2018/06/27/17/48/fantasy-3502188_1280.jpg"
            alt="Travel 1"
            style={{ borderRadius: '12px', width: '100%', maxWidth: '480px', height: 'auto' }}
          />
          <img
            src="https://cdn.pixabay.com/photo/2017/09/27/18/47/scooter-2792992_1280.jpg"
            alt="Travel 2"
            style={{ borderRadius: '12px', width: '100%', maxWidth: '480px', height: 'auto' }}
          />
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: '60px 20px', textAlign: 'center', backgroundColor: '#fff' }}>
        <h3 style={{ fontSize: '2rem', color: '#1e3a8a', marginBottom: '40px' }}>Why Use Travel Bucket?</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px' }}>
          {[
            { title: "Plan Easily", desc: "Keep track of all your dream destinations in one place." },
            { title: "Mark Visited", desc: "Track which places you've already explored." },
            { title: "Save Memories", desc: "Store notes and images of every place you’ve been." }
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              style={{
                width: '280px',
                backgroundColor: '#fef3c7',
                padding: '24px',
                borderRadius: '16px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
            >
              <h4 style={{ fontSize: '1.25rem', color: '#b45309' }}>{item.title}</h4>
              <p style={{ color: '#78350f', marginTop: '12px' }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section style={{ padding: '60px 20px', backgroundColor: '#dbeafe', textAlign: 'center' }}>
        <h3 style={{ fontSize: '2rem', color: '#1e3a8a', marginBottom: '16px' }}>About Travel Bucket</h3>
        <p style={{ maxWidth: '800px', margin: '0 auto', color: '#334155', fontSize: '1.1rem' }}>
          Travel Bucket is your digital companion to record, manage, and relive your travel memories. Whether it's a beach you've longed to visit, a mountain you conquered, or a spontaneous trip – document it all in one place.
        </p>
      </section>

      {/* How It Works Section */}
      <section style={{ padding: '60px 20px', backgroundColor: '#f0fdf4', textAlign: 'center' }}>
        <h3 style={{ fontSize: '2rem', color: '#047857', marginBottom: '16px' }}>How It Works</h3>
        <ol style={{ listStyle: 'decimal', textAlign: 'left', maxWidth: '600px', margin: '0 auto', color: '#064e3b' }}>
          <li style={{ marginBottom: '10px' }}><strong>Add Place:</strong> Enter a place you want to visit with image and notes.</li>
          <li style={{ marginBottom: '10px' }}><strong>Track Progress:</strong> Mark it visited once you explore the destination.</li>
          <li><strong>Save Forever:</strong> Revisit your travels through notes and images stored safely.</li>
        </ol>
      </section>

      {/* Footer */}
      <footer style={{ padding: '20px', backgroundColor: '#1e3a8a', color: '#fff', textAlign: 'center' }}>
        © 2025 Travel Bucket. All rights reserved.
      </footer>
    </div>
  );
}

export default Home;
