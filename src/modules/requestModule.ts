import axios from 'axios';

const makeRequest = async (data: string) => {

  await axios.post('/api', data, {
    baseURL: 'http://localhost:8080',
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(function (res): any {
      console.log(res.config.data);
    })
}

export default makeRequest;