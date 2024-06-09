export function removeTimestamp(jsonStr: string) {
  return jsonStr.replace(/\?timestamp=\d+/g, '');
}
