export const isThereAnyError = (obj:any) => {
	const error = Object.values(obj).some(val => val !== null);
	return error;
}