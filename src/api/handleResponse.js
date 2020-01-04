export function handleSuccessResponse(response) {
    // Do something with response data
    return response;
}

export function handleErrorResponse(error) {
    // Do something with response error
    return Promise.reject(error);
}

export function handleRequestConfig(response) {
    // Do something with request config
    return response;
}

export function handleRequestError(error) {
    // Do something with request error
    return Promise.reject(error);
}
