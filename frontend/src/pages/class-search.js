import { React, Component, useState, useEffect } from "react";
import Body from "../components/Body";
import axios from "axios";
import ClassesDetails from "./classesDetail";
import ApiServices from "../services/api-services";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import Alert from "react-bootstrap/Alert";
import Accordion from "react-bootstrap/Accordion";
import { useNavigate } from "react-router-dom";
import { useAccordionButton } from 'react-bootstrap/AccordionButton';


const ClassSearch = (props) => {
  let navigate = useNavigate();
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    retrieveClasses();
  }, [props.token]);

  const retrieveClasses = () => {
    ApiServices.getClasses(props.token)
      .then((response) => {
        setClasses(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log('totally custom!'),
    );
  
    return (
      <button
        type="button"
        style={{ backgroundColor: 'pink' }}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }

  const enrollClass = (data) =>{
    ApiServices.enrollClass(props.currentUser.id, data, props.token)
    alert('You have succesfully enrolled!')
    let path = "/student/schudle";
    navigate(path);
  }


  return (
    <Container>
       {props.currentUser.is_staff === true ? (
          <>
          <Alert variant="warning">
          You are in the students interface to go back to the faculty feed <Link to={"/faculty/feed"}>cilck here</Link>
            </Alert>
            
          </>
        ) : (
          <>
          </>
        )}
      {(props.token == null || props === "") && (props.currentUser =="") ? (
        <Alert variant="warning">
          You are not logged in. Please <Link to={"/login/options"}>login</Link>
        </Alert>
      ) : (
        <Body sidebar>
          <div>
            {classes.map((item) => {
              return (

                <Accordion defaultActiveKey="0">
                <Card>
                  <Card.Body>
                    <b>{item.class_name} </b> <br></br>
                    <b>Starts:</b> {item.start_date} <br></br>
                    <b>Ends:</b> {item.end_date} 
                  </Card.Body>
                  <Card.Header>
                    <CustomToggle eventKey="1">More</CustomToggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="1">
                    
                    <Card.Body>
                      
                    <b>Class: </b>{item.class_name} <br></br>
                    <b>Professor: </b>{item.professor_name}<br></br>
                    <b>Credits: </b>{item.number_of_credits}<br></br>
                    <b>Description: </b> <p>{item.description}</p>
                    <b>Location: </b>{item.location}<br></br>
                    <b>Starts: </b>{item.start_date}<br></br>
                    <b>Ends: </b>{item.end_date}<br></br>
                    <b>Open seats: </b>{item.avaible_seats}<br></br>
                    <Button variant="primary" onClick={() => enrollClass({
                      
                      "user_id": props.currentUser.id,
                        "user":  props.currentUser.id,
                        "courses": [
                            {
                                "class_id": item.class_id,
                                "class_name": item.class_id
                            }
                        ]
                      
                      })}>Enroll</Button>{' '}
                    </Card.Body>

                  </Accordion.Collapse>
                </Card>
              </Accordion>

              );
            })}
          </div>
        </Body>
      )}
    </Container>
  );
};

export default ClassSearch;
