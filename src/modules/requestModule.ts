import axios from 'axios';

const makeRequest = async (data: string) => {

    await axios.post('', data,{baseURL: 'http://localhost:8080',
    method: 'post',
    headers: {
      'Content-Type': 'text',
      'Content-Encoding': 'utf8'
    }})
    .then(function (res): any {
      console.log(res.data)
      console.log(res.status)
      console.log(res.statusText)
      console.log(res.headers);
      console.log(res.config);
    })
}

export default makeRequest;