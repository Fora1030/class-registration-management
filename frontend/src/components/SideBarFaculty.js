import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from 'react-router-dom';

export default function SidebarFaculty() {
  return (
    <Navbar sticky="top" className="flex-column Sidebar">
      <Nav.Item>
        <Nav.Link as={NavLink} to="/faculty/feed">Feed</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/faculty/createclass">Add classes </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/faculty/existingclasses"> Existing Classes  </Nav.Link>
      </Nav.Item>
    </Navbar>
  );
}