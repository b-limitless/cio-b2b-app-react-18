import { isDev } from "../../env";
export const baseURL =  isDev() ? 'http://localhost:8000' : 'https://api.ensemblecrafts.com';
export const orderURI = `${baseURL}/order`

export const APIS = {
    auth: {
        signout: `${baseURL}/api/users/signout`, 
        currentUser: `${baseURL}/api/users/currentuser`
    }, 
    order: {
        
    }
}