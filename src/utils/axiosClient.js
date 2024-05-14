import axios from 'axios' ; 

const baseURL = import.meta.env.VITE_APP_SERVER_BASE_URL ; 
const apiKey = import.meta.env.VITE_APP_API_TOKEN ; 

export const axiosClient = axios.create({
    baseURL :baseURL , 
    headers :{
        common: {
            Authorization:`Bearer ${apiKey}`
        }
    }
})