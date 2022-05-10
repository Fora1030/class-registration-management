import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import { Routes, Route, Navigate, NavLink } from "react-router-dom";
import ClassSearch from "./pages/class-search";
import ClassesDetails from "./pages/classesDetail";
import CreateClass from "./pages/create-class";
import FacultyFeed from "./pages/faculty-feed";
import FacultyRegistration from "./pages/faculty-registration";
import Register from "./pages/register";
import LandingPage from "./pages/landing-page";
import Login from "./pages/login";
import FacultyLogin from "./pages/login-faculty";
import Schudle from "./pages/schudle";
import StudentFeed from "./pages/student-feed";
import StudentRegistration from "./pages/student-registration";
import UpdateClass from "./pages/update-class";
import ExistingClasses from "./pages/existing-classes";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ApiServices from "./services/api-services";
import LoginOptions from "./pages/login-options";

function App() {
  const [user, setUser] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState([]);
  const [token, setToken] = React.useState(null);
  const [error, setError] = React.useState("");
  useEffect(() => {
    getCurrentUser(token);
    console.log("getting current User", currentUser);
  }, [token]);

  async function getCurrentUser(t) {
    ApiServices.getUser(t).then((response) => {
      setCurrentUser(response.data);
      localStorage.setItem("currentUser", response.data);
    });
  }

  async function login(user = null) {
    ApiServices.login(user)
      .then((response) => {
        setToken(response.data.token);
        setUser(user.username);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", response.username);
        setError("");
        getCurrentUser(response.data.token);
      })
      .catch((e) => {
        console.log("login", e);
        setError(e.toString());
      });
  }

  async function logout(user = null) {
    ApiServices.logout(token);
    setToken("");
    setUser("");
    setCurrentUser("");

    localStorage.setItem("token", "");
    localStorage.setItem("user", "");
    localStorage.setItem("currentUser", "");
  }

  async function studentSignup(user = null) {
    ApiServices.studentSignup(user)
      .then((response) => {
        setToken(response.data.token);
        setUser(user.username);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", response.data.username);
        getCurrentUser(response.data.token);
        setError("");
      })
      .catch((e) => {
        console.log(e);
        setError(e.toString());
      });
  }

  async function facultySignup(user = null) {
    ApiServices.facultySignup(user)
      .then((response) => {
        setToken(response.data.token);
        setUser(user.username);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", response.data.username);
        getCurrentUser(response.data.token);
        setError("");
      })
      .catch((e) => {
        console.log(e);
        setError(e.toString());
      });
  }
  const [classes, setClasses] = React.useState([]);

  const retrieveClasses = () => {
    ApiServices.getClasses(token)
      .then((response) => {
        setClasses(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
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
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/student/class/search"
            element={
              <ClassSearch
                user={user}
                getCurrentUser={getCurrentUser}
                currentUser={currentUser}
                token={token}
              />
            }
          />
          <Route
            path="/class/details"
            element={<ClassesDetails token={token} />}
          />
          <Route
            path="/faculty/feed"
            element={
              <FacultyFeed
                token={token}
                getCurrentUser={getCurrentUser}
                logout={logout}
                currentUser={currentUser}
              />
            }
          />
          <Route
            path="/faculty/registration"
            element={<FacultyRegistration facultySignup={facultySignup} />}
          />
          <Route path="/landing" element={<LandingPage />} />
          <Route
            path="/student/login"
            element={
              <Login
                login={login}
                token={token}
                getCurrentUser={getCurrentUser}
              />
            }
          />
          <Route
            path="/faculty/login"
            element={<FacultyLogin login={login} token={token} />}
          />
          <Route path="/login/options" element={<LoginOptions />} />
          <Route
            path="/student/schudle"
            element={
              <Schudle
                token={token}
                user={user}
                getCurrentUser={getCurrentUser}
                currentUser={currentUser}
              />
            }
          />
          <Route
            path="/student/feed"
            element={
              <StudentFeed
                token={token}
                getCurrentUser={getCurrentUser}
                currentUser={currentUser}
              />
            }
          />
          <Route
            path="/student/registration"
            element={<StudentRegistration studentSignup={studentSignup} />}
          />
          <Route
            path="/faculty/existingclasses"
            element={
              <ExistingClasses
                token={token}
                classes={classes}
                retrieveClasses={retrieveClasses}
              />
            }
          />
          <Route
            path="/faculty/updateclass"
            element={
              <UpdateClass
                token={token}
                classes={classes}
                retrieveClasses={retrieveClasses}
              />
            }
          />
          <Route
            path="/faculty/createclass"
            element={
              <CreateClass token={token} retrieveClasses={retrieveClasses} />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Container>
      <footer
        id="footer"
        className="text-center text-lg-start bg-light text-muted mt-4"
      >
        <div className="text-center p-4">
          © Capstone Project CMSC 495 -
          <a
            target="_blank"
            className="text-reset fw-bold text-decoration-none"
          >
            Franklin Rodriguez
          </a>
          -
          <a
            target="_blank"
            className="text-reset fw-bold text-decoration-none"
          >
            Kyle Busey
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
