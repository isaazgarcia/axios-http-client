import api from './http';
import {handleErrorResponse, handleRequestConfig, handleRequestError, handleSuccessResponse} from "./handleResponse";
import BaseModelRequests from "./baseRequests";

api.interceptors.response.use(handleSuccessResponse,handleErrorResponse);
api.interceptors.request.use(handleRequestConfig,handleRequestError);

export const all = (arrayRequests) => Promise.all(arrayRequests);

//auth routes
export const auth = {
    async login(email, password) {return await api.post('/login', {email: email, password: password})},
    async logout() {return await api.post('/logout')}
};

//users routes
export const users = new BaseModelRequests("/users");
