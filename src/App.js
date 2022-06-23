import './App.css';
import Herosection from './Herosection';
import Features from './Features';
import About from './About';
import Whychooseus from './Whychooseus';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
   <Herosection/>
   <Features/>
   <About />
   <Whychooseus />
   <Footer/>
    </div>
  );
}

export default App;
