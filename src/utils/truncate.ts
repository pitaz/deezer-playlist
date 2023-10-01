export function truncateString(inputString: string, maxLength: number): string {
  if (inputString.length <= maxLength) {
    return inputString;
  } else {
    return inputString.substring(0, maxLength) + '...';
  }
}