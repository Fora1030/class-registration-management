import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Body from '../components/Body';

function Register(){
    let navigate = useNavigate(); 
    const studentRouteChange = () =>{ 
      let path = "/student/registration"; 
      navigate(path);
    }
    const facultyRouteChange = () =>{ 
      let path = "/faculty/registration"; 
      navigate(path);
    }
    

  return (
    <Body>
      <div className="d-grid gap-2">
        <Button variant="primary" size="lg" onClick={studentRouteChange}>
            Students Registration
        </Button>
        <Button variant="secondary" size="lg" onClick={facultyRouteChange}>
            Faculty Members Registration
        </Button>
      </div>
    </Body>
  );
}

export default Register;