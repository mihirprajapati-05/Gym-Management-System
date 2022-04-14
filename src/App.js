import './App.css';
import  Navbar from './components/Navbar';
import  Footer from './components/Footer';
import  Home from './components/Home';
import  Error from './components/Error';
import  Aboutus from './components/Aboutus';
import  Contactus from './components/Contactus';
import  Login from './components/Login';
import  RegistrationUser from './components/RegistrationUser'
import  RegistrationTrainer from './components/RegistrationTrainer'
import ChangePassword from './components/ChangePassword';
import ForgotPassword from './components/ForgotPassword';
import VMemberDetails from './components/VMemberDetails';
import MemberProfile from './components/MemberProfile';
import VTrainerDetails from './components/VTrainerDetails';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";




function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Contactus" element={<Contactus />} />
           <Route exact path="/Login" element={<Login />} />
          <Route path="/RegistrationUser" element={<RegistrationUser />}/>
          <Route exact path="/ChangePassword" element={<ChangePassword />} />
          <Route exact path="/ForgotPassword" element={<ForgotPassword />} />
          <Route exact path="/RegistrationTrainer" element={<RegistrationTrainer />} />
          <Route exact path="/MemberProfile" element={<MemberProfile />} />
          <Route exact path="/VMemberDetails" element={<VMemberDetails />} />
          <Route exact path="/VTrainerDetails" element={<VTrainerDetails />} />
          <Route element={<Error/>}></Route>
      </Routes>
      <Footer/>
    </Router>
      
    </>
  );
}

export default App;
