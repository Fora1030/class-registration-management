import {React, useState, useEffect} from 'react';
import Body from '../components/Body';
import ApiServices from "../services/api-services";
import Container from "react-bootstrap/esm/Container";
import Table from 'react-bootstrap/Table';


const StudentSchudle = (props) => {
  const [profile, setProfile] = useState([]);
  var userP = "";

  useEffect(() => {
    currentUser();
  }, [props.user]);

  const currentUser = () => {
    props.getCurrentUser();
  };

  useEffect(() => {
    retrieveProfile();
  }, [props.currentUser, props.token]);

  const retrieveProfile = () => {
    ApiServices.getStudentProfile(props.token, props.currentUser.id).then(
      (response) => {
        setProfile(response.data);
        userP = response.data;
      }
    );
  };

  return (
    <Container>
      <Body sidebar>
        {profile == "" ? (
          <h1>class loading</h1>
        ) : (
          <div>
            Classes schudle <b>for: </b> {props.user}
            {profile.courses.map((item) => {
              return (
                <>
                  <div>
                    {" "}
                    <b>Class:</b> {item.class_name}
                    <Table striped bordered hover variant="dark">
                      <thead>
                        <tr>
                         
                          <th>Class: {item.class_name}</th>
                          <th>Starts: {item.start_date}</th>
                          <th>Ends: {item.start_date}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          
                          <td>Professor: {item.professor_name}</td>
                          <td>Location: {item.location}</td>
                          <td>Credits: {item.number_of_credits}</td>
                        </tr>

                        <tr>
                          <td colSpan={3}> Description: <p>
                          {item.description}  
                          </p>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </>
              );
            })}
          </div>
        )}
      </Body>
    </Container>
  );
};

export default StudentSchudle;