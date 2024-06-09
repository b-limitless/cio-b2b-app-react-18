export const  emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
export const  urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
export const alphanumericRegex = /^[a-zA-Z0-9 ]+$/;
//Password validation (at least 8 characters, at least one uppercase letter, one lowercase letter, and one number):
export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
export const validString = /^[\w ]{1,}$/;
export const validDigit = /^(?!0\d)[0-9]{1,100}$/; ///^[0-9]{1,100}$/
export const validUnite = /^(feet|cm)$/i

export const anything = /^[\w ]{0,}$/;