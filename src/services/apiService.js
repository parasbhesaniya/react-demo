import axios from 'axios';

const baseUrl = ` https://mazdr9dk.herokuapp.com`;
const instance = axios.create({
  baseURL: baseUrl,
  headers: {
    'token': 'interview',
    'Content-Type': 'application/json'
  }
});

const api = {
  getData: data => {
    return instance.post('/get-mock-data', data)
  }
};

export { api };
