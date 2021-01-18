import axios from 'axios';
axios.defaults.timeout = 30000;

axios.interceptors.response.use(
  (response) => {
    const responseText = response.data && response.data.status 
      ? response.data.status
      : ''; 
    if (
      response.status === 200 &&
      responseText.toUpperCase() === 'TOKEN IS EXPIRED'
    ) {
      // window.location.href = '/session-expired';
      window.location.replace('/session-expired');
    }
    return response;
  },
);