export const BASE_URI = 'http://localhost:8000'
export const API_PRIFIX = 'api';
export const REQUEST_BASE_URI = `${BASE_URI}/${API_PRIFIX}`;

export const APIS = {
    auth: {
        signup: `${REQUEST_BASE_URI}/users/signup`, 
        verify: `${REQUEST_BASE_URI}/users/verify`, 
        signin: `${REQUEST_BASE_URI}/users/signin`, 
        currentUser: `${REQUEST_BASE_URI}/users/currentuser`, 
    }, 
    user: {

    }, 
    product: {

    }
}