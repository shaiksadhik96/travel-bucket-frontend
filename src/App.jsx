// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddPlace from './pages/AddPlace';
import BucketList from './pages/BucketList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100">
        
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddPlace />} />
            <Route path="/list" element={<BucketList />} />
          </Routes>
        </main>
        <footer className="text-center text-sm text-gray-400 py-6 border-t border-gray-800">
          <p className="text-xs tracking-wider font-light">
            © 2025 TRAVEL BUCKET LIST | EXPLORE THE FUTURE
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
