import axios from 'axios';
import {BaseUrl} from "./consts";
export default axios.create({
    baseURL: BaseUrl,
    headers:{
        'Accept': 'application/json'
    }
})
