import React, { useState, useEffect } from 'react';
import { useLocation} from 'react-router-dom';
import ApiServices from "../services/api-services";
import Body from '../components/Body';
import Form from 'react-bootstrap/Form';  
import Container from 'react-bootstrap/Container';  
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import Alert from 'react-bootstrap/Alert';


const UpdateClass = props => {
    const selectedClass = useLocation();

    const initialFormData = Object.freeze({
      "class_name" : selectedClass.state.currentClass.class_name ,
      "professor_name" : selectedClass.state.currentClass.professor_name,
      "number_of_credits": selectedClass.state.currentClass.number_of_credits,
      "description" :  selectedClass.state.currentClass.description ,
      "location" :  selectedClass.state.currentClass.location,
      "start_date" : selectedClass.state.currentClass.start_date ,
      "end_date" : selectedClass.state.currentClass.end_date ,
      "avaible_seats": selectedClass.state.currentClass.avaible_seats,
    });

    const [formData, updateFormData] = useState(initialFormData)
    
    const handleChange =(e) => {
      updateFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
    
    useEffect(() => {
      updateClass();
    }, [props.token]);
    
    const updateClass = () => {
      ApiServices.updateClasses( selectedClass.state.currentClass.class_id,{
        "class_name" : formData.class_name ,
        "professor_name" : formData.professor_name,
        "number_of_credits": formData.number_of_credits,
        "description" : formData.description ,
        "location" :  formData.location,
        "start_date" : formData.start_date ,
        "end_date" : formData.end_date ,
        "avaible_seats": formData.avaible_seats
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
            <Form.Label><b>Class Name: </b>
            </Form.Label>
            <Form.Control
              type="text"
              value={formData.class_name}
              name="class_name"
              onChange={handleChange}
              />
          </Form.Group>
  
          <Form.Group className="mb-3">
            <Form.Label><b>Professor Name:</b>
            </Form.Label>
            <Form.Control
              type="text"
             value={formData.professor_name}
             name="professor_name"
              onChange={handleChange}
              />
          </Form.Group>
  
          <Form.Group className="mb-3">
            <Form.Label><b>Number of Credits:</b>

            </Form.Label>
            <Form.Control
              type="text"
              value={formData.number_of_credits}
              name="number_of_credits"
              onChange={handleChange}
              />
          </Form.Group>
  
          <Form.Group className="mb-3">
            <Form.Label><b>Location:</b>

            </Form.Label>
            <Form.Control
              type="text"
             value={formData.location}
             name="location"
              onChange={handleChange}
              />
          </Form.Group>
            
          <Form.Group className="mb-3">
            <Form.Label><b>Number of Seats:</b> 

            </Form.Label>
            <Form.Control
              type="text"
             value={formData.avaible_seats}
             name="avaible_seats"
              onChange={handleChange}
              />
          </Form.Group>
  
  
          <Form.Group className="mb-3">
            <Form.Label><b>Description:</b>

            </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={formData.description}
              name="description"
              onChange={handleChange}
              />
          </Form.Group>
  
          <Form.Group className="mb-3">
            <Form.Label><b>Class Start Date:</b>

            </Form.Label>
            <Form.Control
              type="date"
               value={formData.start_date}
               name="start_date"
              onChange={handleChange}
              />
          </Form.Group>
  
          <Form.Group className="mb-3">
            <Form.Label>
              <b>Class End Date: </b>
            </Form.Label>
            <Form.Control
              type="date"
                value={formData.end_date}
                name="end_date"

              onChange={handleChange}
              />
          </Form.Group>

          <Button variant="primary" onClick={updateClass}>
            Update Class
          </Button>
        </Form>
              </div></Body>)}
      </Container>
    );
}

export default UpdateClass;