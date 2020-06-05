import axios from 'axios';

const config = {
    baseURL: process.env.REACT_APP_SERVER_API_BASE_HOST
};

if (config.baseURL && config.baseURL.indexOf('localhost') >= 0) {
    console.log('running on localhost')
} else {
    console.log('running in production mode')
    config.withCredentials = true;
}

const axiosInstance = axios.create(config);

export default axiosInstance;