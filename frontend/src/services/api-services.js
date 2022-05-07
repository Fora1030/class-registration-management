import axios from 'axios';

class ApiServices{
    getUser(){
        return axios.get('http://127.0.0.1:8000/api/user/');
    }
    getClasses(token){
        console.log(token);
        axios.defaults.headers.common['Authorization'] = 'Token ' + token;
        return axios.get('http://127.0.0.1:8000/api/classes/');
    }
    getUserClasses(token, id){
        console.log(token);
        axios.defaults.headers.common['Authorization'] = 'Token ' + token;
        return axios.get('http://127.0.0.1:8000/api/classes/'+id+'/');
    }
    getStudentProfile(token, id){
        console.log(token);
        axios.defaults.headers.common['Authorization'] = 'Token ' + token;
        return axios.get('http://127.0.0.1:8000/api/profile/'+id+'/');
    }

    createClasses(data, token){
        console.log(token);
        axios.defaults.headers.common['Authorization'] = 'Token ' + token;
        return axios.post('http://127.0.0.1:8000/api/faculty/create/classes/', data);
    }

    updateClasses(id, data, token){
        console.log(token);
        axios.defaults.headers.common['Authorization'] = 'Token ' + token;
        return axios.put('http://127.0.0.1:8000/api/update/classes/${id}/', data);
    }

    deleteClasses(id, token){
        console.log(token);
        axios.defaults.headers.common['Authorization'] = 'Token ' + token;
        return axios.delete('http://127.0.0.1:8000/api/delete/classes/${id}/');
    }

    login(data){
        return axios.post('http://127.0.0.1:8000/api/login/', data)
    }

    logout(token){
        axios.defaults.headers.common['Authorization'] = 'Token ' + token;
        return axios.post('http://127.0.0.1:8000/api/user/logout/')
    }

    facultySignup(data){
        return axios.post('http://127.0.0.1:8000/api/faculty/signup/', data)
    }

    studentSignup(data){
        return axios.post('http://127.0.0.1:8000/api/student/signup/', data)
    }
}

export default new ApiServices();