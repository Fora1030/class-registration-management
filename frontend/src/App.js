import React from 'react';
import Container from 'react-bootstrap/Container';
import { Routes, Route, Navigate, NavLink } from 'react-router-dom';
import ClassSearch from './pages/class-search';
import ClassesDetails from './pages/classesDetail';
import CreateClass from './pages/create-class';
import FacultyFeed from './pages/faculty-feed';
import FacultyRegistration from './pages/faculty-registration';
import Register from './pages/register';
import LandingPage from './pages/landing-page';
import Login from './pages/login';
import FacultyLogin from './pages/login-faculty';
import Schudle from './pages/schudle';
import StudentFeed from './pages/student-feed';
import StudentRegistration from './pages/student-registration';
import UpdateClass from './pages/update-class';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ApiServices from './services/api-services';
import LoginOptions from './pages/login-options';


function App() {
  const[user, setUser] = React.useState(null);
  const[token, setToken] = React.useState(null);
  const[error, setError] = React.useState("");

  async function login(user=null){
    ApiServices.login(user)
    .then(response => {
      setToken(response.data.token);
      setUser(user.username);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', response.username);
      setError('');
    })
    .catch(e => {
      console.log('login',e);
      setError(e.toString());
    });
  }

  async function logout(user=null){
    ApiServices.logout(token);
    setToken('');
    setUser('');
    localStorage.setItem('token','');
    localStorage.setItem('user','');
  }

  async function studentSignup(user=null){
    ApiServices.studentSignup(user)
    .then(response => {
      setToken(response.data.token);
      setUser(user.username);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', response.data.username);
      setError('');
    })
    .catch(e => {
      console.log(e);
      setError(e.toString());
    });
  }

  async function facultySignup(user=null){
    ApiServices.facultySignup(user)
    .then(response => {
      setToken(response.data.token);
      setUser(user.username);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', response.data.username);
      setError('');
    })
    .catch(e => {
      console.log(e);
      setError(e.toString());
    });
  }
  
  return (
    <div className="App">
      <Container fluid className="App">
      <Navbar bg="light" sticky="top" className="Header">
    <Container>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/feed">
          <h1> Course Registration</h1>
        </Nav.Link>
      </Nav.Item>

      <Navbar>
        {user ? (

          <Nav.Item>
            <Nav.Link as={NavLink} to="/login" onClick={logout}>
              Logout
            </Nav.Link>
          </Nav.Item>
        ) : (
          <>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/login/options">
                Login
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/register">
                Register
              </Nav.Link>
            </Nav.Item>
          </>
        )}
      </Navbar>
    </Container>
  </Navbar>
          <Routes>
            <Route path = "/" element ={<LandingPage/>} />
            <Route path = "/register" element ={<Register/>} />
            <Route path = "/student/class/search" element ={<ClassSearch token={token}/>} />
            <Route path = "/class/details" element ={<ClassesDetails token={token}/>} />
            <Route path = "/faculty/feed" element ={<FacultyFeed token={token}/>} />
            <Route path = "/faculty/registration" element ={<FacultyRegistration facultySignup={facultySignup}/>} />
            <Route path = "/landing" element ={<LandingPage/>} />
            <Route path = "/student/login" element ={<Login login={login}/>} />
            <Route path = "/faculty/login" element ={<FacultyLogin login={login}/>} />
            <Route path = "/login/options" element ={<LoginOptions/>} />
            <Route path = "/student/schudle" element ={<Schudle token={token}/>} />
            <Route path = "/student/feed" element ={<StudentFeed token={token}/>} />
            <Route path = "/student/registration" element ={<StudentRegistration studentSignup ={studentSignup}/>} />
            <Route path = "/faculty/classupdate" element ={<UpdateClass token={token}/>} />
            <Route path = "/faculty/createclass" element ={<CreateClass token={token}/>} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
      </Container>
    </div>
  );
}

export default App;
