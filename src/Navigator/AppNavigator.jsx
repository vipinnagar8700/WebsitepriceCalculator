// AppNavigator.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomeScreen from '../Components/Screens';
import ServicesFormList from '../Components/Screens/ServicesForm';
import Proposal from '../Components/Proposal/Index';


export default function AppNavigator() {
  return (
    <Router>
        <Routes>
        <Route path="/" element={<HomeScreen/>} /> 
          {/* <Route path="/" element={<Proposal/>} /> */}
          <Route path="/Services-form/:p_id/:activeTab" element={<ServicesFormList/>} />
        </Routes>
    </Router>
  );
}
