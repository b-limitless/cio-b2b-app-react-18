import { SigninForm, FormInterface } from "interface/IAuth.interface"
import { emailRegex, passwordRegex, validString } from "regrex"

export const signInModel: Partial<Record<keyof SigninForm, RegExp>> = {
    email: emailRegex,
    password: passwordRegex,
}

export const userModel:Partial<Record<keyof FormInterface, RegExp>> = {
    ...signInModel,
    confirmPassword: passwordRegex,
    agreement: /^(true)$/i
}