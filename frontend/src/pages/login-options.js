import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Body from '../components/Body';

function LoginOptions(){
    let navigate = useNavigate(); 
    const studentRouteChange = () =>{ 
      let path = "/student/login"; 
      navigate(path);
    }
    const facultyRouteChange = () =>{ 
      let path = "/faculty/login"; 
      navigate(path);
    }
    

  return (
    <Body>
      <div className="d-grid gap-2">
        <Button variant="primary" size="lg" onClick={studentRouteChange}>
            Students Login
        </Button>
        <Button variant="secondary" size="lg" onClick={facultyRouteChange}>
            Faculty Login
        </Button>
      </div>
    </Body>
  );
}

export default LoginOptions;