import { isDev } from "../env";

export const BASE_URI = isDev()
  ? "http://localhost:8000"
  : "https://api.ensemblecrafts.com";
export const API_PRIFIX = "api";
export const REQUEST_BASE_URI = `${BASE_URI}/${API_PRIFIX}`;

export const APIS = {
  auth: {
    signup: `${REQUEST_BASE_URI}/users/signup`,
    verify: `${REQUEST_BASE_URI}/users/verify`,
    signin: `${REQUEST_BASE_URI}/users/signin`,
    currentUser: `${REQUEST_BASE_URI}/users/currentuser`,
  },
  user: {},
  product: {},
};

export const productionBaseDomain = (subdomain: string) =>
  `https://${subdomain}.ensemblecrafts.com`;
export const productionDomains = {
  dashboard: productionBaseDomain("dashboard"),
  auth: productionBaseDomain("auth"),
};
