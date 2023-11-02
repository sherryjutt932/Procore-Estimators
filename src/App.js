import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import DataSec from './components/DataSec/DataSec.jsx';
import Benefits from './components/Benefits/Benefits.jsx';
import GetStarted from './components/GetStarted/GetStarted.jsx';
import Traders from './components/Traders/Traders.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <DataSec/>
      <Benefits/>
      <GetStarted/>
      <Traders/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
