import {React, useState, useEffect} from 'react';
import Body from '../components/Body';
import ApiServices from "../services/api-services";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/esm/Container";


const StudentSchudle = (props) => {
  const [profile, setProfile] = useState([]);
  var userP ="";

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
    ApiServices.getStudentProfile(props.token, props.currentUser.id).then((response) => {
      setProfile(response.data);
      userP = response.data
    });
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
              <b>bio:</b> {item.class_name}
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