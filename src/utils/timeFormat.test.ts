import { secondsToMinutesAndSeconds } from './timeFormat'; // Replace with the actual path to your secondsToMinutesAndSeconds file

describe('secondsToMinutesAndSeconds', () => {
  it('converts seconds to minutes and seconds format', () => {
    expect(secondsToMinutesAndSeconds(0)).toBe('00:00');
    expect(secondsToMinutesAndSeconds(30)).toBe('00:30');
    expect(secondsToMinutesAndSeconds(60)).toBe('01:00');
    expect(secondsToMinutesAndSeconds(90)).toBe('01:30');
    expect(secondsToMinutesAndSeconds(120)).toBe('02:00');
    expect(secondsToMinutesAndSeconds(3600)).toBe('60:00');
    expect(secondsToMinutesAndSeconds(3661)).toBe('61:01');
    expect(secondsToMinutesAndSeconds(36000)).toBe('600:00');
  });
});
