import axios from 'axios';

class ApiServices{
    getClasses(token){
        axios.defaults.headers.common["Authorization"] = "Token" + token;
        return axios.get('http://127.0.0.1:8000/classes/');
    }

    login(data){
        return axios.post('http://127.0.0.1:8000/api/login/', data)
    }

    facultySignup(data){
        return axios.post('http://127.0.0.1:8000/api/faculty/signup/', data)
    }

    studentSignup(data){
        return axios.post('http://127.0.0.1:8000/api/student/signup/', data)
    }
}

export default new ApiServices();