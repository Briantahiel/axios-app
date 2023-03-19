import axios from 'axios'

// Default Config for AXIOS

export default axios.create(
    {
        baseURL: 'https://api.chucknorris.io/jokes/random',
        responseType: 'json',
        timeout: 5000,
        // method: 'get'
    }
)