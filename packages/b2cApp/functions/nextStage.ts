export const nextStage = (process: object, stage: any, setStage: Function) => {
  // First get the index of stage step
  const findIndex = Object.keys(process).indexOf(stage);
  // Add one to that index
  const getNextValue = Object.values(process)[findIndex + 1];
  setStage(getNextValue);
};
