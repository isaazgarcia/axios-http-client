export const BaseUrl = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ?
    "http://127.0.0.1:8000/api" : "https://localhost/api"; //change localhost to the production api url
