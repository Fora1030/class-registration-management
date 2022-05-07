import {React, useState, useEffect} from 'react';
import Body from '../components/Body';
import ApiServices from "../services/api-services";

const StudentFeed = props => {
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
            Classes feed {user.id}
        </div>
    </Body>
    );
}

export default StudentFeed;