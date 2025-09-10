import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Values from './components/Values';
import Solutions from './components/Solutions';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';

function App() {
  return (
    <div className="app relative">
      <Navbar />
      <Hero />
      <Values />
      <Solutions />
      <Clients />
      <Footer />
      <FloatingContact />
    </div>
  );
}

export default App;
