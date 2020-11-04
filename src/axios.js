import axios from 'axios';

const instance = axios.create({ baseURL: 'http://localhost:60572/api/' })
export default instance;