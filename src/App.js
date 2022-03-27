import './App.css';
import  Navbar from './components/Navbar';
import  Footer from './components/footer';
import  Home from './components/home';
import  Error from './components/Error';
import  Menu from './components/Menu';
import Slider from './components/Slider';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
          <Route exact path="/" element={<Slider/>} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/footer" element={<Footer/>} />
          <Route element={<Error/>}></Route>
      </Routes>
    </Router>
      
    </>
  );
}

export default App;
