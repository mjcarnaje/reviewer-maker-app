import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://reviewerapp-aa8ab.firebaseio.com/',
});

export default instance;
