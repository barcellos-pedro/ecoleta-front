import axios from 'axios';

const api = axios.create({
    baseURL:'https://ecoleta-server-v1.herokuapp.com:3333/'
});

export default api;