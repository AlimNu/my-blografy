import './App.css';
import Header from './pages/Header';
import Contact from './pages/Contact';
import About from './pages/About';
import Footer from './pages/Footer';
import Portofolio from './pages/Portofolio';
import Resume from './pages/Resume';

function App() {
  return (
    <div className="App">
        <Header />
        <About />
        <Resume />
        <Portofolio />
        <Footer />
    </div>
  );
}

export default App;
