export function formatNumber(value: number): string {
  if (value < 1000) {
    return value.toString();
  } else if (value < 1000000) {
    return Math.round((value / 1000) * 10) / 10 + 'K';
  } else {
    return Math.round((value / 1000000) * 10) / 10 + 'M';
  }
}
