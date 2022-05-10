import { React, Component, useState, useEffect } from "react";
import Body from "../components/Body";
import ApiServices from "../services/api-services";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import Alert from "react-bootstrap/Alert";

const ExistingClasses = (props) => {
  useEffect(() => {
    props.retrieveClasses();
  }, [props.token]);
  const deleteUser = (id) => {
    ApiServices.deleteClasses(id, props.token).then(() => {
      refresh();
    });
  };

  const refresh = () => {
    props.retrieveClasses();
  };

  return (
    <Container>
      {props.token == null || props === "" || props.classes == "" ? (
        <Alert variant="warning">
          You are not logged in. Please <Link to={"/login/options"}>login</Link>
        </Alert>
      ) : (
        <Body sidebarFaculty>
          <div>
            {props.classes.map((todo) => {
              return (
                <Card key={todo.id} className="mb-3">
                  <Card.Body>
                    <div>
                      <Card.Text>
                        {" "}
                        <b>Class:</b> {todo.class_name}
                      </Card.Text>
                      <Card.Text>
                        Start Date: {todo.start_date} End Date: {todo.end_date}
                      </Card.Text>
                    </div>

                    <Button
                      variant="outline-danger"
                      className="me-2"
                      onClick={() => deleteUser(todo.class_id)}
                    >
                      Delete
                    </Button>

                    <Link
                      to="/faculty/updateclass"
                      state={{ currentClass: todo }}
                    >
                      <Button variant="outline-info" className="me-2">
                        More Details
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </Body>
      )}
    </Container>
  );
};

export default ExistingClasses;
