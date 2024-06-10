import { isDev } from "env";

export const BASE_URI =  isDev() ? 'http://localhost:8000' : 'https://api.ensemblecrafts.com';
export const API_PRIFIX = 'api';
export const REQUEST_BASE_URI = `${BASE_URI}/${API_PRIFIX}`;
export const productBaseURI = `${REQUEST_BASE_URI}/products`;
export const cart = `${REQUEST_BASE_URI}/cart`;
export const customer = `${REQUEST_BASE_URI}/customer`;
export const shirt = `${REQUEST_BASE_URI}/shirt`;
export const shipping = `${REQUEST_BASE_URI}/shipping`;
export const paypal = `${REQUEST_BASE_URI}/paypal`;
export const style = `${REQUEST_BASE_URI}/style`;
export const accent = `${REQUEST_BASE_URI}/accent`;


export const APIS = {
  upload: `${productBaseURI}/v1/upload`,
  product: `${productBaseURI}/v1`,
  customer: {
    signup: `${customer}/signup`, 
    signin: `${customer}/signin`, 
    currentUser:`${customer}/currentCustomer`, 
    signout: `${customer}/signout`, 
  },
  febric: {
    default: (userId:string) => `${productBaseURI}/default/${userId}/v1`,
  }, 
  shirt: {
    measurement: `${shirt}/measurement`
  },
  cart, 
  shipping: {
    
  }, 
  paypal: {
    clientId:`${paypal}/clientId`,
    createOrder: `${paypal}/create-order`, 
    onApprove:`${paypal}/on-approve`, 
    onCancel: `${paypal}/on-cancel`
  }, 
  style: {
    default:  `${style}/default`
  }

};
