// import './App.css';
import React, { Component } from 'react'
import Header from './Component/Header'
import Main from './Component/Main'
import Footer from './Component/Footer'
import About from './Component/About';
import Contact from './Component/Contact';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Routes>
            
         
            
              <Route exact path="/" element={<Main />}></Route>
              <Route exact path="/profile" element={<About />}></Route>
              <Route exact path="/contact" element={<Contact />}></Route>
            
    

           
          </Routes>
          <Footer />
        </Router>
        {/* <Header />
        <Main />
        <Footer /> */}
      </div>
    )
  }
}


export default App;
