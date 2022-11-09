import logo from './logo.svg';
import './App.css';
import Contact from './components/contact/Contact';
import Experience from './components/experience/eperience';
import Testimonial from './components/testimonials/Testimonial';
import Footer from './components/footer/Footer';
import About from './components/About/About';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Services from './components/Services/Services';
import Portfolio from './components/portfolio/Portfolio';

function App() {
  return (
    <div className="container">
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio/>
      <Contact />
      <Testimonial />
      <Footer />
          </div>
  );
}

export default App;
