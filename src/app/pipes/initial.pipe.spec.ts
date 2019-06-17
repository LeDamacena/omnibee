import { InitialPipe } from '@pipes/initial.pipe';

describe('InitialPipe', () => {
  it('create an instance', () => {
    const pipe = new InitialPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return first letter', () => {
    const pipe = new InitialPipe();
    expect(pipe.transform('leandro')).toBe('L');
  });

  it('should return false', () => {
    const pipe = new InitialPipe();
    expect(pipe.transform('')).toBe('');
  });
});
