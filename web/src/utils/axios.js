import axios from 'axios';
axios.defaults.timeout = 30000;

axios.interceptors.response.use(
  (response) => {
    const responseText = response.response.data && response.response.data.status 
      ? response.response.data.status
      : ''; 
    if (
      response.response.status === 200 &&
      responseText.toUpperCase() === 'TOKEN IS EXPIRED'
    ) {
      window.location.href = '/login';
    }
    return response;
  },
);