import { validDigit, validString, validUnite } from 'regrex';

export const user = {
  firstName: validString,
  lastName: validString,
  height: validDigit,
  weight: validDigit,
  age: validDigit,
  inch: validDigit,
  unite: validUnite,
  neck: validDigit,
};

export const shirtMeasurement = {
  sleevLength: validDigit,
  shoulderWidth: validDigit,
  chestAround: validDigit,
  stomach: validDigit,
  bicepAround: validDigit,
  torsoLength: validDigit,
  hips: validDigit,
  wrist: validDigit,
  neck: validDigit,
};

export const userAndShirtMeasurement = {
  ...user,
  ...shirtMeasurement
}