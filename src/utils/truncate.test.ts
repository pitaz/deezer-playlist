import { truncateString } from './truncate';

describe('truncateString', () => {
  it('does not truncate if the string length is less than or equal to the max length', () => {
    expect(truncateString('Hello', 10)).toBe('Hello');
    expect(truncateString('This is a test', 15)).toBe('This is a test');
    expect(truncateString('Short', 5)).toBe('Short');
  });

  it('truncates the string and adds ellipsis if it exceeds the max length', () => {
    expect(truncateString('A very long sentence that goes on and on', 20)).toBe(
      'A very long sentence...'
    );
  });
});
