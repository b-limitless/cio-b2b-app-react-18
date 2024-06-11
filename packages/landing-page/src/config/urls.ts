import { isDev } from "./env";

export const BASE_URI = isDev()
  ? "http://localhost:8000"
  : "https://api.ensemblecrafts.com";

export const productionBaseDomain = (subdomain:string) => `https://${subdomain}.ensemblecrafts.com`;

export const authService = productionBaseDomain('auth');
export const authDomain = {
    signin: `${authService}/signin`, 
    signup: `${authService}/signup`, 
}