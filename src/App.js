import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Analytics from './components/analytics';
import Newsletter from './components/newsletter';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Hero/>
    <Analytics/>
    <Newsletter/>
    </div>
  );
}

export default App;
