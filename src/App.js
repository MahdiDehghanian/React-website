import React from "react";
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/pages/Home'
import Product from './components/pages/Product'
import Services from './components/pages/Services'
import SignUp from './components/pages/SignUp'


function App() {
  return (
   <>
   <Router>
     <Navbar/>
     <Routes>
       <Route path='/' exact element={<Home/>} />
       <Route path='/services' exact element={<Services/>} />
       <Route path='/product' exact element={<Product/>} />
       <Route path='/sign-up' exact element={<SignUp/>} />
     </Routes>
   </Router>
   </>
   
  );
}

export default App;
