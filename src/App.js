import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import React from 'react';

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
import MemberDashboard from './components/MemberDashboard';
import MemberProfile from './components/MemberProfile';
import MemberSchedule from './components/MemberSchedule';
import Membership from './components/Membership';
import VTrainerDetails from './components/VTrainerDetails';
import AdminDashboard from './components/AdminDashboard';

import TrainerDashboard from './components/TrainerDashboard';
import TrainerProfile from './components/TrainerProfile';
import AddEquipment from './components/AddEquipment';
import OTP from './components/OTP';
import NewPassword from './components/NewPassword';
import UpdateMember from './components/UpdateMember';



function App() {
  return (
    <>

      <Router>
        <React.Fragment>
          {
            window.location.pathname === "/memberdashboard" ||
            window.location.pathname ===  "/memberdashboard/mprofile" ||
            window.location.pathname === "/admindashboard" ||
            window.location.pathname === "/admindashboard/vmd" ||
            window.location.pathname === "/admindashboard/vtd" ||
            window.location.pathname === "/admindashboard/regt" ||
            window.location.pathname === "/trainerdashboard" ||
            window.location.pathname === "/trainerdashboard/tprofile" ? null :(

              <Navbar
                home='Home'
                signup='Sign Up'
                signin='Sign In'
                aboutus='About Us'
                contactus='Contact Us'
              />
            )}
        </React.Fragment>
              
        <div className='App'>
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/aboutus" element={<Aboutus />} />
                <Route path="/contactus" element={<Contactus />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registrationuser" element={<RegistrationUser />}/>
                <Route exact path="/ChangePassword" element={<ChangePassword />} />
                <Route exact path="/ForgotPassword" element={<ForgotPassword />} />
                <Route exact path="/otp" element={<OTP />} />
                <Route exact path="/newpassword" element={<NewPassword />} />

                {/* Member Dashboard Routes.. */}
                <Route path="/memberdashboard" element={<MemberDashboard />} />
                <Route path="/memberdashboard/mprofile" element={<MemberProfile />} />
                <Route path="/memberdashboard/mupdate" element={<UpdateMember />} />                
                <Route path="/memberdashboard/mschedule" element={<MemberSchedule />} />
                <Route path="/memberdashboard/membership" element={<Membership />} />

                {/* Admin Dashboard Routes.. */}
                <Route path="/admindashboard" element={<AdminDashboard />} />
                <Route path="/admindashboard/vmd" element={<VMemberDetails />} />
                <Route path="/admindashboard/vtd" element={<VTrainerDetails />} />
                <Route exact path="/admindashboard/regt" element={<RegistrationTrainer />} />
                <Route path="/admindashboard/adeq" element={<AddEquipment />} />

                {/* Trainer Dashboard Routes.. */}
                <Route path="/trainerdashboard" element={<TrainerDashboard />} />
                <Route path="/trainerdashboard/membership" element={<Membership />} />

                <Route path="/trainerdashboard/tprofile" element={<TrainerProfile />} />

                <Route path="/" element={<Home />} />
              </Routes>
              <Footer/>
        </div>
      </Router>      

    {/* <Router>
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
    </Router> */}
      
    </>
  );
}

export default App;
