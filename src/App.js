import Navigation from './components/Navigation';
import './App.css';
import Film from './components/Film';
import Footer from './components/Footer';
import { Routes,Route } from "react-router-dom";
import Contact from './components/Contact';
import Detail from './components/Detail';
function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/" element={<Film/>}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
