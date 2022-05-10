import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import ApiServices from "../services/api-services";
import Body from '../components/Body';
import axios from 'axios';
import Form from 'react-bootstrap/Form';  
import Container from 'react-bootstrap/Container';  
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import Alert from 'react-bootstrap/Alert'


const UpdateClass = props => {
    const [class_name, setclass_name] =useState([]);
    const [professor_name, setprofessor_name] =useState([]); 
    const [number_of_credits, setnumber_of_credits] =useState([]);
    const [description, setdescription] =useState([]);
    const [location, setlocation] =useState([]);
    const [start_date, setstart_date] =useState([]);
    const [end_date, setend_date] =useState([]);
    const [avaible_seats, setavaible_seats] =useState([]);
    const [currentClass, setCurrentClass] = useState([]);

    const selectedClass = useLocation();

    useEffect(()=>{
        console.log("Current Class -obejct", selectedClass)
        console.log("Current Class -state", selectedClass.state)
        console.log("Current Class -currentClass", selectedClass.state.currentClass)
        console.log("Current Class -currentClass -id", selectedClass.state.currentClass.class_id)
    },[])

    
    const onChangeClassName =(e) => {
        const  class_name =e.target.value;
        setclass_name(class_name);
    };
    const onChangeProfessor =(e) => {
        const professor_name = e.target.value;
        setprofessor_name(professor_name);
    };
    const onChangeNumberOfCredits =(e) => {
        const number_of_credits =e.target.value;
        setnumber_of_credits(number_of_credits);
    };
    const onChangeDescription =(e) => {
        const description=e.target.value;
        setdescription(description);
    };
    
    const onChangeLocation =(e) => {
        const location=e.target.value;
        setlocation(location);
    };
    const onChangeStartDate =(e) => {
        const start_date=e.target.value;
        setstart_date(start_date);
    }; 
    const onChangeEndDate =(e) => {
        const end_date=e.target.value;
        setend_date(end_date);
    };     
    const onChangeSeats =(e) => {
        const avaible_seats=e.target.value;
        setavaible_seats(avaible_seats);
    };
    
    const createClasses = () => {
      ApiServices.updateClasses(selectedClass.state.currentClass.class_id,{
        "class_name" : class_name ,
        "professor_name" : professor_name,
        "number_of_credits": number_of_credits,
        "description" : description ,
        "location" :  location,
        "start_date" : start_date ,
        "end_date" : end_date ,
        "avaible_seats": avaible_seats
      }, props.token )
      .then ((response) => {
          console.log(response);
      })
      .catch(function (error){
          console.log(error.response);
      } )
    };
  
    return (
      <Container>
        {props.token == null || props ===""?(
            <Alert variant="warning">
                You are not logged in. Please <Link to = {"/login/options"}>login</Link>
            </Alert>
        ):(
          <Body sidebarFaculty> <div>
                  
        <Form>
  
          <Form.Group className="mb-3">
            <Form.Label>Class Name</Form.Label>
            <Form.Control
              type="text"
              defaultValue= { selectedClass.state.currentClass.class_name}
              onChange={onChangeClassName}
              />
          </Form.Group>
  
          <Form.Group className="mb-3">
            <Form.Label>Professor Name</Form.Label>
            <Form.Control
              type="text"
              defaultValue={ selectedClass.state.currentClass.professor_name}
              onChange={onChangeProfessor}
              />
          </Form.Group>
  
          <Form.Group className="mb-3">
            <Form.Label>Number of Credits</Form.Label>
            <Form.Control
              type="text"
              defaultValue={ selectedClass.state.currentClass.number_of_credits}
              onChange={onChangeNumberOfCredits}
              />
          </Form.Group>
  
          <Form.Group className="mb-3">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
             defaultValue= { selectedClass.state.currentClass.location}
              onChange={onChangeLocation}
              />
          </Form.Group>
            
          <Form.Group className="mb-3">
            <Form.Label>Number of Seats</Form.Label>
            <Form.Control
              type="text"
             defaultValue= { selectedClass.state.currentClass.avaible_seats}
              onChange={onChangeSeats}
              />
          </Form.Group>
  
  
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
             defaultValue= { selectedClass.state.currentClass.description}
              onChange={onChangeDescription}
              />
          </Form.Group>
  
          <Form.Group className="mb-3">
            <Form.Label>Class Start Date</Form.Label>
            <Form.Control
              type="date"
              name="dod"
              defaultValue= { selectedClass.state.currentClass.start_date}
              onChange={onChangeStartDate}
              />
          </Form.Group>
  
          <Form.Group className="mb-3">
            <Form.Label>Class End Date</Form.Label>
            <Form.Control
              type="date"
              name="dod"
                defaultValue= { selectedClass.state.currentClass}

              onChange={onChangeEndDate}
              />
          </Form.Group>

          <Button variant="primary" onClick={createClasses}>
            Update Class
          </Button>
        </Form>
              </div></Body>)}
      </Container>
    );
}

export default UpdateClass;