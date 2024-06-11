import { isDev } from "../../env"
import { productionDomains } from "../config/apis"
export const redirectTo = (url: string) => {

}

export const redirectToSignin = () => {
    if(!isDev()) {
        window.location.href = productionDomains.auth;
    }    
}