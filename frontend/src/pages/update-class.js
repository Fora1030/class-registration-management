import { React, Component, useState, useEffect } from "react";
import Body from "../components/Body";
import axios from "axios";
import ClassesDetails from "./classesDetail";
import ApiServices from "../services/api-services";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import Alert from 'react-bootstrap/Alert'

const UpdateClass = props => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
      retrieveClasses();
    }, [props.token]);
  
    const retrieveClasses = () => {
      ApiServices.getClasses(props.token)
        .then( response => {
          setClasses(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    };
  
    return (
        <Container>
          {props.token == null || props ===""?(
              <Alert variant="warning">
                  You are not logged in. Please <Link to = {"/login/options"}>login</Link>
              </Alert>
          ):(
                  <Body sidebarFaculty>
              <div>
        {classes.map((todo) => {
            return (
                <Card key={todo.id} className="mb-3">
              <Card.Body>
                <div>
                  <Card.Text> <b>Class:</b> {todo.class_name}</Card.Text>
                  <Card.Text>Start Date: {todo.start_date} End Date: {todo.end_date}</Card.Text>
                </div>
                <Link
                  to={{
                      pathname: "/todos/" + todo.id,
                      state: {
                          currentTodo: todo,
                      },
                  }}
                  >
                  <Button variant="outline-danger" className="me-2">
                    Delete
                  </Button>
                </Link>
                <Link
                  to={{
                      pathname: "/todos/" + todo.id,
                      state: {
                          currentTodo: todo,
                      },
                  }}
                  >
                  <Button variant="outline-warning" className="me-2">
                    Update
                  </Button>
                </Link>
                <Button variant="outline-info">More Details</Button>
              </Card.Body>
            </Card>
          );
      })}
          </div>
          </Body>
          )}
      </Container>
    );
}

export default UpdateClass;