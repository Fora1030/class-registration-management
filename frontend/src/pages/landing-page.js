import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Carousel from "react-bootstrap/Carousel";
import { NavLink } from 'react-router-dom';
import Body from "../components/Body";
import Container from "react-bootstrap/esm/Container";
import img from "./img/img.jpg";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import Stack from "react-bootstrap/esm/Stack";

function LandingPage() {
  return (
    <Container>
      <Stack direction="horizontal"> 

      <Navbar sticky="top" className="flex-column Sidebar">
        <Nav.Item>
          <Nav.Link href="/login/options">Login</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/register">Register</Nav.Link>
        </Nav.Item>
      </Navbar>      
    <Container>
    <div>
      <Carousel className="Carousel">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img}
      alt="First slide"
    />
    <Carousel.Caption>
      <h2 >Welcome to Course Registration Tool</h2>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      alt="Second slide"
      />

    <Carousel.Caption>
      <h3>Enroll in Classes Today</h3>
      <p>Login or register as a student to enroll in classes</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Third slide"
      />

    <Carousel.Caption>
      <h3>Add New Classes</h3>
      <p>Login or register as a student to enroll in classes</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </div>

      </Container>
      </Stack>
    </Container>
   
  );
}

export default LandingPage;