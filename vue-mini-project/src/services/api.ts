import axios from 'axios';

interface RegistrationData {
    id: null;
    name: string;
    nickName: string;
    email: string;
    dateOfBirth: Date;
    gender: string;
    registrationDate: Date;
}

export const registerUser = (data: RegistrationData) => {
    return axios.post('https://tabletennis-web-dev.azurewebsites.net/api/Player', data);
}