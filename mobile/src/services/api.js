import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.1.16:3333',
});

//baseURL: 'http:192.168.0.104:3333',

export default api;