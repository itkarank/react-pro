import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaBook } from "react-icons/fa";
import { useState } from 'react';
import {Link} from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";

function Navigationbar(){
    const [showDropdown, setShowDropdown] = useState(false);

    const handleMouseEnter = () => {
      setShowDropdown(true);
    };
  
    const handleMouseLeave = () => {
      setShowDropdown(false);
    };
    return(
        <div>
<Navbar expand="lg" className="menu bg-tertiary sticky-top shadow">
      <Link to='#epwkde' className='navbar-brand'><FaBook className='book-logo'/> eLEARNING</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navs me-auto" style={{ position: 'relative' }}>

          <Link to='/' id='nlink' ClassName='active'>HOME</Link>
         <Link to='/About' id='nlink' >ABOUT</Link>
          <Link to='/Courses' id='nlink' >COURSES</Link>

    <NavDropdown title="PAGES" id="basic-nav-dropdown" className='dropdown ' 
     onMouseEnter={handleMouseEnter}onMouseLeave={handleMouseLeave} show={showDropdown}>
     <div className='drop-m' style={{ position: 'absolute', top: '-1px', left: 0, zIndex: 1000, width:"100%",transition:'.5s'  }}>
      <NavDropdown.Item ><Link to='/Ourteam' id='nlink' >Our Team</Link></NavDropdown.Item>
      <NavDropdown.Item ><Link to='/Testimoniall' id='nlink' >Testimonial</Link></NavDropdown.Item>
      <NavDropdown.Item ><Link to='/Notfound' id='nlink' >404 Page</Link></NavDropdown.Item></div>
   </NavDropdown>
   <Link to='/Contact' id='nlink' >CONTACT</Link>
   <Link>< FaCartPlus className='cart-ico' style={{color:'#06BBCC', fontSize:'25px', marginTop:'7px'}}/></Link>


          </Nav>
        </Navbar.Collapse>
        <Link to='/Contact' className='join d-lg-block d-none py-4 px-lg-5'><h6 className='joinNow1'>Join Now <FaArrowRight /></h6> </Link>

    </Navbar>
        </div>
    )
}
export default Navigationbar;