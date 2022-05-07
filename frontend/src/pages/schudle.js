import {React, useState, useEffect} from 'react';
import Body from '../components/Body';
import ApiServices from "../services/api-services";
import Card from "react-bootstrap/Card";


const StudentSchudle = (props) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
      retrieveUser();
    }, [props.token]);
  
    const retrieveUser = () => {
      
      ApiServices.getUser()
      .then( response => {
          setUser(response.data);
      })

    };
  

  return (
    <Body sidebar>
      <div>
        Classes schudle <b>for: </b> {user.username}
        {
          <Card>
            <Card.Body>
              <div>
                <b>id: </b> {user.id}
              </div>
            </Card.Body>
          </Card>
        }
      </div>
    </Body>
  );
};

export default StudentSchudle;