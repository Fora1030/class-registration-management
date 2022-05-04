import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
class ClassesDetails extends Component {
    render(){
        var classOpen = "";
        const obj = this.props.classesDetails;
        if (obj.open){
            classOpen = "The class is open"
        } else {
            classOpen = "The Class is close"
        }

        return(
            <div style={{color: "green", border: "1px solid blue"}}>
                <h4>Class: {obj.class_name} Professor: {obj.professor_name} </h4>
                <h4>Location: {obj.location} </h4>
                <h4>Start Date: {obj.start_date} Ends: {obj.end_date}</h4>
                <h4>Credits: {obj.number_of_credits} </h4>
                <h4>Seats: {obj.avaible_seats}</h4>
                <h4>Open: {classOpen}</h4>
                <p><h4>Description:</h4> {obj.description} </p>
                <Button variant="outline-primary">Enroll</Button>{' '}
            </div>
        )
    }
}
export default ClassesDetails