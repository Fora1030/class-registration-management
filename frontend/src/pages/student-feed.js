import {React, useState, useEffect} from 'react';
import Body from '../components/Body';
import ApiServices from "../services/api-services";

const StudentFeed = props => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        retrieveUser();
        props.getCurrentUser();
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
            Classes feed {user.user}
        </div>
    </Body>
    );
}

export default StudentFeed;