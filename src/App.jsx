import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './Pages/Services/Services';
import Contact from './Pages/Contact/Contact';
import Home from './Components/Home/Home';
import About from './Pages/About/About';
import './App.css';
import Blog from './Pages/Blog/Blog';


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
        </Routes>
      </Router>
    </>
  );
}

export default App
