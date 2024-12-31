import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Testimonials from './Pages/Testimonials/Testimonials';
import Services from './Pages/Services/Services';
import Contact from './Pages/Contact/Contact';
import Home from './Components/Home/Home';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import './App.css';

function App() {
  return (
  <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />}/>
          <Route path="/testimonials" element={<Testimonials />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App
