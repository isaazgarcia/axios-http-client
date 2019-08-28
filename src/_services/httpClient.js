import api from '../_utils/http';
import {handleErrorResponse, handleRequestConfig, handleRequestError, handleSuccessResponse} from "../_utils/handleResponse";
import baseRequests from "../_utils/baseRequests";

api.interceptors.response.use(handleSuccessResponse,handleErrorResponse);
api.interceptors.request.use(handleRequestConfig,handleRequestError);

export const apiUtils = {
    all(arrayRequests) {return Promise.all(arrayRequests)},
    async getExample(route){return await api.get(route);}
};

//auth routes
export const auth = {
    async login(email, password) {
        return await api.post('/login', {email: email, password: password})
    },
    async logout() {
        return await api.post('/logout')
    }
};

//users routes
export const users ={
    ...baseRequests("/users"),
};
