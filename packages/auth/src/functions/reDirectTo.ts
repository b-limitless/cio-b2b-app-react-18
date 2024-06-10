import { isDev } from "../env"
import { productionDomains } from "../config/apis"
export const redirectTo = (url: string) => {

}

export const redirectToDashboard = () => {
    if(!isDev()) {
        window.location.href = productionDomains.dashboard;
    }    
}