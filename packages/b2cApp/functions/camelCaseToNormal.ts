export function camelCaseToNormal(
  camelCaseString: string,
  firstLetterUpperCase?: boolean, 
  toUpperCase?: boolean
): string {
  // Replace capital letters with a space followed by the lowercase letter
  let normalString = camelCaseString.replace(/([A-Z])/g, " $1");

  // Convert the string to lowercase and trim any leading/trailing whitespace
  normalString = normalString.toLowerCase().trim();

  if(toUpperCase) {
    return normalString.toUpperCase();
  }
  
  if (firstLetterUpperCase) {
    return `${normalString[0].toUpperCase()}${normalString.slice(1)}`;
  }

  return normalString;
}
