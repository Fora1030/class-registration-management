import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from 'react-router-dom';

function LandingPage(){
    return (
      
        <Navbar sticky="top" className="flex-column Sidebar">
        <Nav.Item>
          <Nav.Link href="/login/options">Login</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/register">Register</Nav.Link>
        </Nav.Item>
      </Navbar>
    );
}

export default LandingPage;