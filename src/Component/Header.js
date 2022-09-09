import React, { Component } from 'react'

import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";




class Header extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
            
        <Navbar.Brand style={{padding:'10px 20px'}}>News</Navbar.Brand>
        <div style={{display:'flex',flexDirection:'space-between', gap:'15px'}}>
        
        <NavItem style={{color:'white'}}><Link to="/" className="nav-link" style={{color:'blue'}}>Home</Link></NavItem>
       <NavItem style={{color:'white'}}><Link to="/profile" className="nav-link" style={{color:'blue'}}>About us</Link></NavItem>
       <NavItem style={{color:'white'}}><Link to="/contact" className="nav-link" style={{color:'blue'}}>Contact</Link></NavItem>
       
        
        
        </div>
      </Navbar>
      </div>
    )
  }
}

export default Header